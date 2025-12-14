<?php
/**
 * config.example.php
 * 
 * This is a sample configuration file for database connection.
 * Users should copy this to config.php and fill in their own DB info.
 * DO NOT include real passwords in the public repo.
 */

// Database host
$servername = "localhost";

// Database username
$username = "USER_NAME_HERE";

// Database password
$password = "PASSWORD_HERE";

// Database name
$dbname = "venenakodb";

// Charset for UTF-8
$charset = "utf8mb4";

// MySQL port (default 3306)
$port = 3306;


$youtubeApiKey = 'YOUTUBE_API_HERE'; // Replace with your API key
$youtubePlaylistId = 'YOUTUBE_PLAYLIST_ID_HERE';
$youtubeChannelId = 'YOUTUBE_CHANNEL_ID_HERE';

// Cache settings
$cacheDir = '../cache';
$playlistCacheFile = $cacheDir . '/playlist_videos.json';
$channelCacheFile = $cacheDir . '/channel_videos.json';
$cacheTime = 3600; // 1 hour