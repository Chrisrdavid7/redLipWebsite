<template>
  <div class="footer-center">
    <div class="logo">
      <img src="assets/images/ChelseyLogo.png" alt="Logo" />
    </div>
    <div class="menu">
      <nuxt-link to="/about">About Us</nuxt-link>
      <nuxt-link to="/shows">The Shows</nuxt-link>
      <nuxt-link to="/contact">Contact Us</nuxt-link>
    </div>
    <div class="socmed">
      <!-- <a href="https://www.facebook.com/home.php"><span class="ion-logo-facebook icon"></span></a>
      <a href="https://x.com/home"><span class="ion-logo-twitter icon"></span></a> -->
      <a href="https://www.instagram.com/chelseycreativeinc/"><span class="ion-logo-instagram icon"></span></a>
      <a href="https://www.linkedin.com/company/chelsey-creative/"><span class="ion-logo-linkedin icon"></span></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSwitchLocalePath } from 'vue-i18n-routing';
import { setRtl } from '@/composables/uiTheme';
import logo from '@/assets/images/movie-logo.svg';
import brand from '@/assets/text/brand';
import { navigateTo } from '#app';

export default {
 
};
</script>
