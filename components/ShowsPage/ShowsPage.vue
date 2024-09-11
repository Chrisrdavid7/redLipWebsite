<template>
  <div class="root">
   
    <div class="theShows">
      <v-container :class="{ 'fixed-width': isDesktop }">
        <v-row class="spacing3" justify="center">
          <v-col cols="5" class="pt-10">
            <title-main
              :align="isTablet ? 'center' : 'left'"
              primary="The"
              secondary="Shows"
            />
            <span :class="isTablet ? 'text-center custom-text' : 'custom-text'"> 
              The award-winning team behind... 
            </span>
          </v-col>
        </v-row>

        <!-- Original Casting and Development Section -->
        <v-row class="spacing3" justify="center">
          <v-col md="12" cols="12">
            <h2 class="section-title1">Original Casting and Development</h2>
          </v-col>
          <v-col
  v-for="(item, index) in originalCastingList"
  :key="index"
  cols="3" 
  class="movie-col"
>

            <movie-thumb
              :text="item.title"
              :img="item.thumb"
              :url="item.url"
            />
          </v-col>
        </v-row>

        <!-- Series Castings Section -->
        <v-row class="spacing3" justify="center">
          <v-col md="12" cols="12">
            <h2 class="section-title2">Series Castings</h2>
          </v-col>
          <v-col
            v-for="(item, index) in seriesCastingList"
            :key="index"
            md="3"
            sm="4"
            cols="12"
            class="movie-col"
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
  </div>
</template>

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
      originalCastingList: [
        
      {
          // Real Housewives of Potomac
          thumb: imgAPI.movie[9],
          url: 'https://www.bravotv.com/the-real-housewives-of-potomac',
        },
        {
          // Real Housewives of Dubai
          thumb: imgAPI.movie[8],
          url: 'https://www.bravotv.com/the-real-housewives-of-dubai',
        },
        {
          // Winter House
          thumb: imgAPI.movie[2],
          url: 'https://www.bravotv.com/winter-house',
        },
        {
          // Family Karma
          thumb: imgAPI.movie[4],
          url: 'https://www.bravotv.com/family-karma',
        },
        {
          // Summer House: Martha's Vineyard
          thumb: imgAPI.movie[5],
          url: 'https://www.bravotv.com/summer-house-marthas-vineyard',
        },
        {
          // Lucky Bastards
          thumb: imgAPI.movie[11],
          url: 'https://www.themoviedb.org/tv/64945-lucky-bastards',
        },
        {
          // Princesses Long Island
          thumb: imgAPI.movie[14],
          url: 'https://www.imdb.com/title/tt4828106/',
        },
        {
          // Kandi and the Gang
          thumb: imgAPI.movie[6],
          url: 'https://www.bravotv.com/kandi-and-the-gang',
        },
        
        {
          // Princesses Long Island
          thumb: imgAPI.movie[12],
          url: 'https://www.bravotv.com/princesses-long-island',
        },
        
        
      ],
      seriesCastingList: [
        {
          // Real Housewives of New Jersey
          thumb: imgAPI.movie[3],
          url: 'https://www.bravotv.com/the-real-housewives-of-new-jersey',
        },
        {
          // Summer House
          thumb: imgAPI.movie[10],
          url: 'https://www.bravotv.com/summer-house',
        },
        {
          // New York
          thumb: imgAPI.movie[21],
          url: 'https://www.bravotv.com/the-real-housewives-of-new-york-city',
        },
       
        {
          // Real Housewives of Atlanta
          thumb: imgAPI.movie[7],
          url: 'https://www.bravotv.com/the-real-housewives-of-atlanta',
        },
        {
          // shahs
          thumb: imgAPI.movie[15],
          url: 'https://www.bravotv.com/shahs-of-sunset',
        },
        {
          //Match Maker
          thumb: imgAPI.movie[16],
          url: 'https://www.bravotv.com/the-millionaire-matchmaker',
        },
        {
          // Basketball Wives
          thumb: imgAPI.movie[17],
          url: 'https://www.vh1.com/shows/basketball-wives',
        },
        {
          // Ink Masters
          thumb: imgAPI.movie[18],
          url: 'https://www.paramountplus.com/shows/ink-master/',
        },
        {
          // Swamp
          thumb: imgAPI.movie[19],
          url: 'https://www.history.com/shows/swamp-people',
        },
        {
          // Blonde
          thumb: imgAPI.movie[20],
          url: 'https://www.imdb.com/title/tt1125194/',
        },
        {
          // Swamp
          thumb: imgAPI.movie[22],
          url: 'https://www.imdb.com/title/tt1839328/',
        },
        {
          // Blonde
          thumb: imgAPI.movie[23],
          url: 'https://en.wikipedia.org/wiki/American_Gladiators_(2008_TV_series)_season_1',
        },
        
       
        
        
      
      ],
    };
  },
  computed: {
    isDesktop() {
      return this.$vuetify.display.mdAndUp;
    },
    isMobile() {
      return this.$vuetify.display.xsAndDown;
    },
    isTablet() {
      return this.$vuetify.display.smAndDown;
    },
  },
};
</script>

<style lang="scss" scoped>

.root {
  margin-top: -130px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;
  padding: 40px;
  background-image: url('/images/nightSky.jpg'); // Reuse the same background if needed
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  z-index: 2; // Ensure content is above the overlay
}


.root::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75); // Adjusted transparency to 0.75
  z-index: 1;
}

.root > * {
  position: relative;
  z-index: 2; // Ensure direct children are above the overlay
}


.theShows{
  margin-top: 200px;
}
h2 {
  color: #f39c12;
  text-align: center;
  margin-bottom: 20px;
}

.custom-text {
  

  margin-bottom: 40px;
  font-size: 20vm; /* Use px to fix the font size */
  color: #cccccc;
  
}

.spacing3 {
  margin-top: 30px;
}

.movie-thumb img {
  width: 100%;
  border-radius: 8px;
}
.section-title1{
  text-align: left;
  color: #f39c12;
  margin-bottom: 20px;
  margin-top: 30px;
  font-size: 28px; /* Fixed font size */
}
.section-title2{
  text-align: center;
  color: #f39c12;
  margin-bottom: 20px;
  margin-top: 80px;
  font-size: 56px; /* Fixed font size */
}
.movie-col {
  flex-basis: 25%; /* Fix the column width */
  max-width: 25%;
}

</style>
