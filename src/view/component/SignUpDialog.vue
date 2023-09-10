<script setup>
import CommonModal from "@/common/CommonModal.vue";
import { ref } from "vue";
import axios from "axios";

const commonModalRef = ref(null);

function open() {
  console.log("signUpDialog open");
  commonModalRef.value.open();
}

function close() {
  commonModalRef.value.close();
}

defineExpose({
  open,
  close,
});
//
const inputForm = ref({
  email: "",
  password: "",
  name: "",
  birth: "",
  phoneNumber: "",
  signUpPlatform: "DEFAULT",
});

const updateFunction = {
  email(email) {
    inputForm.value.email = email;
  },
  password(password) {
    inputForm.value.password = password;
  },
  name(name) {
    inputForm.value.name = name;
  },
  birth(birth) {
    inputForm.value.birth = birth;
  },
  phoneNumber(phoneNumber) {
    inputForm.value.phoneNumber = phoneNumber;
  },
};

async function onClickSignUp() {
  console.log(inputForm.value);
  const requestBody = {
    email: inputForm.value.email,
    password: inputForm.value.password,
    name: inputForm.value.name,
    birth: inputForm.value.birth,
    phoneNumber: inputForm.value.phoneNumber,
    signUpPlatform: "DEFAULT",
    roles: []
  }
  const response = await axios.post("/members", requestBody);
  console.log(response);
  console.log("hello world");
}
</script>

<template>
  <common-modal ref="commonModalRef">
    <input-string
      :value="inputForm.email"
      label="email"
      @update="updateFunction.email"
    />
    <input-string
      :value="inputForm.password"
      label="password"
      @update="updateFunction.password"
    />
    <input-string
      :value="inputForm.name"
      label="name"
      @update="updateFunction.name"
    />
    <input-string
      :value="inputForm.birth"
      label="birth"
      @update="updateFunction.birth"
    />
    <input-string
      :value="inputForm.phoneNumber"
      label="phoneNumber"
      @update="updateFunction.phoneNumber"
    />
    <input-button value="가입하기" @submit="onClickSignUp" />
  </common-modal>
</template>

<style scoped lang="scss"></style>
