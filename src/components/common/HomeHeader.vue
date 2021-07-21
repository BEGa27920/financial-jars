<template>
  <div class="fj-header pt-2 pb-3">
    <div class="p-2 fj-header__container">
      <div
        v-ripple
        class="fj-header__btn-menu"
        @click.stop="toggleIsOpenNavLeft"
      >
        <v-svg :src="require('@/assets/icons/bars.svg')" />
      </div>

      <div class="ms-auto fj-header__right">
        <div class="fj-header__btn-login ms-auto" v-ripple v-show="false">
          <v-svg :src="require('@/assets/icons/Google__G__Logo.svg')" />
          Sign in with Google
        </div>

        <div v-ripple class="fj-header__plus-button ms-3">
          <v-svg :src="require('@/assets/icons/receipt.svg')" />
        </div>

        <div class="fj-header__profile-user ms-3">
          <div class="fj-header__profile-user__avatar">
            <img src="https://picsum.photos/64" draggable="false" />
            <div v-ripple class="fj-header__profile-user__avatar__filter" />
          </div>
        </div>
      </div>
    </div>

    <div class="fj-header__bg-filter" />
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";

const homePage = namespace("homePage");

@Component
export default class App extends Vue {
  isAsync = false;

  @homePage.Mutation("toggleIsOpenNavLeft") toggleIsOpenNavLeft: any;
}
</script>
