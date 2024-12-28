<template>
  <header class="navbar">
    <nuxt-link to="/" class="logo">
      <img src="/images/redLipFooter.png" alt="Red Lip Logo" />
    
    </nuxt-link>
    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
      <!-- Hamburger Icon -->
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav :class="{ open: isMenuOpen }">
      <ul>
        <li><nuxt-link to="/shows" @click="isMenuOpen = false">The Shows</nuxt-link></li>
        <li><nuxt-link to="/about" @click="isMenuOpen = false">About Us</nuxt-link></li>
        <li><nuxt-link to="/news" @click="isMenuOpen = false">Latest News</nuxt-link></li>
        <li><nuxt-link to="/contact" @click="isMenuOpen = false">Contact Us</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isMenuOpen = ref(false); // Track mobile menu toggle state
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  height: 10vh;
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(247, 244, 244, 0.0001); /* Keeps the original background */
  z-index: 100;
  backdrop-filter: blur(10px);
}
/* Adjust Navbar Height for Mobile */
@media (max-width: 768px) {
  .navbar {
    height: 5vh; /* Smaller height for mobile */
  }

  .logo img {
    width: 18vh; /* Adjust logo size for smaller navbar */
  }

  nav ul li a {
    font-size: 16px; /* Slightly smaller font size */
    padding: 8px 15px; /* Adjust padding */
  }
}

.logo img {
  width: 18vh;
  height: auto;
  margin-right: auto; /* Pushes the logo to the left */
}

/* Navigation Menu */
nav {
  display: flex;
  justify-content: center; /* Center menu items horizontally */
  align-items: center; /* Center menu items vertically */
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center; /* Center menu items horizontally */
  align-items: center; /* Center menu items vertically */
  gap: 25px;
  margin: 0;
  padding: 0;
}

nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

nav ul li a:hover {
  background:#FB001B;
  box-shadow: 0px 10px 30px rgba(251, 0, 27, 1);
}

/* Hamburger Menu Button */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 2px;
}

/* Mobile Menu */
nav {
  
  transition: transform 0.3s ease-in-out;
}

nav.open {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  nav {
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 5vh;
    right: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-200%);
    padding: 20px 0;
  }

  nav.open {
    transform: translateY(0);
  }

  nav ul {
    flex-direction: column;
    gap: 20px;
  }

  nav ul li a {
    font-size: 16px;
    padding: 10px;
  }
}
</style>