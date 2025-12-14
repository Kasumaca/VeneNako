<?php

require_once __DIR__ . './config/config.php';
require_once __DIR__ . './get_data/youtube_fetch.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'head.php'; ?>
    <title>VeneNako - Toram Online Tools & Database</title>
    <meta name="description"
        content="Explore Toram Online items, monsters, drop lists, and crafting tools with VeneNako - your all-in-one Toram Online helper and database." />
</head>

<body class="pt-16">
    <?php include 'navbar.php'; ?>

    <!-- Banner Section -->
    <section class="relative w-screen h-[18rem] sm:h-[20rem] bg-cover mt-10 banner-bg-1"
        style="background-position: top 50% center;">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-100 z-0"></div>
        <div
            class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pb-3 md:pb-0 md:pt-4 z-10">
            <h1 id="banner-title"
                class="text-3xl sm:text-4xl md:text-5xl font-bold font-russoone italic tracking-wider text-shadow-lg/30 w-full">
                Toram Online Helper - VeneNako
            </h1>
            <p id="banner-description" class="text-sm sm:text-lg text-slate-200 drop-shadow-sm">
                Your all-in-one Toram Online tools and database for a better adventure!
            </p>
        </div>
    </section>

    <div class="page-container flex flex-col min-h-screen w-4/5 mx-auto pt-4">
        <?php include 'info_cards.php'; ?>

        <!-- Playlist Videos -->
        <div class="container mx-auto my-10">
            <h2 class="text-3xl font-bold text-center text-blue-400 mb-6">📺 Latest Stream</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="video-cards">
                <?php foreach ($playlistVideos as $video): 
                    $videoId = $video['snippet']['resourceId']['videoId'];
                    $title = htmlspecialchars($video['snippet']['title']);
                    $thumbnailUrl = $video['snippet']['thumbnails']['high']['url'];
                    $publishDate = date("F j, Y", strtotime($video['snippet']['publishedAt']));
                    $videoUrl = "https://www.youtube.com/watch?v=$videoId";
                ?>
                <div class='relative rounded-xl overflow-hidden bg-gradient-to-b from-cyan-950 to-cyan-900 shadow-lg group'>
                    <a href="<?= $videoUrl ?>" target="_blank">
                        <img loading='lazy' src="<?= $thumbnailUrl ?>" alt="<?= $title ?>"
                            class='w-full h-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'>
                        <div class='absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4'>
                            <h3 class='text-white font-bold text-lg'><?= $title ?></h3>
                            <p class='text-gray-300 text-sm'><?= $publishDate ?></p>
                        </div>
                    </a>
                </div>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Channel Videos -->
        <div class="container mx-auto my-10">
            <h2 class="text-3xl font-bold text-center text-green-400 mb-6">Featured</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="channel-cards">
                <?php foreach ($channelVideos as $video): 
                    $videoId = $video['id']['videoId'];
                    $title = htmlspecialchars($video['snippet']['title']);
                    $thumbnailUrl = $video['snippet']['thumbnails']['high']['url'];
                    $publishDate = date("F j, Y", strtotime($video['snippet']['publishedAt']));
                    $videoUrl = "https://www.youtube.com/watch?v=$videoId";
                ?>
                <div class='relative rounded-xl overflow-hidden bg-gradient-to-b from-cyan-950 to-cyan-900 shadow-lg group'>
                    <a href="<?= $videoUrl ?>" target="_blank">
                        <img loading='lazy' src="<?= $thumbnailUrl ?>" alt="<?= $title ?>"
                            class='w-full h-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'>
                        <div class='absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4'>
                            <h3 class='text-white font-bold text-lg'><?= $title ?></h3>
                            <p class='text-gray-300 text-sm'><?= $publishDate ?></p>
                        </div>
                    </a>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <?php include 'footer.php'; ?>
    <?php include 'support_box.php'; ?>
</body>

</html>
