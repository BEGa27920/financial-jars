<template>
  <div class="financial-jar--base">
    <NoJars v-if="yourJar.length <= 0" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import NoJars from "@/components/pages/financial-jar/ScreenThereAreNoJars.vue";

const jar = namespace("jar");

@Component({
  components: { NoJars },
})
export default class App extends Vue {
  @jar.State("yourJar") yourJar!: any[];
}
</script>
