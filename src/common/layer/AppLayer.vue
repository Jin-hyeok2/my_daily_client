<script setup>

</script>

<template>
<div class="app-layer">
  <slot/>
</div>
</template>

<style scoped lang="scss">
.app-layer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>