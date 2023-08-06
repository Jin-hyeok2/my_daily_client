<script setup>
import {computed, ref} from "vue";

  const inputForm = ref({
    username: '',
    password: '',
  })

  const checkValid = computed(() => {
    return !inputForm.value.username ||
        !inputForm.value.password ||
        false;
  })

  const submitForm = () => {
    event.preventDefault()
    console.log(inputForm.value)
  }
  const inputId = (event) => {
    inputForm.value.username = event.target.value;
  }
</script>

<template>
<form @submit="submitForm">
  <div>
    <label for="username">id:</label>
    <input id="username" type="text" :value="inputForm.username" @input="inputId">
  </div>
  <div>
    <label for="password">pw:</label>
    <input id="password" type="password" v-model="inputForm.password">
  </div>
  <button type="submit" :disabled="checkValid">login</button>
</form>
</template>

<style scoped>

</style>