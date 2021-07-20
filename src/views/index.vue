<template>
  <div id="home-page" class="container">
    <div class="row">
      <div class="col-12 col-xl-3 hp-left">Alo alo0</div>
      <div class="col-12 col-xl-9 hp-right">
        <FJHeader />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FJHeader from "@/components/common/HomeHeader.vue";

@Component({
  components: { FJHeader },
})
export default class App extends Vue {}
</script>
