<template>
  <div ref="navLeft" :class="isOpenNavLeft ? 'open' : 'hidden'">
    <v-scroll class="ps">
      <div class="hp-left__container py-3">
        <div class="hp-left__logo mb-5">
          <v-svg :src="require('@/assets/icons/Travigo.svg')" />
        </div>

        <router-link
          v-for="(o, i) of menuLeft"
          :key="i"
          :to="{ name: o.router }"
          v-slot="{ href, navigate, isActive }"
          custom
        >
          <a
            @click="navigate"
            :href="href"
            :class="{ active: isActive }"
            class="hp-left__nav-item mx-3 mx-xxl-4"
            v-ripple="{ color: isActive ? 'currentColor' : 'var(--primary)' }"
          >
            <v-svg :src="isActive ? o.iconActive : o.icon" />
            <span>{{ o.label }}</span>
          </a>
        </router-link>
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
