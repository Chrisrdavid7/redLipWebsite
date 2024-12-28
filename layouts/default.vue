<template>
    <div class="layout">
      <NavBar /> <!-- Global Header -->
      <NuxtPage /> <!-- Dynamically insert page content here -->
      <Footer /> <!-- Global Footer -->
    </div>
  </template>
  
  <script setup>
  import NavBar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Ensures footer is at the bottom */
  }
  
  .layout > :nth-child(2) {
    flex: 1; /* Makes the page content take up the remaining space */
  }
  </style>