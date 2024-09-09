<template>
  <div class="root">
    <div class="decoration">
      <svg fill="#cccccc">
        <use xlink:href="/images/movie/deco-med-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ 'fixed-width': isDesktop }">
      <v-row class="spacing3">
        <v-col md="3" cols="12" class="pt-10">
          <title-main
            :align="isTablet ? 'center' : 'left'"
            primary="The"
            secondary="Shows"
            
          />
          <span :class="isTablet ? 'text-center custom-text' : 'custom-text'"> 
            The casting team behind... 
          </span>


        </v-col>
        <v-col
          v-for="(item, index) in movieList"
          :key="index"
          md="3"
          sm="4"
          cols="12"
        >
          <movie-thumb
            :text="item.title"
            :img="item.thumb"
            :url="item.url" 
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './featured-style.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
import Title from '../Title';
import MovieThumb from '../Cards/MovieThumb';

export default {
  components: {
    'title-main': Title,
    MovieThumb,
  },
  data() {
    return {
      imgAPI,
      movieList: [
        {
          //Names commented out for design
          // title: 'Winter House',
          thumb: imgAPI.movie[2],
          url: 'https://www.bravotv.com/winter-house' 
        },
        {
          // title: 'Real Housewives of New Jersey',
          thumb: imgAPI.movie[3],
          url: 'https://www.bravotv.com/the-real-housewives-of-new-jersey' 
        },
        {
          // title: 'Family Karma',
          thumb: imgAPI.movie[4],
          url: 'https://www.bravotv.com/family-karma' 
        },
      ],
    };
  },
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    },
    isTablet() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  
};

</script>
