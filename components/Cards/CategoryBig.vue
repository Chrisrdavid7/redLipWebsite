<template>
  <div
    :class="[ type === 'top-over' ? 'half-char' : 'full-char' ]"
    :style="{ 'background-color': '#' + background }"
    class="category"
  >
    <img :src="img" class="shadow" :alt="title">
    <img :src="img" :alt="title">
    <span class="property">
      <span class="title-main use-text-title2">
        {{ title }}
      </span>
      <span class="total use-text-paragraph">
        {{ total }}
        &nbsp;Items
      </span>
      <hidden point="xsDown">
        <v-btn
          block
          size="large"
          variant="outlined"
          color="white"
          class="button"
        >
          Explore
        </v-btn>
      </hidden>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import './card-style';
</style>

<script>
import Hidden from '../Hidden';

export default {
  components: {
    Hidden,
  },
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
