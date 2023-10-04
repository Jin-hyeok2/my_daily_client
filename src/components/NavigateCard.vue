<script setup>
defineProps({
  title: {
  type: String,
  required: true,
  default: "제목",
  },
})
</script>

<template>
<div>
{{ title}}
</div>
</template>

<style scoped lang="scss">

</style>