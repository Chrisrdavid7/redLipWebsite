<template>
  <AuthFrame
    :title="$t('common.login_title')"
    :subtitle="$t('common.login_subtitle')"
  >
    <div>
      <div class="head">
        <title-secondary :align="isMobile ? 'center' : 'left'">
          {{ $t('common.login') }}
        </title-secondary>
        <v-btn
          :to="localePath(routerLink.movie.register)"
          class="button-link"
          variant="text"
          size="small"
        >
          <v-icon class="icon sign-arrow">
            mdi-arrow-right
          </v-icon>
          {{ $t('common.login_create') }}
        </v-btn>
      </div>
      <social-auth />
      <div class="separator">
        <p>
          {{ $t('common.login_or') }}
        </p>
      </div>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="email"
              :label="$t('common.login_email')"
              :rules="emailRules"
              color="secondary"
              class="input"
              name="email"
              filled
              required
            />
          </v-col>
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="password"
              :label="$t('common.login_password')"
              :rules="requiredRules"
              color="secondary"
              type="password"
              class="input"
              name="email"
              filled
              required
            />
          </v-col>
        </v-row>
        <div class="form-helper">
          <div class="form-control-label">
            <v-checkbox
              v-model="checkbox"
              :label="$t('common.login_remember')"
              color="secondary"
            />
          </div>
          <v-btn
            size="small"
            class="button-link"
            variant="text"
            href="#"
          >
            {{ $t('common.login_forgot') }}
          </v-btn>
        </div>
        <div class="btn-area">
          <v-btn
            size="large"
            block
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
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      requiredRules: [v => !!v || 'This field is required'],
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
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited');
      }
    },
  },
};
</script>
