<script setup>
import { defineProps, defineEmits } from "vue";
import { useStore } from "vuex"
const store = useStore();
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

const doSomething = () => {
  console.log("though the state")
}
store.commit("setInitFunction", doSomething);
</script>
<template>
  <header>
    <h1>{{ props.text }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

