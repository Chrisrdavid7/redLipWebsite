<template>
  <div class="root">
    <v-container>
      <title-main align="center" primary="All" secondary="Categories" />
      <div class="carousel-wrap">
        <v-btn class="nav prev" @click="slickPrev">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn class="nav next" @click="slickNext">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
        <splide
          ref="slider"
          :options="slickOptions"
        >
          <splide-slide
            v-for="(item, index) in dataCategories"
            :key="index"
          >
            <div class="item">
              <simple-thumb-card
                :title="item.title"
                :icon="item.icon"
              />
            </div>
          </splide-slide>
        </splide>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './all-categories-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Title from '../Title';
import SimpleThumbCard from '../Cards/SimpleThumb';

const dataCategories = [
  {
    icon: 'ion-ios-heart',
    title: 'Romantic',
  },
  {
    icon: 'ion-ios-planet',
    title: 'sci-fi',
  },
  {
    icon: 'ion-md-contacts',
    title: 'commedy',
  },
  {
    icon: 'ion-ios-star',
    title: 'super heroes',
  },
  {
    icon: 'ion-ios-flash',
    title: 'actions',
  },
  {
    icon: 'ion-ios-videocam',
    title: 'hollywood',
  },
  {
    icon: 'ion-ios-heart',
    title: 'Romantic',
  },
  {
    icon: 'ion-ios-planet',
    title: 'sci-fi',
  },
  {
    icon: 'ion-md-contacts',
    title: 'commedy',
  },
  {
    icon: 'ion-ios-star',
    title: 'super heroes',
  },
  {
    icon: 'ion-ios-flash',
    title: 'actions',
  },
  {
    icon: 'ion-ios-videocam',
    title: 'hollywood',
  },
];

export default {
  components: {
    'title-main': Title,
    SimpleThumbCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      dataCategories,
      slickOptions: {
        type: 'loop',
        pagination: false,
        speed: 500,
        perPage: 6,
        perMove: 3,
        arrows: false,
        autoplay: true,
        interval: 7000,
        direction: 'ltr',
        breakpoints: {
          1024: {
            perPage: 4,
          },
          600: {
            perPage: 2,
          },
        },
        reducedMotion: {
          autoplay: true,
          speed: 500,
          rewindSpeed: 1000,
        },
      },
    };
  },
  mounted() {
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 100);
  },
  methods: {
    slickNext() {
      this.$refs.slider.go('>');
    },
    slickPrev() {
      this.$refs.slider.go('<');
    },
  },
};
</script>
