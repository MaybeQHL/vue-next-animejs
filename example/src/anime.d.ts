
import anime from "animejs";


declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $anime: anime.AnimeInstance;
    }
}