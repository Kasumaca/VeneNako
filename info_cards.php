<?php
$cards = [
    [
        'title' => 'VeneNako',
        'icon' => 'icons/avatar_icon.png',
        'sections' => [
            [
                'label' => 'Version 1.0.0',
                'content' => ['Release']
            ],
            [
                'label' => 'Upcoming Update',
                'content' => [
                    'Statting Simulator',
                    'Statting Browser',
                    'Stat Calculator Revamp'
                ]
            ]
        ]
    ],
    [
        'title' => 'Upcoming Toram Updates',
        'icon' => 'Images/update_icon.png',
        'sections' => [
            [
                'label' => 'August',
                'content' => [
                    'No Info'
                ]
            ],
            [
                'label' => 'September',
                'content' => [
                    'No Info'
                ]
            ]
        ]
    ],
    [
        'title' => 'Toram Online',
        'icon' => 'Images/game_icon.jpg',
        'sections' => [
            [
                'label' => 'Version 2.1.3',
                'content' => ['Summer Event-limited quest added.']
            ]
        ]
    ],
    [
        'title' => 'Code',
        'icon' => 'icons/gift_icon.png',
        'sections' => [
            [
                'label' => 'No Active Code',
                'content' => []
            ]
        ]
    ]
];
?>


<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center px-6">
    <?php foreach ($cards as $card): ?>
        <div
            class="rounded-2xl border border-white/20 bg-gradient-to-b from-cyan-950 to-cyan-900 shadow-sm p-4 w-full max-w-sm">
            <div class="flex items-center gap-2 border-b border-white/10 pb-2 mb-3">
                <img loading="lazy" src="<?php echo htmlspecialchars($card['icon']); ?>"
                    alt="<?php echo htmlspecialchars($card['title']); ?> Icon"
                    class="w-6 h-6 bg-white/20 rounded-full object-cover">
                <h2 class="text-lg font-semibold text-white tracking-tight"><?php echo htmlspecialchars($card['title']); ?>
                </h2>
            </div>
            <div class="text-sm text-slate-300 space-y-4">
                <?php foreach ($card['sections'] as $section): ?>
                    <div>
                        <div class="text-amber-400 font-semibold"><?php echo htmlspecialchars($section['label']); ?></div>
                        <ul class="list-disc pl-5 text-sm">
                            <?php foreach ($section['content'] as $item): ?>
                                <li><?php echo htmlspecialchars($item); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    <?php endforeach; ?>
</div>