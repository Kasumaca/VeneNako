<?php
/**
 * youtube_fetch.php
 * Fetch YouTube playlist and channel videos with caching.
 */

require_once './config/config.php';

/**
 * Fetch and cache YouTube API data
 */
function fetchYoutubeData($url, $cacheFile, $cacheTime) {
    if (file_exists($cacheFile) && (time() - filemtime($cacheFile)) < $cacheTime) {
        return json_decode(file_get_contents($cacheFile), true);
    }

    $response = file_get_contents($url);
    if ($response === FALSE) {
        return null;
    }

    file_put_contents($cacheFile, $response);
    return json_decode($response, true);
}

// Fetch playlist videos
$playlistUrl = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=$youtubePlaylistId&key=$youtubeApiKey";
$playlistData = fetchYoutubeData($playlistUrl, $playlistCacheFile, $cacheTime);
$playlistVideos = $playlistData['items'] ?? [];

// Fetch channel videos
$channelUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=$youtubeChannelId&order=date&maxResults=3&key=$youtubeApiKey";
$channelData = fetchYoutubeData($channelUrl, $channelCacheFile, $cacheTime);
$channelVideos = $channelData['items'] ?? [];
