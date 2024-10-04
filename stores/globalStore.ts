import { defineStore } from "pinia";
import { createPinia, setActivePinia } from 'pinia';
import ToggleSideNav from "~/components/Button/ToggleSideNav.vue";

const pinia = createPinia();
setActivePinia(pinia);

export default pinia;

export const useGlobalStore = defineStore('global', {
  state: () => ({
    darkMode: false,
    sideActive: false,
    windowWidth: 0,
  }),
  actions: {
    toggleDarkMode() {
      if (typeof document !== 'undefined') {
        const html = document.querySelector('html');
        this.darkMode = !this.darkMode;
        if (html?.classList.contains('dark')) {
          html.classList.remove('dark');
        } else {
          html?.classList.add('dark');
        }
      }
    },
    handleResize() {
        this.windowWidth = window.innerWidth;
    },
    toggleSideNav() {  
      this.sideActive = !this.sideActive;
    }
  },
  getters: {},
});