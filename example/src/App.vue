<template>
  <div>
    <composition-demo></composition-demo>
    <options-demo></options-demo>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import CompositionDemo from "./components/composition-demo.vue";
import OptionsDemo from "./components/options-demo.vue";
export default defineComponent({
  name: "App",
  components: { CompositionDemo, OptionsDemo },
});
</script>
