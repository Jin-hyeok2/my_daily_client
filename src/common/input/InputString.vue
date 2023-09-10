<script setup>

const emit = defineEmits(["update"]);
const onChangeInputString = (event) => {
  emit("update", event.target.value);
};
const props = defineProps({
  width: {
    type: String,
    required: false,
    default: "100%",
  },
  label: {
    type: String,
    required: false,
    default: "",
  },
  labelWidth: {
    type: String,
    required: false,
    default: "30%",
  },
  value: {
    type: String,
    required: true,
    default: "",
  }
});
</script>

<template>
  <div class="component">
    <label
      for="common-input-string"
      class="label"
      :style="{ width: props.labelWidth }"
      >{{ props.label }}</label
    >
    <input
      type="text"
      class="common-input-string"
      @change="onChangeInputString"
      :style="{ width: 'calc(100% - ' + props.labelWidth + ')' }"
      :value="props.value"
    />
  </div>
</template>

<style scoped lang="scss">
.component {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 10px 15px;
  box-sizing: border-box;
}

.label {
  margin-right: 5px;
  text-align: right;
}

.common-input-string {
  border: none;
  background-color: whitesmoke;
  height: 25px;

  &:focus {
    outline: inset antiquewhite;
  }
}
</style>
