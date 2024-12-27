<template>
  <div>
    <!-- Video Section -->
    <div class="video-container">
      <div class="video">
        <iframe
          width="100%"
          height="100%"
          :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0`"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <div class="video-caption">
          <h1>The Real Housewives of Potomac</h1>
          <p>Bravo TV & Streaming on Peacock</p>
        </div>
      </div>
    </div>

    <!-- Rotating Display Section -->
    <div class="rotating-display">
      <div class="rotating-item">
        <div class="slide-content">
          <h3>Now Casting</h3>
          <h1>{{ currentSlide.title }}</h1>
          <p>{{ currentSlide.desc }}</p>
          <a :href="currentSlide.link" class="cta-button">Sign Up Here</a>
        </div>
        <div class="slide-image">
          <img :src="currentSlide.image" alt="Current Slide" />
        </div>
      </div>
      <div class="navigation left" @click="prevSlide">
        <span>&larr;</span>
      </div>
      <div class="navigation right" @click="nextSlide">
        <span>&rarr;</span>
      </div>
    </div>

    <!-- Shows Section -->
    <div class="shows-section">
      <div class="row">
        <div class="title-container">
          <h1 class="primary-text">The</h1>
          <h1 class="secondary-text">Shows</h1>
          <p class="subtitle">The casting team behind...</p>
        </div>
        <div class="shows-grid">
          <div v-for="(show, index) in shows" :key="index" class="show-card">
            <a :href="show.url" target="_blank" rel="noopener noreferrer">
              <img :src="show.image" :alt="`Image of ${show.title}`" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- News Section -->
    <div class="news-section">
      <div class="news-title">
        <h2>News</h2>
      </div>
      <div class="news-grid">
        <div v-for="(article, index) in news" :key="index" class="news-card">
          <img :src="article.image" :alt="article.title" class="news-image" />
          <div class="news-content">
            <h3>{{ article.category }}</h3>
            <p>{{ article.title }}</p>
            <a :href="article.link" target="_blank" class="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import imgAPI from "@/assets/images/imgAPI";
import { useHead } from "@vueuse/head"; // Ensure @vueuse/head is installed

// Add SEO metadata
useHead({
  title: 'Home - Red Lip Productions',
  meta: [
    { name: 'description', content: 'Red Lip Productions creates a broad range of award winning scripted and unscripted programming for television and digital platforms.' },
    { property: 'og:title', content: 'Home - Red Lip Productions' },
    { property: 'og:description', content: 'Red Lip Productions creates a broad range of award winning scripted and unscripted programming for television and digital platforms.' },
    { property: 'og:image', content: '/images/ChelseyLogo.png' }
 
  ]
});

// Data setup
const videoId = ref("aGN09IlVRxs");

const slides = ref([
  {
    image: imgAPI.flyer[0],
    title: "Nashville Socialites",
    desc: "Red Lip Productions, the talent team behind some of your favorite hit shows, is on the hunt for the city's top stars for a brand new series on a major cable network!",
    link: "https://femalesocialitesdocuseries.castingcrane.com/",
  },
  {
    image: imgAPI.flyer[1],
    title: "Charlotte Socialites",
    desc: "Red Lip Productions is looking for stars in Charlotte for a new hit show on a major cable network!",
    link: "https://femalesocialitesdocuseries.castingcrane.com/",
  },
  {
    image: imgAPI.flyer[2],
    title: "Detroit Finest",
    desc: "Casting for Detroit's finest stars for an exciting new show on a major network!",
    link: "https://femalesocialitesdocuseries.castingcrane.com/",
  },
]);

const shows = ref([
  {
    image: imgAPI.mainPageShows[0],
    url: "https://www.bravotv.com/winter-house",
  },
  {
    image: imgAPI.mainPageShows[1],
    url: "https://www.bravotv.com/the-real-housewives-of-new-jersey",
  },
  {
    image: imgAPI.mainPageShows[2],
    url: "https://www.bravotv.com/family-karma",
  },
]);

const news = ref([
  
    {
      image: imgAPI.press[0],
      category: "NEWS",
      title: "‘The Real Housewives of Dubai’ Is Put on ‘Pause’ After 2 Seasons...",
      link: "https://www.usmagazine.com/entertainment/news/the-real-housewives-of-dubais-future-status-revealed/",
    },
    {
      image: imgAPI.press[1],
      category: "NEWS",
      title: "Bravo Unveils New Shows & Renewals Including Chrissy...",
      link: "https://www.bravotv.com/the-daily-dish/bravo-new-shows-making-it-in-manhattan-on-safari",
    },
    {
      image: imgAPI.press[2],
      category: "NEWS",
      title: "Melissa Gorga Says She Would Be OK Leaving RHONJ If Bravo Goes a Certain Way",
      link: "https://www.hollywoodreporter.com/tv/tv-news/rhonj-melissa-gorga-teresa-giudice-season-15-1235983404/",
    },
    {
      image: imgAPI.press[3],
      category: "NEWS",
      title: "Chelsey Stephens launches development shingle, signs first-look deal with ITV America",
      link: "https://realscreen.com/2023/03/06/exclusive-chelsey-stephens-launches-development-shingle-signs-first-look-deal-with-itv-america/",
    },
]);

const currentIndex = ref(0);
const autoplay = ref(null);

const currentSlide = computed(() => slides.value[currentIndex.value]);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const startAutoplay = () => {
  autoplay.value = setInterval(nextSlide, 10000);
};

const stopAutoplay = () => {
  clearInterval(autoplay.value);
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>



<style scoped>


/* Video Section */
.video-container {
  width: 100vw;
  height: calc(100vw * 9 / 16);
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 0 0 20% 20%;
  margin-top: -1vh;
  color: white;
}

.video {
  width: 100%;
  height: 100%;
}

iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-caption {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  color: white;
  text-align: left;
  z-index: 2;
}

.video-caption h1 {
  font-size: 2.9vw;
  width: 75%;
  margin: 0;
}

.video-caption p {
  font-size: 1vw;
  margin-top: 10px;
}

/* Rotating Display Section */
.rotating-display {
  position: relative;
  max-width: 60%;
 height: 50vh; /* 50% of the viewport height */
  margin: -10vh auto;
  color: #ffffff; /* Dark Gray */
  background-color: #1f1f1f;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 20px;
}

.rotating-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.slide-content {
  flex: 2;
  padding: 20px;
}

.slide-content h1 {
  font-size: 2.6rem;
  margin-bottom: 10px;
  color: #dad1d1;
  font-weight: bold;
}

.slide-content h3 {
  font-size: 2rem;
  color: #f39c12;
  margin-bottom: 1px;
  font-weight: medium;
}

.slide-content p {
  font-size: 1.5rem;
  color: #8c8787;
  margin-bottom: 15px;
  line-height: 1.6;
}

.slide-content .cta-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #ff0000;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.slide-content .cta-button:hover {
  background-color: #19e653;
}

.slide-image {
  flex: 1;
  text-align: center;
}

.slide-image img {
  width: 90%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
/* Responsive Adjustments for Mobile */
@media (max-width: 768px) {
  .rotating-display {
    max-width: 90%; /* Reduce width */
    height: auto; /* Allow height to adjust dynamically */
    flex-direction: column; /* Stack content vertically */
    padding: 15px; /* Reduce padding */
  }

  .rotating-item {
    flex-direction: column; /* Stack content vertically */
  }

  .slide-content {
    flex: none; /* Reset flex growth */
    padding: 10px; /* Reduce padding */
    text-align: center; /* Center text for mobile */
  }

  .slide-content h1 {
    font-size: 2rem; /* Reduce headline size */
  }

  .slide-content h3 {
    font-size: 1.8rem; /* Reduce subheading size */
  }

  .slide-content p {
    font-size: 1.2rem; /* Reduce paragraph size */
  }

  .cta-button {
    padding: 8px 15px; /* Reduce button size */
    font-size: 0.9rem; /* Reduce font size for button */
  }

  .slide-image {
    width: 100%; /* Full width image */
    margin-top: 10px; /* Add spacing between content and image */
  }

  .slide-image img {
    width: 70%; /* Smaller image for mobile */
  }

  .navigation {
    width: 30px; /* Smaller navigation arrows */
    height: 30px;
  }
}

/* Navigation Arrows */
.navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
}

.navigation.left {
  left: 10px;
}

.navigation.right {
  right: 10px;
}

/* Shows Section */
.shows-section {
  background-color: #1a1a1a;
  padding: 50px 20px;
  border-radius: 20px;
  margin: 150px auto;
}

.row {
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: center;
  gap: 20px;

  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.title-container {
  flex: 1; /* Take up 1 part of the row */
  text-align: left;
}

.primary-text {
  font-size: 8rem;
  color: #a277ff; /* Purple */
  margin: 0;
}

.secondary-text {
  font-size: 7rem;
  color: #f39c12; /* Orange */
  margin: 0;
}

.subtitle {
  font-size: 2.5rem;
  color: #777676;
  margin-top: 10px;
}

.shows-grid {
  flex: 3; /* Take up 3 parts of the row */
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Ensure the cards wrap */
}

.show-card {
  width: 40vh;
  background: #222;
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.show-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
}

.show-card img {
  width: 100%;
  height: auto;
  border-bottom: 3px solid #444;
}
/* Responsive Adjustments for Mobile */
@media (max-width: 768px) {
  .shows-section {
    padding: 30px 15px; /* Reduce padding */
  }

  .primary-text {
    font-size: 5rem; /* Reduce font size */
  }

  .secondary-text {
    font-size: 4rem; /* Reduce font size */
  }

  .subtitle {
    font-size: 1.5rem; /* Reduce subtitle size */
  }

  .show-card {
    width: 100%; /* Full width for mobile */
    margin-bottom: 15px; /* Add spacing between cards */
  }

  .shows-grid {
    justify-content: center; /* Center items on mobile */
  }
}

/* NEWS Section */
.news-section {
  background-color: #1a1a1a;
  padding: 50px 20px;
  border-radius: 20px;
  margin: 20px auto;
  text-align: center;
}

.news-title h2 {
  font-size: 2.5rem;
  color: #f39c12; /* Orange */
  margin-bottom: 30px;
  text-transform: uppercase;
}

.news-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.news-card {
  background: #222;
  border-radius: 15px;
  overflow: hidden;
  text-align: left;
  width: 30vh;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
}

.news-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 3px solid #444;
}

.news-content {
  padding: 20px;
}

.news-content h3 {
  color: #f39c12; /* Orange */
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
}

.news-content p {
  font-size: 1rem;
  color: #fff;
  margin: 10px 0;
}

.read-more {
  color: #007bff; /* Blue */
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
}

.read-more:hover {
  text-decoration: underline;
}


/* Responsive Adjustments for Mobile */
@media (max-width: 768px) {
  .news-section {
    padding: 30px 15px; /* Reduce padding */
  }

  .news-title h2 {
    font-size: 2rem; /* Smaller title */
  }

  .news-grid {
    flex-direction: column; /* Stack news cards vertically */
    gap: 15px; /* Reduce spacing */
  }

  .news-card {
    width: 90%; /* Full width for smaller screens */
    margin: 0 auto; /* Center the cards */
  }

  .news-image {
    height: 120px; /* Adjust image height for mobile */
  }

  .news-content h3 {
    font-size: 0.9rem; /* Reduce heading size */
  }

  .news-content p {
    font-size: 0.9rem; /* Reduce text size */
  }

  .read-more {
    font-size: 0.9rem; /* Reduce read more link size */
  }
}

</style>