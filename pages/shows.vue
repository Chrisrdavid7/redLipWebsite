<template>
  <div class="shows-page">
    <Navbar />
    
    <!-- Hero Section -->
    <div class="hero">
      <h1 class="hero-title">
        <span class="primary-text">The</span>
        <span class="secondary-text">Shows</span>
      </h1>
      <p class="hero-subtitle">The award-winning team behind...</p>
    </div>

    <!-- Original Casting and Development -->
    <div class="shows-container">
      <h2 class="section-title">Original Casting and Development</h2>
      <div class="shows-grid">
        <MovieThumb 
          v-for="(show, index) in originalShows"
          :key="index"
          :title="show.title"
          :thumb="show.image"
          :url="show.link"
        />
      </div>
    </div>

    <!-- Series Castings Section -->
    <div class="shows-container">
      <h2 class="section-title">Series Castings</h2>
      <div class="shows-grid">
        <MovieThumb 
          v-for="(casting, index) in seriesCastings"
          :key="index"
         
          :thumb="casting.image"
          :url="casting.link"
        />
      </div>
    </div>

  
  </div>
</template>


<script setup>
import Navbar from '@/components/Navbar.vue';
import MovieThumb from '@/components/MovieThumb.vue';
import imgAPI from '@/assets/images/imgAPI';
import { useHead } from '@vueuse/head'; // Ensure this is imported

// Set page SEO metadata
useHead({
  title: 'Shows - Red Lip Productions',
  meta: [
    { name: 'description', content: 'The award winning team behind the Original Casting and Development of several unscripeted Reality Shows and Series Castings of many.' },
    { property: 'og:title', content: 'Shows - Red Lip Productions' },
    { property: 'og:description', content: 'Discover upcoming shows and events.' },
    { property: 'og:image', content: '/images/ChelseyLogo.png' }
  
  ]
});

// Original Casting and Development Shows
const originalShows = [
  { image: imgAPI.shows[0], link: 'https://www.bravotv.com/the-real-housewives-of-potomac' },
  { image: imgAPI.shows[1], link: 'https://www.bravotv.com/the-real-housewives-of-dubai' },
  { image: imgAPI.shows[2], link: 'https://www.bravotv.com/winter-house' },
  { image: imgAPI.shows[3], link: 'https://www.bravotv.com/family-karma' },
  { image: imgAPI.shows[4], link: 'https://www.bravotv.com/summer-house-marthas-vineyard' },
  { image: imgAPI.shows[5], link: 'https://www.themoviedb.org/tv/64945-lucky-bastards' },
  { image: imgAPI.shows[6], link: 'https://www.imdb.com/title/tt4828106/' },
  { image: imgAPI.shows[7], link: 'https://www.bravotv.com/kandi-and-the-gang' },
  { image: imgAPI.shows[8], link: 'https://www.bravotv.com/princesses-long-island' },
];

// Series Castings
const seriesCastings = [
  { image: imgAPI.shows[9], link: 'https://www.bravotv.com/the-real-housewives-of-new-jersey' },
  { image: imgAPI.shows[10], link: 'https://www.bravotv.com/summer-house' },
  { image: imgAPI.shows[11], link: 'https://www.bravotv.com/the-real-housewives-of-new-york-city' },
  { image: imgAPI.shows[12], link: 'https://www.bravotv.com/the-real-housewives-of-atlanta' },
  { image: imgAPI.shows[13], link: 'https://www.bravotv.com/shahs-of-sunset' },
  { image: imgAPI.shows[14], link: 'https://www.bravotv.com/the-millionaire-matchmaker' },
  { image: imgAPI.shows[15], link: 'https://www.vh1.com/shows/basketball-wives' },
  { image: imgAPI.shows[16], link: 'https://www.paramountplus.com/shows/ink-master/' },
  { image: imgAPI.shows[17], link: 'https://www.history.com/shows/swamp-people' },
  { image: imgAPI.shows[18], link: 'https://www.imdb.com/title/tt1125194/' },
  { image: imgAPI.shows[19], link: 'https://www.imdb.com/title/tt1839328/' },
  { image: imgAPI.shows[20], link: 'https://en.wikipedia.org/wiki/American_Gladiators_(2008_TV_series)_season_1' },
];

</script>

<style scoped>
/* General Page Styles */
.shows-page {
  font-family: 'Avenir Next', sans-serif;
  margin-top: -100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  text-align: center;
  z-index: 2; 
}

.shows-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/nightSky.jpg'); /* Your background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.3; /* Adjust the opacity here */
  z-index: -1; /* Ensure the background is behind all other content */
  filter: blur(8px); /* Optional: Adds a blur effect */
}

/* Hero Section */
.hero {
 margin-top: 25vh;
  color: white;
  text-align: center;
  padding: 100px 20px;
  position: relative;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: -1;
}

.hero-title {
  font-size: 5rem;
  margin: 0;
}

.primary-text {
  color: #f5a623; /* Orange */
}

.secondary-text {
  color: #a277ff; /* Purple */
  padding-left: 15px;
}

.hero-subtitle {
  letter-spacing: 2px;
  font-size: 1.5rem;
  color: #cccccc;
  margin-top: 15px;
}

/* Shows Grid */
.shows-container {
  
  padding: 10px 20px;
}

.section-title {
  font-size: 2.5rem;
  color: #f39c12;
  margin-bottom: 40px;
}

.shows-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

/* MovieThumb component styling (if needed) */
.movie-thumb {
  width: 35vh;
  text-align: center;
  background: #222;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-thumb img {
  width: 100%;
  height: auto;
  border-bottom: 3px solid #444;
}

.movie-thumb:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.movie-thumb a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 10px;
  display: block;
}

.movie-thumb a:hover {
  color: #f39c12;
}
</style>