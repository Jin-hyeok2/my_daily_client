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
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>