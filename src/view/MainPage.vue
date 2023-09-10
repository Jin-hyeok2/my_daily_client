<script setup>
import AppFooterLayer from "@/common/layer/AppFooterLayer.vue";
import AppSidebar from "@/components/AppSidebar.vue";

</script>

<template>
  <div class="main-page">
    <app-layer>
      <app-header-layer :text="headerText" @renew="renewStr" />
      <app-body-layer>
        <app-sidebar />
      </app-body-layer>
      <app-footer-layer />
    </app-layer>
  </div>
</template>

<style scoped lang="scss">
.main-page {
  height: 100%;
  width: 100%;
}
.app-layer {
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
  width: 100%;
  box-sizing: border-box;
}
</style>
