import {defineStore} from "pinia";
import {ref} from "vue";

export const menuUseStore = defineStore('menu', () => {
  const menu = ref([])

  return {
    menu
  }
})