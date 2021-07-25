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

        <div
          v-ripple
          class="fj-header__button state-cloud ms-3"
          @click="testClickCloud"
        >
          <v-svg
            :style="{ opacity: currentStateCloud === 'CLOUD' ? '100%' : '0%' }"
            :src="require('@/assets/icons/cloud-regular.svg')"
          />
          <!-- <v-svg
            :style="{
              opacity: currentStateCloud === 'LOADING' ? '100%' : '0%',
            }"
            :src="require('@/assets/icons/refresh-regular.svg')"
          /> -->
          <ProgressSpinner
            :style="{
              opacity: currentStateCloud === 'LOADING' ? '100%' : '0%',
            }"
            color="currentColor"
            size="100%"
          />
          <v-svg
            :style="{
              opacity: currentStateCloud === 'CLOUD_SUCCESS' ? '100%' : '0%',
            }"
            :src="require('@/assets/icons/cloud-check-regular.svg')"
          />
          <v-svg
            :style="{
              opacity: currentStateCloud === 'CLOUD_FAILED' ? '100%' : '0%',
            }"
            :src="require('@/assets/icons/cloud-failed-regular.svg')"
          />
        </div>

        <div v-ripple style="padding: 8px" class="fj-header__button ms-3">
          <v-svg
            style="transform: rotate(270deg)"
            :src="require('@/assets/icons/ticket-regular.svg')"
          />
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
import ProgressSpinner from "@/components/common/ProgressSpinner.vue";

const homePage = namespace("homePage");

@Component({
  components: { ProgressSpinner },
})
export default class App extends Vue {
  @homePage.Mutation("toggleIsOpenNavLeft") toggleIsOpenNavLeft: any;

  currentStateCloud: "CLOUD" | "LOADING" | "CLOUD_SUCCESS" | "CLOUD_FAILED" =
    "CLOUD";

  testClickCloud() {
    if (this.currentStateCloud !== "CLOUD") return;
    this.currentStateCloud = "LOADING";
    setTimeout(() => {
      this.currentStateCloud = "CLOUD_SUCCESS";
      setTimeout(() => {
        this.currentStateCloud = "CLOUD";
      }, 1500);
    }, 5000);
  }
}
</script>
