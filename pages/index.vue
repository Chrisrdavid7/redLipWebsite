<template>
  <div>
    <main-container nav-scroll>
      <section id="home">
        <video-banner />
      </section>
      <div id="promotions">
        <promotions />
      </div>
      <section id="featured" class="space-top">
        <featured />
      </section>
    
      <section id="news" class="space-top-short">
        <news-event />
      </section>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
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
import VideoBanner from '@/components/VideoBanner';
import Promotions from '@/components/Promotions';
import Featured from '@/components/Featured';
import Trending from '@/components/Trending';
import About from '@/components/About';
import Categories from '@/components/Categories';
import AllCategories from '@/components/AllCategories';
import PricingPlan from '@/components/PricingPlan';
import Faq from '@/components/Faq';
import NewsEvent from '@/components/NewsEvent';
import Hidden from '@/components/Hidden';
import PageNav from '@/components/PageNav';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    MainContainer,
    VideoBanner,
    Promotions,
    About,
    Featured,
    Trending,
    Categories,
    AllCategories,
    PricingPlan,
    Faq,
    NewsEvent,
    PageNav,
    Hidden,
    Notification,
  },
  head() {
    return {
      title:'Chelsey Creative',
    };
  },
});
</script>
