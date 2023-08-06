<template>
  <div>
    <app-header :text="headerText" @renew="renewStr"/>
    <user-info-input-form />
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import UserInfoInputForm from "@/components/UserInfoInputForm.vue";
import {ref} from "vue";

const headerText = ref("initHeader");
const renewStr = () => {
  headerText.value = 'renewHi';
}
</script>
