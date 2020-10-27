<template>
  <h2 class="title">options-demo</h2>
  <hr />
  <div class="block" v-anime="{ translateX: 100 }"></div>
  <div class="block" id="test1"></div>
  <div class="block" id="test2"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "App",
  components: {},
  mounted() {
    this.$anime({
      targets: "#test1",
      translateX: 120,
    });
    this.$anime({
      targets: "#test2",
      translateX: 150,
    });
  },
});
</script>
