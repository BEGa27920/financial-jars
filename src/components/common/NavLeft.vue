<template>
  <div ref="navLeft" :class="isOpenNavLeft ? 'open' : 'hidden'">
    <v-scroll class="ps">
      <div class="hp-left__container py-3">
        <div class="hp-left__logo mb-5">
          <v-svg :src="require('@/assets/icons/Travigo.svg')" />
        </div>

        <a
          href="#"
          v-for="(o, i) of menuLeft"
          :key="i"
          :class="{ active: o.active }"
          class="hp-left__nav-item mx-3 mx-xxl-4"
          v-ripple="{ color: o.active ? 'currentColor' : 'var(--primary)' }"
        >
          <!-- :to="{ name: o.router }" -->
          <v-svg :src="o.active ? o.iconActive : o.icon" />
          <span>{{ o.label }}</span>
        </a>
      </div>
    </v-scroll>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { menuLeft } from "@/config";

const homePage = namespace("homePage");

@Component
export default class App extends Vue {
  @homePage.State("isOpenNavLeft") isOpenNavLeft!: boolean;
  @homePage.Mutation("toggleIsOpenNavLeft") toggleIsOpenNavLeft!: any;

  menuLeft = menuLeft;
}
</script>
