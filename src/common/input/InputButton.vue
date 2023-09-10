<script setup>
const props = defineProps({
  value: {
    type: String,
    required: true,
    default: "",
  }
})

const emit = defineEmits(["submit"]);
const onClick = () => {
  emit("submit");
}
</script>

<template>
<input type="button" @click= onClick :value="props.value" />
</template>

<style scoped lang="scss">

</style>