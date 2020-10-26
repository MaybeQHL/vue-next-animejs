<template>
  <h2>composition-demo</h2>
  <div class="block" v-anime="{ translateX: 100 }"></div>
  <div class="block" id="test1"></div>
  <div class="block" id="test2"></div>
  <hr />
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
        translateX: 120,
      });
      anime({
        targets: "#test2",
        translateX: 150,
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
