<template>
  <div id="detail-movie" class="main-wrap">
    <main-container nav-scroll>
      <div class="container-general">
        <section id="shows" class="space-top">
           <Shows />
      </section>
      </div>
    </main-container>
  </div>
</template>

<style scoped lang="scss">
@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  margin-bottom: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin(3px);
  }
  @include breakpoints-down(xs) {
    margin-bottom: section-margin(2px);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top {
  margin-top: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-top: section-margin(3px);
  }
  @include breakpoints-down(xs) {
    margin-top: section-margin(2px);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
  @include breakpoints-down(sm) {
    margin-top: section-margin(3px);
  }
  @include breakpoints-down(xs) {
    margin-top: section-margin(2px);
  }
}
.container-wrap {
  margin-top: -40px;
  > section {
    position: relative;
  }
}

</style>

<script>
import MainContainer from '@/components/MainContainer';
import Shows from '@/components/ShowsPage';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    MainContainer, 
    Shows,
  },
  head() {
    return {
      title:'Chelsey Shows',
    };
  },
});
</script>
