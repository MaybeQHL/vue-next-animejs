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
    app.config.globalProperties.$anime = function (params: animejs.AnimeParams) {
        return animejs(params);
    };
}
export default {
    install
}

export type AnimeFn = (par: animejs.AnimeParams) => animejs.AnimeInstance;

// provide  for  composition api call
export const anime: AnimeFn = (par: animejs.AnimeParams) => animejs(par);


