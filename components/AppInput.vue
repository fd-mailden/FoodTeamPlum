<template>
  <div class="input-container">
    <label :class="{ active: isActive || modelValue }" @click="isActive = true">{{ label }}</label>
    <input
        type="text"
        :value="modelValue"
        @focus="isActive = true"
        @blur="isActive = false"
        @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
};
</script>

<style scoped lang="scss">
.input-container {
  position: relative;
  margin-top: 20px;
}

label {
  position: absolute;
  top: 0;
  left: 5px;
  color: $white;
  transition: 0.3s ease all;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

input {
  width: 100%;
  padding: 5px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid $white;
  color: $white;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  transition: all 0.3s ease;
}

label.active,
input:focus + label {
  top: -15px;
  font-size: 12px;
  color: $white;
}

input:focus {
  outline: none;
  //border-bottom: 2px solid $white;
  //padding-bottom: 0;
}
</style>
