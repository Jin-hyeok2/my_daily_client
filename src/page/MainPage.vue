<script setup>
import AppFooterLayer from "@/common/layer/AppFooterLayer.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import {menuUseStore} from "@/store/webMenu";
import {storeToRefs} from "pinia";
import AppHeaderMenu from "@/components/AppHeaderMenu.vue";
import {$} from "@/store";

const menuStore = menuUseStore();
const {menu} = storeToRefs(menuStore)
menu.value = $().request.get("/meta/menus")
</script>

<template>
  <div class="main-page">
    <app-layer>
      <app-header-layer >
        <app-header-menu :menus="menu"/>
      </app-header-layer>
      <app-body-layer>
        <template #category >
        <app-sidebar />
        </template>
        <template #grid >
          <router-view/>
        </template>
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
