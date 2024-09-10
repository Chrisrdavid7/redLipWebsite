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

<script>
import imgAPI from '@/assets/images/imgAPI';
import Hidden from '../Hidden';

const sliderData = [
  {
    image: imgAPI.movie[1],
    link: 'https://shorehousecasting.castingcrane.com/age-gate',
    subtitle: 'Now Casting',
    title: 'Shore House',
    desc:
      'Chelsey Creative, the talent team behind Summer House, are on the hunt for the next TV sensation at the Jersey Shore!',
  },
  {
    image: imgAPI.movie[13],
    link: 'https://chicagofemalemvps.castingcrane.com/',
    subtitle: 'Now Casting',
    title: 'Chicago Females',
    desc:
      'The talent team behind Real Housewives of Dubai are looking for Top Socialites in Chicago for our Brand New Show! Sign up or recommend a friend',
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
      }, 5000); // Set autoplay speed (in ms)
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

<style lang="scss" scoped>
@import './promotion-style.scss';

.root {
  position: relative;
  margin-top: -130px;
  z-index: 12;
  max-width: 1000px;
  @include breakpoints-up(md) {
    margin-left: auto;
    margin-right: auto;
  }
  > div {
    @include breakpoints-down(md) {
      padding: 0 !important
    }
  }
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include breakpoints-up(sm) {
    top: -70%;
    opacity: 0.8;
  }
  figure {
    @include breakpoints-up(sm) {
      filter: blur(20px);
    }
    margin: 0;
    img {
      width: 100%
    }
  }
}

.desc {
  max-height: 130px;
  min-height: 100px;
  overflow: hidden;
  padding: spacing(1, 0);
  margin-bottom: $spacing2;
  h6 {
    font-weight: $font-medium;
  }
  @include breakpoints-down(xs) {
    display: none;
  }
}

.inner-bg {
  overflow: hidden;
  width: 100%;
  @include palette-background-paper;
  padding: $spacing6;
  .v-row {
    z-index: 2;
    position: relative;
  }
  @include breakpoints-down(xs) {
    padding: 0
  }
}

.slider-wrap {
  display: block;
  position: relative;
  overflow: hidden;
  z-index: 1;
  @include breakpoints-up(md) {
    height: $height;
    @include use-theme(box-shadow, 0 1.5px 12px 2px rgba(0, 0, 0, 0.06), (0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)));
    border-radius: 32px;
  }
  > div {
    overflow: hidden;
    z-index: 1;
    @include breakpoints-down(xs) {
      height: $height-mobile
    }
  }
}

a.prev {
  @include left(-20px);
  @include padding-right(12px);
  @include breakpoints-up(lg) {
    @include left(-40px);
  }
  @include arrow-nav;
}

a.next {
  @include right(-20px);
  @include padding-left(12px);
  @include breakpoints-up(lg) {
    @include right(-40px);
  }
  @include arrow-nav;
}
</style>
