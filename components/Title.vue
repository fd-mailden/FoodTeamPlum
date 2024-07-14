<template>
   <h2 class="main-title">
     <slot/>
     <RegisteredSvg class="icon"/>
   </h2>
</template>

<script>
import RegisteredSvg from "~/components/svg/RegisteredSvg.vue";

export default {
  name: "UITitle",
  components: {RegisteredSvg}
}
</script>
<style scoped lang="scss">
.main-title {
  position: relative;
  font-size: 60px;
  font-weight: 700;
  line-height: 73.14px;
  letter-spacing: 0.05em;
  width: fit-content;
  text-align: left;
  margin-bottom: 45px;
  @media (max-width: $md) {
    font-size: 40px;
  }
  .icon {
    position: absolute;
    top: 0;
    right: -3px;
  }
}
</style>