<template>
  <div class="root">
    <div class="slider-wrap">
      <transition-group :name="transition" tag="div">
        <div
          v-for="number in [currentImg]"
          :key="number"
          class="slide slider-content"
        >
          <div class="inner item">
            <div class="inner-bg">
              <div class="background">
                <figure>
                  <img :src="content[Math.abs(currentImg) % content.length].image" alt="promotion">
                </figure>
              </div>
              <v-row>
                <v-col sm="7" cols="12" class="pa-0">
                  <div class="text">
                    <h4>
                      <span class="use-text-subtitle2">
                        {{ content[Math.abs(currentImg) % content.length].subtitle }}
                      </span>
                      {{ content[Math.abs(currentImg) % content.length].title }}
                    </h4>
                    <div class="property"> Confidential </div>

                    <article class="desc">
                      <h6 class="use-text-paragraph">
                        {{ content[Math.abs(currentImg) % content.length].desc }}
                      </h6>
                    </article>
                    <div class="btn-area">
                      <v-btn 
                        class="custom-button" 
                        :href="content[Math.abs(currentImg) % content.length].link"
                      >
                        Sign Up Here
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col sm="5" cols="12" class="pa-0">
                  <hidden point="xsDown">
                    <div class="image">
                      <figure>
                        <img :src="content[Math.abs(currentImg) % content.length].image" alt="promotion">
                      </figure>
                    </div>
                  </hidden>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <a href="javascript:void(0)" class="prev" @click="prev">
      <i class="ion-ios-arrow-round-back-outline arrow-icon" />
    </a>
    <a href="javascript:void(0)" class="next" @click="next">
      <i class="ion-ios-arrow-round-forward-outline arrow-icon" />
    </a>
  </div>
</template>


<style lang="scss" scoped>
@import './promotion-style.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
import Hidden from '../Hidden';
import link from '~/assets/text/link';

const sliderData = [
  {
    image: imgAPI.movie[1],
    link:'https://shorehousecasting.castingcrane.com/age-gate',
    subtitle: 'Now Casting',
    title: 'Shore House',
    desc:
      'Chelsey Creative, the talent team behind Summer House, are on the hunt for the next TV sensation at the Jersey Shore!',
  },
  {
    image: imgAPI.movie[13],
    link:'https://chicagofemalemvps.castingcrane.com/',
    subtitle: 'Now Casting',
    title: 'Chicago Females',
    desc:
      'Chelsey Creative, the talent team behind Summer House, are on the hunt for the next TV sensation at the Jersey Shore!',
  },
];

export default {
  components: {
    Hidden,
  },
  data() {
    return {
      content: sliderData,
      transition: '',
      autoplay: null,
      currentImg: 0,
    };
  },
  mounted() {
    this.playSlider();
  },
  beforeUnmount() {
    clearInterval(this.autoplay);
  },
  methods: {
    playSlider() {
      this.autoplay = setInterval(() => {
        this.currentImg += 1;
        this.transition = 'slide-right';
      }, 100000);
    },
    manualPlay() {
      clearInterval(this.autoplay);
      setTimeout(() => {
        this.playSlider();
      }, 1);
    },
    next() {
      this.manualPlay();
      this.currentImg += 1;
      this.transition = 'slide-right';
      console.log(this.content[Math.abs(this.currentImg) % this.content.length].image);
    },
    prev() {
      this.manualPlay();
      this.currentImg -= 1;
      this.transition = 'slide-left';
    },
    swipeLeft() {
      this.next();
    },
    swipeRight() {
      this.prev();
    },
  },
};
</script>
