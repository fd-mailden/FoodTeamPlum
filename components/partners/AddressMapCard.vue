<template>
  <div class="address-item"  @click="$emit('click')">
    <SecondLogoSvg class="address-item__img"/>
    <div class="address-item__content">
      <h3 class="under-title">{{partnerName}}</h3>
      <div class="address-item__contacts">
        <p class="description-paragraph">{{address}}</p>
        <p class="description-paragraph">{{phone}}</p>
      </div>
    </div>

  </div>
</template>
<script>
import SecondLogoSvg from "~/components/svg/SecondLogoSvg.vue";

export default {
  name: "AddressMapCard",
  components: {SecondLogoSvg},
  props: {
    partnerName: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
  }
}
</script>
<style scoped lang="scss">
.address-item{
  border-radius: 10px 0px 0px 10px;
  padding: 30px 40px 15px;
  background-color: $white;
  display: flex;
  align-items: flex-start;
  gap: 40px;
  transition:  background-color 0.3s ease-in-out;
  cursor: pointer;
  @media (max-width: $lg) {
    min-width: 300px;
    border-radius: 10px;
    padding: 15px 22px;
    margin-left: 22px;
  }
  &__img{
    @media (max-width: $lg) {
      display: none;
    }
  }
  &__content{
    @media (max-width: $lg) {
      .under-title{
        margin-bottom: 10px;
      }
    }
  }
  &__contacts{
    margin-bottom: 15px;
    width: 100%;
    p{
      margin-bottom: 0;
    }
    @media (max-width: $lg) {
      margin-bottom: 0;
      h2{
        margin-bottom: 10px;
      }
    }
  }
  &:hover{
    background-color: rgba(246, 227, 195, 1)
  }

}
</style>