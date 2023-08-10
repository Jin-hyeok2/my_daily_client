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
  <app-layer>
    <app-header :text="headerText" @renew="renewStr" />
    <router-view />
    <app-footer />
  </app-layer>
</template>