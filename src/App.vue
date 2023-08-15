<script setup>
import { ref } from "vue";
import AppSidebar from "@/components/AppSidebar.vue";
import AppFooterLayer from "@/common/layer/AppFooterLayer.vue";

const headerText = ref("initHeader");
const renewStr = () => {
  headerText.value = "renewHi";
};
</script>

<template>
  <app-layer>
    <app-header-layer :text="headerText" @renew="renewStr" />
    <app-body-layer>
      <app-sidebar />
      <router-view />
    </app-body-layer>
    <app-footer-layer />
  </app-layer>
</template>

<style lang="scss">
#app {
  height: 100vh;
}
</style>