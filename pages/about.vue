<template>
  <div class="about-page">
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="hero-title">About Us</h1>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <p>
        Red Lip Productions is a dynamic, full-service content development, 
        casting, and television production company based in New York City, 
        where creativity is at the heart of everything we do. 
      </p>
      <p>
        With over 15 years of award-winning experience, 
        our dedicated team specializes in crafting hit series 
        and transforming real people into household names.
      </p>
      <p>
        We collaborate with leading networks and streaming platforms to bring new shows 
        to life and cast for existing series, ensuring every project achieves its fullest creative potential.

      </p>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { useHead } from '@vueuse/head'; // Ensure correct import for composables

// Set page SEO metadata
useHead({
  title: 'About Us - Red Lip Productions',
  meta: [
    { name: 'description', content: 'Learn about Red Lip Productions’s mission, values, and our role in the casting and content development industry.' },
    { property: 'og:title', content: 'About Us - Red Lip Productions' },
    { property: 'og:description', content: 'Discover our mission, values, and passion for casting and content development.' },
    { property: 'og:image', content: '/images/ChelseyLogo.png' }

  ]
});
</script>

<style scoped>
/* General Page Styling */
.about-page {
  font-family: "Avenir Next", sans-serif;
  color: white;
  position: relative;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url('/images/backgroundTelevision.jpg') center/cover no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Hero Section */
.hero-section {
  margin-top: -10vh;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #f39c12; /* Highlighted orange text */
}

/* Content Section */
.content-section {
  font-size: 1.2rem;
  margin-top: 20px;
  max-width: 90vh;
  text-align: center;
  line-height: 1.8;
}

.content-section p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #ccc;
}
</style>