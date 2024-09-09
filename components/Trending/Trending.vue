<template>
  <div class="root">
    <hidden point="xsDown">
      <div class="grid-25">
        <img :src="imgAPI.movie[6]" alt="trending">
        <v-btn variant="text" class="overlay">
          <h5>
            {{ $t('movieLanding.trending_rent') }}
          </h5>
        </v-btn>
      </div>
      <div class="grid-50">
        <img :src="imgAPI.movie[7]" alt="trending">
        <v-btn variant="text" class="overlay">
          <h3>
            <i class="ion-coffee" /> FREE
            <span>Movies</span>
          </h3>
        </v-btn>
      </div>
      <div class="grid-25">
        <img :src="imgAPI.movie[8]" alt="trending">
        <v-btn variant="text" class="overlay">
          <h5>
            {{ $t('movieLanding.trending_episodes') }}
          </h5>
        </v-btn>
      </div>
    </hidden>
    <hidden point="smUp">
      <splide
        ref="slick"
        :options="slickOptions"
      >
        <splide-slide>
          <div class="grid-25">
            <img :src="imgAPI.movie[6]" alt="trending">
            <v-btn variant="text" class="overlay">
              <h5>
                {{ $t('movieLanding.trending_rent') }}
              </h5>
            </v-btn>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="grid-50">
            <img :src="imgAPI.movie[7]" alt="trending">
            <v-btn variant="text" class="overlay">
              <h3>
                <i class="ion-coffee" /> FREE
                <span>Movies</span>
              </h3>
            </v-btn>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="grid-25">
            <img :src="imgAPI.movie[8]" alt="trending">
            <v-btn variant="text" class="overlay">
              <h5>
                {{ $t('movieLanding.trending_episodes') }}
              </h5>
            </v-btn>
          </div>
        </splide-slide>
      </splide>
    </hidden>
  </div>
</template>

<style lang="scss" scoped>
@import './trending-stye.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import Hidden from '../Hidden';

export default {
  components: {
    Hidden,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      imgAPI,
      slickOptions: {
        pagination: false,
        speed: 500,
        type: 'loop',
        perPage: 1,
        direction: 'ltr',
        arrows: false,
        perMove: 1,
        autoplay: true,
        interval: 7000,
      },
    };
  },
};
</script>
