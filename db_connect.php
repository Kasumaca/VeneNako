<?php
// db_connect.php
// Establish a secure connection using the configuration file

require_once __DIR__ . './config/config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Set charset
$conn->set_charset($charset);
