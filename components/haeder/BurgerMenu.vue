<template>
  <button class="burger-menu"  @click="handleOnClick">
    <span class="line" :class="{'line--active': isActive}"></span>
    <span class="line" :class="{'line--active': isActive}"></span>
    <span class="line" :class="{'line--active': isActive}"></span>
  </button>
</template>

<script>
export default {
  name: 'BurgerMenu',
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleOnClick() {
      this.$emit('onClickLink')
    }
  }
}
</script>

<style lang="scss" scoped>
.burger-menu {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  z-index: 25;


  &.is-active {

    .line {
      background: $white;

      &:nth-child(1) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:nth-child(2) {
        left: -30px;
      }

      &:nth-child(3) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  &:hover,
  &:focus-visible {
    .line {
      background: $primary;
    }
  }

  .line {
    display: block;
    position: absolute;
    left: 5px;
    width: 20px;
    height: 2px;
    background: $white;
    border-radius: 3px;
    z-index: 1;
    transition: $transition-time-main;

    &--active {
      background: $primary ;

    }

    &:nth-child(1) {
      top: 10px;
    }

    &:nth-child(2) {
      top: 16px;
    }

    &:nth-child(3) {
      top: 22px;
    }

  }
}

</style>
