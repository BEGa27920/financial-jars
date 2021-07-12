<template>
  <div>
    <h1>themeMode: {{ themeMode }}</h1>
    <h2 v-for="(o, i) of listThemeMode" :key="i" @click="setThemeMode(o)">
      {{ o }}
    </h2>
    <router-view />
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { typeThemeMode } from "./store/modules/theme";
const theme = namespace("theme");

@Component
export default class App extends Vue {
  @theme.State("themeMode") themeMode!: typeThemeMode;
  @theme.Mutation("setThemeMode") setThemeMode!: any;
  listThemeMode = typeThemeMode;
  created() {
    this.setThemeMode(typeThemeMode.LIGHT);
  }
}
</script>

<style lang="scss">
@import "@/assets/scss";
</style>
