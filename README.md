# 🌟vue-next-animejs

## Introduction
  * Vue3 directive  for animejs
  * base on animejs

[![npm](https://img.shields.io/npm/v/@maybecode/vue-next-animejs.svg)](https://www.npmjs.com/package/@maybecode/vue-next-animejs)
[![npm](https://img.shields.io/npm/dt/@maybecode/vue-next-animejs.svg)](https://www.npmjs.com/package/@maybecode/vue-next-animejs)
[![npm](https://img.shields.io/bundlephobia/min/@maybecode/vue-next-animejs.svg)](https://www.npmjs.com/package/@maybecode/vue-next-animejs)
## Demo
[demo](http://null_639_5368.gitee.io/vue-next-animejs)

## Installation
```
npm install @maybecode/vue-next-animejs 

npm install animejs 
```

```
import vueNextAnimejs from '@maybecode/vue-next-animejs'

createApp(App).use(vueNextAnimejs).mount('#app')
```

## How to use 
### template 
***
```
  <div class="block" v-anime="{ translateX: 100 }"></div>
  <div class="block" id="test1"></div>
  <div class="block" id="test2"></div>
```
### options api 
***
```
export default {
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
};
```
#### Typescript

 In options API of typescript, you should extend interface ComponentCustomProperties.

```
// global-properties.d.ts
import anime from "animejs";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $anime: anime.AnimeInstance;
    }
}
```
### composition api 
***
```
import anime from "animejs";
export default {
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
};
```