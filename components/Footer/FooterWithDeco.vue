<template>
  <div class="parent-container">
    <div class="svg-container">
      <div style="position: relative; left: 70px;">
  <svg width="168" height="920" viewBox="0 0 168 920" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M61.5001 3.49997C382 478.5 -279.5 237.5 163.5 916.786" stroke="url(#paint0_linear_108_600)" stroke-width="2"/>
    <defs>
      <linearGradient id="paint0_linear_108_600" x1="73.7761" y1="3.32116" x2="87.0974" y2="917.899" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FB011C"/>
        <stop offset="1" stop-color="#FDA4AE"/>
      </linearGradient>
    </defs>
  </svg>
</div>

</div>

  <div class="footer-deco">
   
   
    <footer-main />
  </div>
</div>
</template>

<style lang="scss" scoped>
@import './footer-style.scss';
</style>

<script>
import Footer from './Footer';

export default {
  components: {
    'footer-main': Footer,
  },
};
</script>
