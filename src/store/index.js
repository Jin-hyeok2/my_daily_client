import { defineStore } from "pinia";
import {ref} from "vue";
import req from "@/global/request";
export const $ = defineStore("data", () =>{
  const isLoading = ref(false);
  const request = req;
  function startApiRequest() {
    isLoading.value = true
  }

  function endApiRequest() {
    isLoading.value = false
  }
  return {
    isLoading,
    request,
    startApiRequest,
    endApiRequest
  }
});
