<template>
  <div class="block" v-anime="{ translateX: 170 }"></div>
  <div class="block" id="test1"></div>
  <div class="block" id="test2"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { anime } from "@maybecode/vue-next-animejs";
export default defineComponent({
  name: "App",
  components: {},
  setup() {
    onMounted(() => {
      anime({
        targets: "#test1",
        translateX: 170,
      });
    });
    return {};
  },
});
</script>
<style>
.block {
  width: 50px;
  height: 50px;
  background-color: orange;
}
</style>
