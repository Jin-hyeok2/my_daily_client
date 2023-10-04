<script setup>
import NavigateCard from "@/components/NavigateCard.vue";

defineProps({
  menus: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<template>
  <div class="app-header-menus">
    <navigate-card
      v-for="(menu, idx) in menus"
      :key="{ idx }"
      :title="menu?.title"
    />
  </div>
</template>

<style scoped lang="scss">
.app-header-menus {
  flex-direction: row;
}
</style>