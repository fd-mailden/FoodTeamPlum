<template>
  <div class="card-wrapper">
    <div class="popup-wrapper">
      <div class="card">
        <GreenBoxSvg class="card__inner"/>
        <component :is="icon" class="card__icon"/>
      </div>
      <div class="popup">
        <p class="popup__text">{{text}}</p>
        <TitleSvg/>
      </div>
    </div>
  </div>
</template>

<script>
import LeafSvg from '~/components/svg/LeafSvg.vue'
import GreenBoxSvg from "~/components/svg/GreenBoxSvg.vue";
import TitleSvg from "~/components/svg/TitleSvg.vue";
import CakeSvg from "~/components/svg/CakeSvg.vue";
import CoffeeSvg from "~/components/svg/CoffeeSvg.vue";

export default {
  name: 'ProductInfoCard',
  components: {LeafSvg, GreenBoxSvg, TitleSvg, CoffeeSvg, CakeSvg},
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.card-wrapper {
  max-width: 100px;
}

.card {
  width: 78px;
  height: 78px;
  z-index: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;


  &__inner {
    border-radius: 20px;
    position: absolute;
    z-index: -1;
    width: 67px;
    height: 67px;
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out, box-shadow 0.4s ease-in-out;
    @media (max-width: $md) {
      width: 56px;
      height: 56px;
    }
  }
  &__icon{
    @media (max-width: $md) {
      width: 25px;
      height: 25px;
    }
  }
}

.popup-wrapper {
  position: relative;
  width: 100px;


  &:hover {

    .card__inner {
      width: 78px;
      height: 78px;
      box-shadow: 0px 0px 22px 0px rgba(255, 255, 255, 0.5);
      @media (max-width: $md) {
        width: 56px;
        height: 56px;
      }
    }

    .popup {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

.popup {
  opacity: 0;
  transform: translateX(-50px);
  position: absolute;
  top: -10px;
  right: -180px;
  color: $white;
  z-index: 1;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &__text {
    margin-bottom: -20px;
    margin-left: 20px;
  }
}
</style>
