<template>
  <div class="fj-header p-2 mt-2 card-2">
    <div class="fj-header__btn-menu card-1">
      <v-svg :src="require('@/assets/icons/bars.svg')" />
    </div>
    <!-- <IconBars /> -->
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Vue, Component } from "vue-property-decorator";
import IconBars from "@/assets/icons/bars.svg?inline";

@Component({ components: { IconBars } })
export default class App extends Vue {
  IconBars = IconBars;
  poster = require("@/assets/poster-colors.png");

  loaded(e: any) {
    console.log(e);
  }
  unloaded(e: any) {
    console.log(e);
  }
  error(e: any) {
    console.log(e);
  }
}
</script>
