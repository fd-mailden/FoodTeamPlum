<template>
  <button class="sec-button">
    <div class='ellipse'/>
    <p class="sec-button__text">
      <slot/>
    </p>
  </button>
</template>

<script>

export default {
  name: "AppSecButton",
}
</script>

<style lang="scss" scoped>
.sec-button {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  opacity: 1;
  transition: opacity ease-in-out 0.2s;
  cursor: pointer;
  font-size: 18px;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
  &__text{
    margin-left: -30px;
    margin-bottom: -5px;
  }

  &:hover {
    opacity: 0.8;

    .arrow {
      left: 10px;
    }
  }

}

.ellipse {
  width: 56px;
  height: 56px;
  background-color: $primary;
  border-radius: 50%;
}
</style>