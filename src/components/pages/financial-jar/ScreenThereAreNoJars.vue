<template>
  <div class="fj-there-are-no-jars">
    <div>
      <div class="fs-1 fw-bold mb-4 text-center">Opps!</div>
      <div class="fs-5 text-center mb-5">
        Có vẻ như bạn chưa có chiếc hũ nào thì phải?
      </div>

      <router-link v-ripple :to="{ name: 'financial-jar--create' }">
        <v-svg
          class="mb-4"
          :src="require('@/assets/icons/plus-small-regular.svg')"
        />
        <span class="text-center fs-5 lh-sm">Thêm một<br />chiếc hũ mới</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>
