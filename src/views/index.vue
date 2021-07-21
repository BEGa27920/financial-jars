<template>
  <div id="home-page" class="container">
    <div class="row">
      <FJNavLeft class="col-12 col-xl-3 py-xl-2 hp-left" />
      <div
        :class="isOpenNavLeft ? 'open' : 'hidden'"
        class="hp-left__bg-filter"
        ref="bgFilter"
        @click.stop="toggleIsOpenNavLeft"
      />

      <div class="col-12 col-xl-9 hp-right">
        <FJHeader />
        Alo alo
        <div style="height: 300vh"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Vue, Component, Watch } from "vue-property-decorator";
import FJHeader from "@/components/common/HomeHeader.vue";
import FJNavLeft from "@/components/common/NavLeft.vue";
import { namespace } from "vuex-class";

const homePage = namespace("homePage");

@Component({
  components: { FJHeader, FJNavLeft },
})
export default class App extends Vue {
  @homePage.State("isOpenNavLeft") isOpenNavLeft!: boolean;
  @homePage.Mutation("toggleIsOpenNavLeft") toggleIsOpenNavLeft!: any;

  @Watch("isOpenNavLeft")
  watchOpenNav(nValue: boolean) {
    const bg = this.$refs.bgFilter as HTMLDivElement;
    if (nValue) {
      bg.style.visibility = "visible";
      bg.style.transform = "translateX(0%)";
    } else {
      setTimeout(() => {
        bg.style.visibility = "hidden";
        bg.style.transform = "translateX(-100%)";
      }, 300);
    }
  }
}
</script>
