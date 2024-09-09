<template>
  <v-btn
    :to="localePath(link.movie.detail)"
    variant="text"
    class="simple-thumb"
  >
    <span class="wrap">
      <span class="figure">
        <span>
          <i :class="icon" />
        </span>
      </span>
      <span class="text">{{ title }}</span>
    </span>
  </v-btn>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
import link from '@/assets/text/link';
import { useLocalePath } from '#imports';

export default {
  setup() {
    const localePath = useLocalePath();
    return {
      localePath,
    };
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      link,
    };
  },
};
</script>
