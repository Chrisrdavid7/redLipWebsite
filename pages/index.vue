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

  // Background color for light and dark themes
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}

.space-bottom {
  margin-bottom: section-margin(6px); // Set consistent margins
}

.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5); // Consistent for all devices
}

.space-top {
  margin-top: section-margin(6px); // Consistent for all devices
}

.space-top-short {
  margin-top: section-margin($spacing1 * 0.5); // Consistent for all devices
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
import NewsEvent from '@/components/NewsEvent';
import PageNav from '@/components/PageNav';
import Notification from '@/components/Notification';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    MainContainer,
    VideoBanner,
    Promotions,
    Featured,
    NewsEvent,
    PageNav,
    Notification
  },
  head() {
    return {
      title: 'Red Lip Productions',
    };
  },
});
</script>
