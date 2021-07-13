<template>
  <router-view />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { typeThemeMode } from "./store/modules/theme";
const theme = namespace("theme");

@Component
export default class App extends Vue {
  @theme.Mutation("setThemeMode") setThemeMode!: any;
  created() {
    this.setThemeMode(typeThemeMode.DARK);
  }
}
</script>

<style lang="scss">
@import "@/assets/scss";
</style>
