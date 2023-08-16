<script setup>
import { ref } from "vue";
import DateUtil from "@/util/date";
import MenuManagement from "@/view/MenuManagement.vue";
import axios from "axios";

const number = ref(3);
const date = ref(new DateUtil());
const updatedValue = (updated) => {
  number.value = updated;
};
const onClickButton = async () => {
  console.log(number.value);
  const response = await axios.get("http://localhost:9121")
  console.log(response);
};
</script>

<template>
  <div class="main-page">
    <menu-management />
    <input-number
      label="숫자"
      :value="number"
      :step="3"
      @update:value="updatedValue"
      disable-step
    />
    <input-date :value="date" label="달력" />
    <button @click="onClickButton" />
  </div>
</template>

<style scoped lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
  width: 90%;
  box-sizing: border-box;
}
</style>
