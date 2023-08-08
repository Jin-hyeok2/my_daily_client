<script setup>
import InputString from "@/common/input/InputString.vue";
import InputNumber from "@/common/input/InputNumber.vue";
import { ref } from "vue";
import InputDate from "@/common/input/InputDate.vue";

const value = ref(3);

const updatedValue = (updated) => {
  value.value = updated;
};
const onClickButton = () => {
  console.log(value.value);
};
</script>

<template>
  <div class="main-page">
    <input-string width="100%" label="코드" />
    <input-number
      label="숫자"
      :value="value"
      :step="3"
      @update:value="updatedValue"
    />
    <input-date/>
    <button @click="onClickButton" />
  </div>
</template>

<style scoped lang="scss">
.main-page {
  background-color: antiquewhite;
}
</style>
