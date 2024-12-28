<template>
    <div class="news-page">
      <!-- Page Header -->
      <div class="news-header">
        <h1>Latest News</h1>
        <p>Stay updated with the latest announcements and stories.</p>
      </div>
  
      <!-- News Grid -->
      <div class="news-grid">
        <div v-for="(article, index) in news" :key="index" class="news-card">
          <div class="news-image-container">
            <img :src="article.image" :alt="article.title" class="news-image" />
          </div>
          <div class="news-content">
            <h3>{{ article.category }}</h3>
            <h2>{{ article.title }}</h2>
            <a :href="article.link" target="_blank" class="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useHead } from "@vueuse/head";
  import imgAPI from "@/assets/images/imgAPI";
  
  // SEO Metadata
  useHead({
    title: "Latest News - Red Lip Productions",
    meta: [
      { name: "description", content: "Discover the latest news, updates, and announcements from Red Lip Productions." },
      { property: "og:title", content: "Latest News - Red Lip Productions" },
      { property: "og:description", content: "Stay up-to-date with the latest news, stories, and casting updates." },
      { property: "og:image", content: "/images/ChelseyLogo.png" },
    ],
  });
  
  // News Data
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
    {
      image: imgAPI.press[4],
      category: "NEWS",
      title: "Bravo will add ‘The Real Housewives of Dubai’ to its roster, Andy Cohen announces",
      link: "https://www.latimes.com/entertainment-arts/tv/story/2021-11-01/real-housewives-of-dubai-andy-cohen-announces",
    },
   
  ]);
  </script>
  
  <style scoped>
  /* General Page Styles */
  .news-page {
    font-family: "Avenir Next", sans-serif;
    background-color: #121212;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
              url('/images/press2.png') center/cover no-repeat;
    color: #ffffff;
    padding: 40px 20px;
    text-align: center;
  }
  
  /* Page Header */
  .news-header h1 {
    font-size: 3rem;
    color: #f39c12;
    margin-top: 10vh;
    margin-bottom: 10px;
  }
  
  .news-header p {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 50px;
  }
  
  /* News Grid */
  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin: 0 auto;
    max-width: 1200px;
  }
  
  /* News Card */
  .news-card {
    background-color: #1e1e1e;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
  
  .news-image-container {
    width: 100%;
    height: 180px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .news-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* News Content */
  .news-content {
    padding: 20px;
    text-align: left;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .news-content h3 {
    font-size: 0.9rem;
    color: #f39c12;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  
  .news-content h2 {
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 10px;
  }
  
  .read-more {
    color: #007bff;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .read-more:hover {
    color: #0056b3;
  }
  
  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .news-header h1 {
      font-size: 2.5rem;
    }
  
    .news-header p {
      font-size: 1rem;
    }
  
    .news-card {
      flex-direction: column;
    }
  }
  </style>