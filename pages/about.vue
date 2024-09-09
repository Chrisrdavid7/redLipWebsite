<template>
  <div id="about" class="main-wrap">
    <main-container nav-scroll>
      <div class="container-general">
        <section id="about-section" class="space-top">
          <About />
        </section>
      </div>
    </main-container>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer';
import About from '@/components/About'; // Ensure this component is correctly referenced

export default {
  components: {
    MainContainer,
    About,
  },
  head() {
    return {
      title: 'About',
    };
  },
};
</script>

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

.space-top {
  margin-top: section-margin(6px);
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
