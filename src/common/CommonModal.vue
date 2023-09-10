<script setup>
import {ref} from "vue";
const isOpen = ref(false);

function open() {
  console.log("log open modal");
  isOpen.value = true;
}

function close() {
  isOpen.value = false;
}

defineExpose({
  open, close
})

</script>

<template>
<div v-if="isOpen">
  <slot />
</div>
</template>

<style scoped>

</style>