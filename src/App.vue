<template>
  <router-view />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Vue, Component } from "vue-property-decorator";
import load from "@/services/load";

@Component
export default class App extends Vue {
  created() {
    load.load(this);
  }
}
</script>

<style lang="scss">
@import "@/assets/scss";
</style>
