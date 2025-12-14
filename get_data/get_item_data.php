<?php
if (!ob_start("ob_gzhandler"))
    ob_start();

header("Content-Type: application/json");
require_once '../db_connect.php';

// Default SQL
$sql = "
    SELECT 
        i.id AS item_id, 
        i.name AS item_name, 
        i.image_location AS image_location,
        it.type_name AS item_type, 
        s.stat_name, 
        CONCAT(s.value, IF(s.stat_type = 'Percentage', '%', '')) AS formatted_value, 
        s.stat_condition,
        i.pre_upgrade_id,
        pre_upgrade.name AS pre_upgrade_name
    FROM items i
    LEFT JOIN item_stats s ON i.id = s.item_id
    LEFT JOIN item_types it ON i.type_id = it.id
    LEFT JOIN items pre_upgrade ON i.pre_upgrade_id = pre_upgrade.id
    WHERE 1
";

$params = [];
$types = "";

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $item_id = isset($_GET['id']) ? intval($_GET['id']) : null;
    $item_name = isset($_GET['name']) ? urldecode(trim($_GET['name'])) : null;
    $item_type = $_GET['type'] ?? null;

    if ($item_id) {
        $sql .= " AND i.id = ?";
        $params[] = $item_id;
        $types .= "i";
    }
    if ($item_name) {
        $sql .= " AND LOWER(i.name) LIKE LOWER(?)";
        $params[] = "%$item_name%";
        $types .= "s";
    }

    if ($item_type) {
        $actualTypes = [];

        if (!is_array($item_type)) {
            $item_type = [$item_type];
        }

        foreach ($item_type as $type) {
            switch (strtolower($type)) {
                case 'any':
                    $actualTypes = [];
                    break 2;
                case 'equipments':
                    $actualTypes = array_merge($actualTypes, [
                        'additional',
                        'armor',
                        'special ring',
                        'one handed sword',
                        'two handed sword',
                        'bow',
                        'bowgun',
                        'staff',
                        'magic device',
                        'katana',
                        'halberd',
                        'knuckles',
                        'arrow',
                        'dagger',
                        'shield',
                        'ninjutsu scroll'
                    ]);
                    break;
                default:
                    $actualTypes[] = strtolower($type);
                    break;
            }
        }

        if (!empty($actualTypes)) {
            $placeholders = implode(',', array_fill(0, count($actualTypes), '?'));
            $sql .= " AND LOWER(it.type_name) IN ($placeholders)";
            foreach ($actualTypes as $type) {
                $params[] = $type;
                $types .= "s";
            }
        }
    }

    foreach ($_GET as $key => $value) {
        if (is_numeric($key)) {
            $decoded = json_decode($value, true);
            if (
                isset($decoded['stat_name'], $decoded['operator'], $decoded['value'])
            ) {
                $statName = $decoded['stat_name'];
                $operator = $decoded['operator'];
                $value = $decoded['value'];
                $valueType = (isset($decoded['stat_type']) && $decoded['stat_type'] === "Percentage") ? "Percentage" : "Flat";

                if ($statName === "Element" && $operator === "=" && is_array($value)) {
                    $noElementSelected = false;
                    $elements = [];

                    foreach ($value as $v) {
                        if (strtolower($v) === 'no') {
                            $noElementSelected = true;
                        } else {
                            $elements[] = ucfirst(strtolower($v)) . " Element";
                        }
                    }

                    if ($noElementSelected && !empty($elements)) {
                        $placeholders = implode(',', array_fill(0, count($elements), '?'));
                        $sql .= "
                            AND (
                                i.id IN (
                                    SELECT item_id FROM item_stats 
                                    WHERE stat_name IN ($placeholders)
                                    AND stat_type = 'Flat'
                                    AND value = 1
                                )
                                OR i.id NOT IN (
                                    SELECT item_id FROM item_stats WHERE stat_name LIKE '%Element%'
                                )
                            )";
                        foreach ($elements as $el) {
                            $params[] = $el;
                            $types .= "s";
                        }
                    } elseif ($noElementSelected) {
                        $sql .= "
                            AND i.id NOT IN (
                                SELECT item_id FROM item_stats WHERE stat_name LIKE '%Element%'
                            )";
                    } else {
                        $placeholders = implode(',', array_fill(0, count($elements), '?'));
                        $sql .= "
                            AND i.id IN (
                                SELECT item_id FROM item_stats 
                                WHERE stat_name IN ($placeholders)
                                AND stat_type = 'Flat'
                                AND value = 1
                            )";
                        foreach ($elements as $el) {
                            $params[] = $el;
                            $types .= "s";
                        }
                    }
                    continue;
                }

                $allowedOps = [">", ">=", "=", "<", "<="];
                $operator = in_array($operator, $allowedOps) ? $operator : "=";

                $sql .= " AND i.id IN (
                    SELECT item_id 
                    FROM item_stats 
                    WHERE stat_name = ? 
                    AND stat_type = ? 
                    AND value $operator ?
                )";

                $params[] = $statName;
                $params[] = $valueType;
                $params[] = $value;
                $types .= "ssi";
            }
        }
    }
}

$stmt = $conn->prepare($sql);
if (!empty($params)) {
    $stmt->bind_param($types, ...$params);
}
$stmt->execute();
$result = $stmt->get_result();

$data = [];
$itemIds = [];

while ($row = $result->fetch_assoc()) {
    $item_id = $row['item_id'];
    $itemIds[] = $item_id;

    if (!isset($data[$item_id])) {
        $data[$item_id] = [
            'item_id' => $item_id,
            'item_name' => $row['item_name'],
            'image_location' => $row['image_location'],
            'item_type' => $row['item_type'],
            'pre_upgrade' => [
                'id' => $row['pre_upgrade_id'],
                'name' => $row['pre_upgrade_name']
            ],
            'next_upgrades' => [],
            'stats' => []
        ];
    }

    $data[$item_id]['stats'][] = [
        'stat_name' => $row['stat_name'],
        'formatted_value' => $row['formatted_value'],
        'stat_condition' => $row['stat_condition']
    ];
}

if (!empty($itemIds)) {
    $placeholders = implode(',', array_fill(0, count($itemIds), '?'));
    $typesNext = str_repeat('i', count($itemIds));

    $nextUpgradeQuery = "
        SELECT id, pre_upgrade_id, name 
        FROM items 
        WHERE pre_upgrade_id IN ($placeholders)
    ";

    $stmtNext = $conn->prepare($nextUpgradeQuery);
    $stmtNext->bind_param($typesNext, ...$itemIds);
    $stmtNext->execute();
    $nextResult = $stmtNext->get_result();

    while ($row = $nextResult->fetch_assoc()) {
        $preUpgradeId = $row['pre_upgrade_id'];
        $nextUpgradeId = $row['id'];
        $nextUpgradeName = $row['name'];
        if (isset($data[$preUpgradeId])) {
            $data[$preUpgradeId]['next_upgrades'][] = [
                'id' => $nextUpgradeId,
                'name' => $nextUpgradeName
            ];
        }
    }
    $stmtNext->close();
}

$drops = [];

if (!empty($itemIds)) {
    $dropQuery = "SELECT drop_id, drop_data FROM drop_table";
    $result = $conn->query($dropQuery);

    $itemToDropIds = [];

    while ($row = $result->fetch_assoc()) {
        $dropId = $row['drop_id'];
        $dropData = json_decode($row['drop_data'], true);

        if (is_array($dropData)) {
            foreach ($dropData as $drop) {
                if (isset($drop['item_id']) && in_array($drop['item_id'], $itemIds)) {
                    $itemId = $drop['item_id'];
                    $itemToDropIds[$itemId][] = [
                        'drop_id' => $dropId,
                        'rarity' => $drop['rarity'] ?? null
                    ];
                }
            }
        }
    }

    foreach ($itemToDropIds as $itemId => $dropEntries) {
        foreach ($dropEntries as $entry) {
            $dropId = $entry['drop_id'];
            $rarity = $entry['rarity'];

            $stmt = $conn->prepare("
                SELECT 
                    ed.enemy_id,
                    ed.difficulty,
                    ed.boss_level,
                    e.name AS enemy_name,
                    l.location_name
                FROM enemies_data ed
                LEFT JOIN enemies e ON ed.enemy_id = e.enemy_id
                LEFT JOIN locations l ON e.location_id = l.location_id
                WHERE ed.drop_id = ?
            ");
            $stmt->bind_param("i", $dropId);
            $stmt->execute();
            $res = $stmt->get_result();

            while ($row = $res->fetch_assoc()) {
                $drops[$itemId][] = [
                    'enemy_id' => $row['enemy_id'],
                    'enemy_name' => $row['enemy_name'],
                    'rarity' => $rarity,
                    'location_name' => $row['location_name'],
                    'difficulty' => $row['difficulty'],
                    'boss_level' => $row['boss_level']
                ];
            }

            $stmt->close();
        }
    }
}

foreach ($data as $itemId => &$item) {
    $item['drops'] = $drops[$itemId] ?? [];
}

echo json_encode(array_values($data), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

$conn->close();
?>