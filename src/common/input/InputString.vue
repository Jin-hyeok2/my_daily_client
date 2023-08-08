<script setup>
import {defineProps, defineEmits} from "vue";
const emit = defineEmits(["update"])
const onChangeInputString = (event) => {
  emit("update", event.target.value);
}
const props = defineProps({
  width: {
    type: String,
    required: false,
    default: "100%",
  },
  label: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <div class="component" :style="{ width: props.width }">
    <label for="common-input-string" class="label">{{
      props.label
    }}</label>
    <input type="text" class="common-input-string" @change="onChangeInputString"/>
  </div>
</template>

<style scoped lang="scss">
.component {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.label {
  margin-right: 5px;
}
.common-input-string {
  border: none;
  background-color: white;
  height: 25px;
  border-bottom: 1px solid dodgerblue;
  &:focus {
    outline: none;
  }
}
</style>
