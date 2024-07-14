<template>
  <button class="arrow-button">
    <slot/>
    <div class="arrow-sections">
      <component :is="arrow" class="arrow"/>
      <div class='ellipse'>
      </div>
    </div>

  </button>
</template>

<script>
import ArrowRightSvg from '~/components/svg/ArrowRightSvg.vue'
import ArrowSecSvg from "~/components/svg/ArrowSecSvg.vue";

export default {
  name: "ArrowButton",
  components: {ArrowRightSvg, ArrowSecSvg},
  props: {
    mode: {
      type: String,
      required: false
    }
  },
  computed: {
    arrow() {
      if (this.mode && this.mode === 'secondary') {
        return ArrowSecSvg
      }
      return ArrowRightSvg
    }

  }
}
</script>

<style lang="scss" scoped>
.arrow-button {
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

  &:hover {
    opacity: 0.8;

    .arrow {
      left: 10px;
    }
  }

}

.arrow-sections {
  margin-left: 35px;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  width: 120px;
}

.arrow {
  position: absolute;
  left: 0;
  top: 38%;
  transition: left ease-in-out 0.2s;

}

.ellipse {
  width: 56px;
  height: 56px;
  background-color: $primary;
  border-radius: 50%;
}
</style>