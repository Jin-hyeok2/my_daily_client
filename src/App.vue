<script setup>
import AppHeader from "@/components/AppHeader.vue";
import { ref } from "vue";
import AppFooter from "@/components/AppFooter.vue";

const headerText = ref("initHeader");
const renewStr = () => {
  headerText.value = "renewHi";
};
</script>

<template>
  <div>
    <app-header :text="headerText" @renew="renewStr" />
    <router-view />
    <app-footer />
  </div>
</template>

<style>
body {
  text-align: center;
}
</style>