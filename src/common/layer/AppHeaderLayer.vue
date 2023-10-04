<script setup>

</script>
<template>
  <div class="app-header">
    해더입니다
    <slot />
    <router-link to="/sign-in" > 로그인 페이지 이동 </router-link>
  </div>
</template>
<style scoped lang="scss">
.app-header{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  width: 100%;
  height: 15%;
}
</style>

