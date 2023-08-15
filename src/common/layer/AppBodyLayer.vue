<script setup>

</script>

<template>
<div class="app-body-layer">
  <slot/>
</div>
</template>

<style scoped lang="scss">
.app-body-layer{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75%;
  box-sizing: border-box;
}
</style>