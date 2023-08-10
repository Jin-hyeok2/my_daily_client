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
  labelWidth: {
    type: String,
    required: false,
    default: "30%",
  },
  disableStep: {
    type: Boolean,
    required: false,
    default: false,
  }
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
    <label
      for="input-number"
      class="label"
      :style="{ width: props.labelWidth }"
    >
      {{ props.label }}
    </label>
    <input
      type="number"
      class="common-input-number"
      :style="{ width: 'calc(100% - ' + props.labelWidth + ')' }"
      @input="onChangeInputNumber"
      :value="props.value"
    />
    <font-awesome-icon
      :icon="['fas', 'plus']"
      class="plus"
      @click="onClickPlusButton"
      v-if="!props.disableStep"
    />
    <font-awesome-icon
      :icon="['fas', 'minus']"
      class="minus"
      @click="onClickMinusButton"
      v-if="!props.disableStep"
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

.common-input-number {
  border: none;
  height: 25px;
  background-color: whitesmoke;
  -webkit-appearance: none;

  &:focus {
    outline: inset antiquewhite;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
