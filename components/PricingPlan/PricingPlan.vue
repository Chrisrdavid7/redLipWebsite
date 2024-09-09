<template>
  <div class="root">
    <div class="decoration">
      <svg fill="#cccccc">
        <use xlink:href="/images/movie/deco-med-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <div class="text-center">
        <title-main align="center" primary="Flexible" secondary="Pricing and Plan" />
      </div>
      <div v-if="loaded" class="pricing-wrap">
        <section>
          <div
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="400"
            class="item"
          >
            <div>
              <pricing-card
                :price="0"
                :feature-list="feature.basic"
                title="Basic"
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                type="basic"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="400"
            data-aos-duration="400"
            class="item best"
          >
            <div>
              <pricing-card
                :price="24"
                :feature-list="feature.best"
                title="Best Value"
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                type="value"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="600"
            data-aos-duration="400"
            class="item"
          >
            <div>
              <pricing-card
                :price="54"
                :feature-list="feature.pro"
                title="Pro"
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="800"
            data-aos-duration="400"
            class="item"
          >
            <div>
              <pricing-card
                :price="99"
                :feature-list="feature.enterprise"
                title="Enterprise"
                desc=" Interdum et malesuada fames ac ante ipsum primis in faucibus. "
              />
            </div>
          </div>
        </section>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './pricing-plan-style.scss';
</style>

<script>
import AOS from 'aos';
import Title from '../Title';
import PricingCard from '../Cards/Pricing';

const featureList = {
  basic: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Quisque ut metus',
  ],
  best: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Quisque ut metus',
    'Vivamus sit amet',
    'Cras convallis lacus orci',
  ],
  pro: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Nulla lobortis nunc',
    'Vitae scelerisque',
    'Duis sed augue',
  ],
  enterprise: [
    'Nam sollicitudin dignissim',
    'Pellentesque ac bibendum ',
    'Vestibulum consequat',
    'Donec commodo',
    'Duis tristique metus',
  ],
};

export default {
  components: {
    'title-main': Title,
    PricingCard,
  },
  data() {
    return {
      feature: featureList,
      loaded: false,
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
};
</script>
