<template>
  <div>
    <composition-demo></composition-demo>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import CompositionDemo from "./components/composition-demo.vue";
export default defineComponent({
  name: "App",
  components: { CompositionDemo },
});
</script>
