<template>
  <AuthFrame
    :title="$t('common.register_title')"
    :subtitle="$t('common.register_subtitle')"
  >
    <div>
      <div class="head">
        <title-secondary :align="isMobile ? 'center' : 'left'">
          {{ $t('common.register') }}
        </title-secondary>
        <v-btn
          :to="localePath(routerLink.movie.login)"
          class="button-link"
          variant="text"
          size="small"
        >
          <v-icon class="icon sign-arrow">
            mdi-arrow-right
          </v-icon>
          {{ $t('common.register_already') }}
        </v-btn>
      </div>
      <social-auth />
      <div class="separator">
        <p>
          {{ $t('common.register_or') }}
        </p>
      </div>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="name"
              :label="$t('common.register_name')"
              :rules="requiredRules"
              color="secondary"
              class="input"
              name="name"
              filled
              required
            />
          </v-col>
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="email"
              :label="$t('common.register_email')"
              :rules="emailRules"
              color="secondary"
              class="input"
              name="email"
              filled
              required
            />
          </v-col>
          <v-col cols="12" md="6" class="px-3">
            <v-text-field
              v-model="password"
              :label="$t('common.register_password')"
              :rules="requiredRules"
              color="secondary"
              type="password"
              class="input"
              name="email"
              filled
              required
            />
          </v-col>
          <v-col cols="12" md="6" class="px-3">
            <v-text-field
              v-model="confirmPassword"
              :label="$t('common.register_confirm')"
              :rules="passwordRules"
              color="secondary"
              type="password"
              class="input"
              name="confirm"
              filled
              required
            />
          </v-col>
        </v-row>
        <div class="btn-area">
          <div class="form-helper">
            <div class="form-control-label">
              <v-checkbox
                v-model="checkbox"
                :label="$t('common.form_terms')"
                :rules="requiredRules"
                :hide-details="hideDetail"
                color="secondary"
                required
              />
              <span>
                <a href="#" class="link">
                  {{ $t('common.form_privacy') }}
                </a>
              </span>
            </div>
          </div>
          <v-btn
            size="large"
            color="secondary"
            @click="handleSubmit"
          >
            {{ $t('common.continue') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script>
import routerLink from '@/assets/text/link';
import TitleSecondary from '../Title/TitleSecondary';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
import { useLocalePath } from '#imports';

export default {
  setup() {
    const localePath = useLocalePath();
    return {
      localePath,
    };
  },
  components: {
    SocialAuth,
    TitleSecondary,
    AuthFrame,
  },
  data() {
    return {
      routerLink,
      valid: true,
      email: '',
      name: '',
      hideDetail: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      confirmPassword: '',
      requiredRules: [v => !!v || 'This field is required'],
      passwordRules: [
        v => !!v || 'This field is required',
        v => v === this.password || 'Passwords do not match',
      ],
      checkbox: false,
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        console.log('data submited');
        this.hideDetail = true;
      } else {
        this.hideDetail = false;
      }
    },
  },
};
</script>
