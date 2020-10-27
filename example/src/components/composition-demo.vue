<template>
  <h2 class="title">composition-demo</h2>
  <hr />
  <!-- <div class="block" v-anime="{ translateX: 100 }"></div> -->
  <transition>
    <div class="block c-t1" v-if="isShow" v-anime="inObj"></div>
  </transition>
  <button @click="reset">重置动画</button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { anime } from "@maybecode/vue-next-animejs";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const isShow = ref(true);
    const inObj = {
      translateY: [{ value: 20, duration: 500 }],
      easing: "easeOutElastic(1, .8)",
      loop: false,
      complete() {
        // isShow.value = !isShow.value;
      },
    };

    const reset = () => {
      isShow.value = !isShow.value;
    };
    onMounted(() => {
      // animeIns = anime(obj);
    });
    return { isShow, inObj, reset };
  },
});
</script>
