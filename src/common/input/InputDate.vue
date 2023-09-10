<script setup>
import {ref} from "vue";
import DateUtil from "@/util/date";
const emit = defineEmits(["update:value"])

const props = defineProps({
  value: {
    type: DateUtil,
    required: true,
    default: new DateUtil(),
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
});

const date = ref(props.value.date)
const onChangeDate = (event) => {
  emit("update:value", event.target.value);
};
</script>

<template>
  <div class="component">
    <label
      for="common-input-date"
      class="label"
      :style="{ width: props.labelWidth }"
      >{{ props.label }}</label
    >
    <input
      type="date"
      class="common-input-date"
      :value="date"
      :style="{ width: 'calc(100% - ' + props.labelWidth + ')' }"
      @change="onChangeDate"
    />
  </div>
</template>

<style scoped lang="scss">
.component {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  box-sizing: border-box;
  margin: 10px 15px;
}

.label {
  margin-right: 5px;
  text-align: right;
}

.common-input-date {
  border: none;
  height: 25px;
  background-color: whitesmoke;

  &:focus {
    outline: inset antiquewhite;
  }
}
</style>
