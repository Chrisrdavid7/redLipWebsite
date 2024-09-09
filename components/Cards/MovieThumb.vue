<template>
  <v-card class="movie-thumb">
    <v-btn
      :href="url" 
      class="btn-wrap"
      text
    >
      <span class="figure">
        <i class="ion-ios-play play" />
        <img :src="img" alt="text">
        <span class="figcaption">
          {{ $t('movieLanding.featured_caption') }}
        </span>
      </span>
      <span class="text">
        {{ text }}
      </span>
    </v-btn>
  </v-card>
</template>

<style lang="scss" scoped>
@import './card-style';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,  // Add a prop for the URL
      required: true,
    },
  },
};
</script>
