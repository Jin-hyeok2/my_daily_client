<template>
  <header>
    <h1>{{ props.text }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: "header",
  },
});

const emit = defineEmits(["renew"])

const sendEvent = () => {
  emit("renew")
}
</script>

<style scoped></style>
