<template>
  <div class="mobile-nav">
    <div
      :class="{ 'menu-open': open }"
      class="menu"
    >
      <v-list
        dense
        tag="nav"
      >
        <v-list-item
          v-for="(item, index) in navMenu"
          :key="index"
          :href="item"
          link
          :style="{ animationDuration: index * 0.15 + 's' }"
        >
          <v-list-item-title class="menu-list">
            {{ $t('movieLanding.header_'+item) }}
          </v-list-item-title>
        </v-list-item>
        <v-divider class="divider-sidebar" />
        <v-list-item
          
          :key="item"
          :href="link.movie[item]"
          :style="{ animationDuration: navMenu.length * 0.15 + 's' }"
          link
        >
          <v-list-item-title class="menu-list">
          
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './header-style';
</style>

<script>
import navMenu from './menu';
import link from '@/assets/text/link';

export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      link,
      navMenu,
    };
  },
};
</script>
