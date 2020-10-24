/**
 * vue-next-animejs
 * Vue3 directive for animejs
 */

import animejs from 'animejs'

import { App } from "vue";

function install(app: App, options: any) {
    app.directive('anime', {
        mounted(el, binding) {
            const opts = Object.assign({}, binding.value, { targets: el });
            animejs(opts);
        },
        updated(el, binding) {
            const opts = Object.assign({}, binding.value, { targets: el });
            animejs(opts);
        }
    });
    app.config.globalProperties.$anime = animejs;
}
export default {
    install
}
export const anime = animejs;