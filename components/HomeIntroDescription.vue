<template>
  <div class="description-wrapper">
    <div class=""></div>
    <div class="description " :class="{'description--scrolling': isWindowScrolling}">
      <img class="description__img" src="~/assets/images/coffee-flour.png" alt="coffee-flour.png">
      <div class="description__content">
        <div class="description__title-wrapper">
          <h2 class="description__title">Coffeе Flour</h2>
          <RegisteredSvg class="icon"/>
        </div>
        <p class="description__text">
          -натуральний та багатофункціональний харчовий продукт, вироблений по запатентованій технології біопереробки
          відпрацьованої кавової гущі (SCG).
        </p>
        <a class="description__button" :href="`/#${SECTION_ANCHORS.product}`">
          Детальніше...
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import RegisteredSvg from "~/components/svg/RegisteredSvg.vue";
import {SECTION_ANCHORS} from "~/constants/NavigationList.js";

export default {
  name: 'HomeIntroDescription',
  computed: {
    SECTION_ANCHORS() {
      return SECTION_ANCHORS
    }
  },
  components: {RegisteredSvg},
  props: {
    isWindowScrolling: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.description-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  max-width: 1470px;
  padding: 0 30px;
  align-items: flex-end;
  margin: 0 auto;
  color: $white;
  //height: 50px;
  @media (max-width: $md) {
    padding: 0 0 40px 0;
  }

}

.description {
  max-width: 600px;
  transform: translateY(-45vh);
  padding: 20px 32px;
  background: rgba(149, 163, 120, 1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  z-index: 10;
  transition: transform ease-in-out 0.3s;
  @media (max-width: $md) {
    transform: translateY(0);
    max-width: 100%;
    gap: 20px;
  }

  &--scrolling {
    transform: translateY(-17vh);
    @media (max-width: $md) {
      transform: translateY(-20px);
    }
  }


  &__img {
    max-width: 120px;
    object-fit: cover;
  }

  &__title-wrapper {
    position: relative;
    width: fit-content;
    text-align: left;

    .icon {
      position: absolute;
      top: 0;
      right: -23px;
      width: 22px;
      color: $white;
      @media (max-width: $md) {
        width: 12px;
        right: -13px;
        top: -10px;


      }
    }
  }

  &__title {
    text-transform: uppercase;
    text-align: left;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-bottom: 15px;
    @media (max-width: $md) {
      font-size: 17px;
      margin-bottom: 5px;
    }
  }

  &__text {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    letter-spacing: 0.04em;
    @media (max-width: $md) {
      margin-bottom: 5px;
      font-size: 14px;
    }
  }

  &__button {
    border: none;
    background-color: transparent;
    color: $white;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-align: left;
  }
}
</style>