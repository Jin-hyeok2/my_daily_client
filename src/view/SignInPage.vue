<script setup>
import {ref} from "vue";
import InputButton from "@/common/input/InputButton.vue";
import SignUpDialog from "@/view/component/SignUpDialog.vue";

const inputForm = ref({
  email: "",
  password: ""
})

const signUpDialogRef = ref(null);

const updateEmail = (value) => {
  inputForm.value.email = value;
}

const updatePassword = (value) => {
  inputForm.value.password = value;
}

function onSubmit() {
  console.log(inputForm.value);
  console.log(SignUpDialog);
}

function clickSignUp() {
  signUpDialogRef.value.open();
}
</script>

<template>
<div>
  <input-string :value="inputForm.email" label="email" @update = updateEmail />
  <input-string :value="inputForm.password" label="password" @update = updatePassword />
  <input-button @submit = onSubmit value="확인"/>
  <input-button @submit= clickSignUp value="회원가입"/>
  <sign-up-dialog ref="signUpDialogRef"/>
</div>
</template>

<style scoped lang="scss">

</style>