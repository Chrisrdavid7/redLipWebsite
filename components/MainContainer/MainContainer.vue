<template>
  <div class="main-wrap">
    <main-header :invert="invert"/>
    <div class="container-wrap" :class="{ 'scroll-nav-content' : navScroll }">
      <slot />
    </div>
    <main-footer invert v-if="invert" />
    <footer-with-deco v-else />
  </div>
</template>

<style lang="scss" scoped>
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #1b1818; /* MAIN BACKGROUND COLOR */
  
  @include palette-text-primary;
  .v-theme--dark & {
    background-color: $dark-background-default;
  }
  
}

.container-wrap {
  margin-top: -40px;
  :deep(> section) {
    position: relative;
  }
}
</style>

<script setup>
import MainHeader from '@/components/Header';
import FooterWithDeco from '@/components/Footer/FooterWithDeco';
import MainFooter from '@/components/Footer';

const { invert, navScroll } = defineProps({
  invert: {
    type: Boolean,
    default: false,
  },
  navScroll: {
    type: Boolean,
    default: false,
  }
});

// Auto-refresh logic
onMounted(() => {
  window.addEventListener('pageshow', function(event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
      window.location.reload();
    }
  });
});
</script>