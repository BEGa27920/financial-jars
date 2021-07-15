<template>
  <div class="fj-header p-1 mt-2">
    <div v-ripple class="fj-header__btn-menu">
      <v-svg :src="require('@/assets/icons/bars.svg')" />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>
