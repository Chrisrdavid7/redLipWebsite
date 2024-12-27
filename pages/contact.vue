<template>
  <div class="contact-page">
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="hero-title">Contact Us</h1>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <p>
        Please note that Red Lip Productions does not accept unsolicited submissions of any kind. Any submissions that are sent will not be reviewed.
      </p>
      <h2>Email:</h2>
      <p class="email">info@redlipproductions.com</p>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { useHead } from "@vueuse/head"; // Ensure proper import

// SEO Metadata
useHead({
  title: 'Contact Us - Red Lip Productions',
  meta: [
    { name: 'description', content: 'Contact Red Lip Productions to discuss your casting and development needs. We are here to help you bring your ideas to life.' },
    { name: 'keywords', content: 'Red Lip Productions, contact, casting, NYC, development' },
    { property: 'og:title', content: 'Contact Us - Red Lip Productions' },
    { property: 'og:description', content: 'Connect with the Red Lip Productions team to explore opportunities in casting and television development.' },
    { property: 'og:image', content: '/images/ChelseyLogo.png' }

  ]
});
</script>

<style scoped>
/* General Page Styling */
.contact-page {
  font-family: "Avenir Next", sans-serif;
  color: white;
  position: relative;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url('/images/CastPhoto.jpg') center/cover no-repeat;
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
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #f39c12; /* Highlighted title color */
}

/* Content Section */
.content-section {
  margin-top: 20px;
  max-width: 600px;
  text-align: center;
  line-height: 1.8;
}

.content-section p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #ccc;
}

.content-section h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
}

.email {
  font-size: 1.3rem;
  font-weight: bold;
  color: #f39c12; /* Highlight email in orange */
}
</style>