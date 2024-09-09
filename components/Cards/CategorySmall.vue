<template>
  <v-btn
    :style="{ 'background-color': '#' + background }"
    text
    class="category full button-base"
  >
    <img :src="img" :alt="title">
    <span class="property">
      <span class="title-main use-text-title2">
        {{ title }}
      </span>
      <span class="total use-text-paragraph">
        {{ total }}
        Items
      </span>
    </span>
  </v-btn>
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
  },
};
</script>
