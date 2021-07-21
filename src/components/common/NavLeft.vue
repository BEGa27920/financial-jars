<template>
  <div ref="navLeft" :class="isOpenNavLeft ? 'open' : 'hidden'">
    <v-scroll class="ps">
      <div class="hp-left__container">Hello World</div>
    </v-scroll>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";

const homePage = namespace("homePage");

@Component
export default class App extends Vue {
  @homePage.State("isOpenNavLeft") isOpenNavLeft!: boolean;
  @homePage.Mutation("toggleIsOpenNavLeft") toggleIsOpenNavLeft!: any;
}
</script>

<style lang="less" scoped></style>
