/**
 * vue-next-animejs
 * Vue3 directive for animejs
 * @author maybe
 */

import animejs from 'animejs'

import { App } from "vue";

function install(app: App, options: any) {
    // in template use `v-anime` call 
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
// provide  for  composition api call
export const anime = animejs;


