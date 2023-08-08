<script setup>

</script>

<template>
  <div class="component">
    <label for="common-input-date" class="label">달력</label>
    <input type="date" class="common-input-date"/>
  </div>
</template>

<style scoped lang="scss">
.component {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.label {
  margin-right: 5px;
}
.common-input-date {
  border: none;
  height: 25px;
  background-color: white;
  &:focus {
    outline: none;
  }
}
</style>