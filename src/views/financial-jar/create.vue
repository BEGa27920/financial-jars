<template>
  <div class="financial-jar--create">
    <div class="row">
      <div class="col-8">A</div>
      <div class="col-4">
        <div class="card-2 card-d-4">
          <JAR />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JAR from "@/components/common/Jar.vue";

@Component({
  components: { JAR },
})
export default class App extends Vue {}
</script>
