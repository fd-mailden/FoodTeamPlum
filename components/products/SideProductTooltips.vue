<template>
  <div class="side-tooltips">
    <ProductInfoCard v-for="item in tooltips" :key="item.id" :icon="item.icon" :text="item.text"/>
  </div>
</template>
<script>
import ProductInfoCard from "~/components/products/ProductInfoCard.vue";

export default {
  name: 'SideProductTooltips',
  components: {ProductInfoCard},
  data() {
    return {
      tooltips: [
        {
          id: 1,
          icon: 'LeafSvg',
          text: 'Органічний продукт'
        },
        {
          id: 2,
          icon: 'CakeSvg',
          text: 'Смакує з випічкою'
        },
        {
          id: 3,
          icon: 'CoffeeSvg',
          text: 'Food that inspires'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.side-tooltips {
  max-height: 310px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media (max-width: $md) {
    gap: 20px;
  }
}
</style>