<template>
  <div class="news">
    <figure>
      <img :src="img" alt="thumb">
    </figure>
    <div class="desc">
      <div class="text">
        <p class="type caption">
          {{ $t('movieLanding.' + type) }}
        </p>
        <p>{{ text }}</p>
      </div>
      <v-btn 
        size="small" 
        variant="text" 
        class="btn" 
        :href="pressUrl"  
      >
        {{ $t('movieLanding.news_readmore') }}
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    pressUrl: {
      type: String,  // Add a prop for the press article URL
      required: true,
    },
  },
};
</script>
