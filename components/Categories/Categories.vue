<template>
  <div class="root">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <v-row class="spacing3">
        <v-col md="6" cols="12" class="pt-10">
          <title-main
            :align="isMobile ? 'center' : 'left'"
            primary="Top"
            secondary="Categories"
          />
        </v-col>
        <v-col md="3" sm="6" cols="12">
          <category-small-card
            :img="imgAPI.movie[9]"
            title="Academy Awards"
            total="24"
            background="E79A1C"
          />
        </v-col>
        <v-col md="3" sm="6" cols="12">
          <category-small-card
            :img="imgAPI.movie[10]"
            title="Animations"
            total="24"
            background="E91E63"
          />
        </v-col>
      </v-row>
      <v-row class="spacing3">
        <v-col md="6" cols="12" class="py-0">
          <category-big-card
            :img="imgAPI.movie[11]"
            title="Actions"
            total="24"
            background="1A237E"
            type="top-over"
          />
          <v-row class="spacing3">
            <v-col md="6" sm="6" cols="12">
              <category-small-card
                :img="imgAPI.movie[12]"
                title="Romance Drama"
                total="24"
                background="14A8B9"
              />
            </v-col>
            <v-col md="6" sm="6" cols="12">
              <category-small-card
                :img="imgAPI.movie[13]"
                title="Commedy"
                total="24"
                background="2AA845"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col md="6" cols="12" class="py-0">
          <category-big-card
            :img="imgAPI.movie[14]"
            title="Super Heroes"
            total="24"
            background="ED3626"
            type="bottom-over"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './categories-style.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
import Title from '../Title';
import CategoryBigCard from '../Cards/CategoryBig';
import CategorySmallCard from '../Cards/CategorySmall';

export default {
  components: {
    CategoryBigCard,
    CategorySmallCard,
    'title-main': Title,
  },
  data() {
    return {
      imgAPI,
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    },
  },
};
</script>
