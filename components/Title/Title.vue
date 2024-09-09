<template>
  <div :class="align" class="title-main">
    <h4 class="primary-title">
      {{ primary }}
    </h4>
    <h4 class="secondary-title">
      {{ secondary }}
    </h4>

  </div>
</template>

<style lang="scss" scoped>
@import './title-style';
</style>

<script>
export default {
  props: {
    primary: {
      type: String,
      required: true,
    },
    secondary: {
      type: String,
      required: true,
    },
  
    align: {
      type: String,
      default: 'left',
    },
  },
};
</script>
