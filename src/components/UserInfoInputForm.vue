<script setup>
  import {ref} from "vue";

  const inputForm = ref({
    username: '',
    password: '',
  })

  const submitForm = () => {
    event.preventDefault()
    console.log(inputForm.value)
  }
</script>

<template>
<form @submit="submitForm">
  <div>
    <label for="username">id:</label>
    <input id="username" type="text" v-model="inputForm.username">
  </div>
  <div>
    <label for="password">pw:</label>
    <input id="password" type="password" v-model="inputForm.password">
  </div>
  <button type="submit">login</button>
</form>
</template>

<style scoped>

</style>