<script setup>
import {ref} from "vue";

const inputForm = ref({
  id: undefined,
  name: undefined
})
const updateId = (input) => {
  inputForm.value.id = input
}

const updateName = (input) => {
  inputForm.value.name = input
}

const clickButton = async () => {

}
</script>

<template>
  <div>
    <input-string label="id" :value="inputForm.id" @update="updateId"/>
    <input-string label="페이지 이름" :value="inputForm.name" @update="updateName"/>
    <button @click="clickButton">메뉴 추가</button>
  </div>
</template>

<style scoped lang="scss"></style>
