<template>
  <div class="page-wrap">
    <hidden point="mdUp">
      <div class="logo logo-header">
        <nuxt-link :to="localePath(routerLink.movie.home)">
          <img src="/images/movie-logo.svg" alt="logo">
          <p class="use-text-subtitle2">
            {{ brand.movie.projectName }}
          </p>
        </nuxt-link>
      </div>
    </hidden>
    <v-container class="max-lg inner-wrap">
      <div class="decoration">
        <svg class="left-deco" width="1045px" height="1468px" viewBox="0 0 1045 1468" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g transform="translate(-1030.000000, 0.000000)">
            <g transform="translate(950.000000, 0.000000)">
              <path d="M0,0 L805.395445,0 C731.131815,0 740.666667,76.9414646 834,230.824394 C915.57424,365.319569 1045,513.536468 1045,652.024982 C1045,806.30828 951.877684,902.632061 904.5,1091.56209 C874.07902,1212.87314 909.795583,1338.35244 1011.64969,1468 L0,1468 L0,0 Z" />
            </g>
          </g>
        </svg>
        <svg class="right-deco" width="389px" height="1468px" viewBox="0 0 389 1468" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g transform="translate(-2171.000000, 0.000000)">
            <g transform="translate(-950.000000, 0.000000)">
              <g transform="translate(950.000000, 0.000000)">
                <path d="M2329.58044,-732.909805 L3294.66463,-608.836163 C3018.10652,-208.944402 2934.07929,71.8618948 3042.58292,233.582726 C3136.98689,374.288498 3255.13325,471.945016 3255.13325,636.668858 C3255.13325,820.179655 3107.51302,903.798038 3059.64228,1128.51906 C3028.9047,1272.81133 3063.63816,1429.66837 3163.84265,1599.0902 L2141.66463,1599.0902 L2329.58044,-732.909805 Z" transform="translate(2718.164626, 433.090195) rotate(179.000000) translate(-2718.164626, -433.090195) " />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <v-card class="form-box fragment-fadeUp">
        <v-btn
          :to="localePath(routerLink.movie.home)"
          variant="text"
          icon
          class="backtohome"
        >
          <i class="ion-ios-home-outline" />
          <i class="ion-ios-arrow-round-back-outline" />
        </v-btn>
        <div class="auth-frame">
          <v-row>
            <v-col md="5" cols="12">
              <hidden point="smDown">
                <div class="greeting">
                  <div class="logo">
                    <img src="/images/movie-logo.svg" alt="logo">
                    <p class="use-text-subtitle2">
                      {{ brand.movie.projectName }}
                    </p>
                  </div>
                  <h4 class="use-text-subtitle pb-2">
                    {{ title }}
                  </h4>
                  <h6 class="use-text-paragraph">
                    {{ subtitle }}
                  </h6>
                </div>
              </hidden>
            </v-col>
            <v-col md="7" cols="12">
              <div class="form-wrap">
                <slot />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import brand from '@/assets/text/brand';
import routerLink from '@/assets/text/link';
import Hidden from '../Hidden';
import { useLocalePath } from '#imports';

export default {
  setup() {
    const localePath = useLocalePath();
    return {
      localePath,
    };
  },
  components: {
    Hidden,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      brand,
      routerLink,
    };
  },
};
</script>
