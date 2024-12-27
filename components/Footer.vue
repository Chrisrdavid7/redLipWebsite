<template>
  <footer class="footer">
    <div class="logo-container">
      <img src="/images/1.png" alt="Chelsey Creative Logo" class="footer-logo" />
    </div>
    <nav class="footer-nav">
      <ul>
        <li><nuxt-link to="/about">About Us</nuxt-link></li>
        <li><nuxt-link to="/shows">The Shows</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  height: auto; /* Let the height adjust naturally */
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  text-align: center;
  padding: 40px 20px; /* Add spacing */
  font-family: 'Poppins', sans-serif; /* Font family */
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Optional border */
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.footer-logo {
  width: 250px; /* Adjust size for better scaling */
  height: auto;
  filter: drop-shadow(0 0 10px rgba(255, 0, 128, 0.5)); /* Neon effect */
  margin-bottom: 20px;
}

.footer-nav ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav ul li {
  font-size: 1rem;
  font-weight: 500;
}

.footer-nav ul li a {
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
}

.footer-nav ul li a:hover {
  background: #FB001B;
  color: #ffffff;
  box-shadow: 0px 10px 15px rgba(255, 192, 225, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer {
    padding: 20px 10px;
  }

  .footer-logo {
    width: 200px; /* Smaller logo for smaller screens */
  }

  .footer-nav ul {
    flex-direction: column;
    gap: 15px; /* Stack navigation links */
  }

  .footer-nav ul li a {
    padding: 8px 15px;
  }
}
</style>