<template>
  <v-navigation-drawer
    v-if="isMobile"
    v-model="openDrawer"
    fixed
    temporary
    style="background: none"
  >
    <mobile-menu :open="openDrawer" />
  </v-navigation-drawer>
  <v-app-bar
    id="header"
    v-scroll="handleScroll"
    :class="{
      fixed: fixed,
      'open-drawer': openDrawer,
      invert: invert
    }"
    class="header"
    app
  >
    <v-container :class="{ 'fixed-width': isDesktop }">
      <div class="header-content">
        <nav
          :class="{ invert: invert }"
          class="nav-logo nav-menu"
          >
          <v-btn
            v-if="isMobile"
            :class="{ 'is-active': openDrawer }"
            class="hamburger hamburger--spin mobile-menu"
            text
            icon
            @click.stop="handleToggleOpen"
          >
            <span class="hamburger-box">
              <span class="bar hamburger-inner" />
            </span>
          </v-btn>
          <div class="logo">
            <nuxt-link
              :to="localePath(link.movie.home)"
              v-if="invert"
            >
              <img
                :src="logo"
                alt="logo"
              />
            </nuxt-link>
            <span v-if="!invert && loaded">
              <nuxt-link
                :to="'/'"
                class="anchor-link scrollactive-item"
              >
                <img
                  :src="logo"
                  alt="logo"
                />
              </nuxt-link>
            </span>
          </div>
          <div v-if="isDesktop">
            <ul class="scrollactive-nav">
              <li
                v-for="(item, index) in menuList"
                :key="index"
              >
              <v-btn text class="menu-link">
                <nuxt-link
                
                  :to="item.url"
                  :class="{ active: activeMenu === item.name }"
                  class="menu-link"
                  v-text="$t('movieLanding.header_' + item.name)"
                />
              </v-btn>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          :class="{ invert: invert }"
          class="nav-menu nav-auth"
        >
          <hidden point="xsDown">
          </hidden>
        </nav>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
.menu-link {
  text-decoration: none; /* Removes underline */
}
</style>

<script>
import { inject } from 'vue';
import logo from '@/assets/images/ChelseyLogo.png';
import link from '@/assets/text/link';
import brand from '@/assets/text/brand';
import Hidden from '../Hidden';
import navMenu from './menu';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import { useLocalePath } from '#imports';

let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

export default {
  
  components: {
    'setting-menu': Settings,
    Hidden,
    MobileMenu,
  },
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const localePath = useLocalePath();
    return {
      localePath,
    };
  },
  data() {
    return {
      logo,
      link,
      loaded: false,
      brand,
      sections: {},
      activeMenu: '',
      fixed: false,
      openDrawer: null,
      menuList: [
      
        createData('shows', '/shows'),
        createData('about', '/about'),
        createData('contact', '/contact'),
      ],
    };
  },
  computed: {
    isMobile() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    this.loaded = true;
    const id = window.location.hash;
    const content = id.replace('#', '');
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }

    const section = document.querySelectorAll('.scroll-nav-content > *');
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 100;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });

      if (scrollPosition > 70) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    handleToggleOpen() {
      this.openDrawer = !this.openDrawer;
    },
  },
};
</script>
