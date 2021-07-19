<template>
  <div class="fj-header p-2 ps-3 pe-3 mt-2">
    <div v-ripple class="fj-header__btn-menu">
      <v-svg :src="require('@/assets/icons/bars.svg')" />
    </div>

    <div class="fj-header__btn-login ms-auto" v-ripple v-show="false">
      <v-svg :src="require('@/assets/icons/Google__G__Logo.svg')" />
      Sign in with Google
    </div>

    <div class="fj-header__profile-user ms-auto">
      <div class="fj-header__profile-user__avatar">
        <img src="https://picsum.photos/64" draggable="false" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  isAsync = false;
}
</script>
