<script setup>
import { defineEmits, defineProps, ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const emit = defineEmits(["update:value"]);
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
  value: {
    type: Number,
    required: false,
    default: 0,
  },
  step: {
    type: Number,
    required: false,
    default: 1,
  },
});
const onChangeInputNumber = (event) => {
  emit("update:value", event.target.value);
};

let number = ref(props.value);
const onClickPlusButton = () => {
  number.value += props.step;
  emit("update:value", number.value);
};
const onClickMinusButton = () => {
  number.value -= props.step;
  emit("update:value", number.value);
};
</script>

<template>
  <div class="component">
    <label for="input-number" class="label">{{ props.label }}</label>
    <input
      type="text"
      class="common-input-number"
      @input="onChangeInputNumber"
      :value="props.value"
    />
    <font-awesome-icon
      :icon="['fas', 'plus']"
      class="plus"
      @click="onClickPlusButton"
    />
    <font-awesome-icon
      :icon="['fas', 'minus']"
      class="minus"
      @click="onClickMinusButton"
    />
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

.common-input-number {
  border: none;
  border-bottom: 1px solid dodgerblue;
  height: 25px;

  &:focus {
    outline: none;
  }
}

.plus {
  margin: 3px;

  &:hover {
    cursor: pointer;
  }
}

.minus {
  margin: 3px;

  &:hover {
    cursor: pointer;
  }
}
</style>
