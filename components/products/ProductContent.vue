<template>
  <article class="product-content">
    <img :src="image" alt="coffee-packet" class="product-content__image">
    <div class="product-content__inner">
      <p class="product-content__subtitle">Опис:</p>
      <div v-html="text"/>
      <p class="price">{{price*counter}}<span>₴</span></p>
      <div class="counter">
        <button class="counter__button" @click="decrement">
          <MinusSvg/>
        </button>
        <span>{{ counter }}</span>
        <button class="counter__button" @click="increment">
          <PlusSvg/>
        </button>
      </div>
      <div class="buy">
        <arrow-button @click="onOpenModal">ПРИДБАТИ</arrow-button>
      </div>
    </div>
  </article>
</template>
<script>
import PlusSvg from "~/components/svg/PlusSvg.vue";
import MinusSvg from "~/components/svg/MinusSvg.vue";

export default {
  name: 'ProductContent',
  components: {PlusSvg, MinusSvg},
  props: {
    text: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    counter: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  methods: {
    onOpenModal() {
      this.$emit('onOpenModal')
    },
    increment() {
      this.$emit('onIncrement')
    },
    decrement() {
      this.$emit('onDecrement')

    }
  }
}
</script>
<style lang="scss" scoped>
.product-content {
  color: $white;
  font-size: 16px;
  text-align: center;

  :deep(.description-paragraph) {
    color: white;
  }

  &__inner {
    text-align: start;
  }

  &__head {
    text-align: end;
  }

  &__name {
    font-size: 25px;
    font-weight: 500;
    line-height: 30.48px;
    letter-spacing: 0.05em;
    text-transform: uppercase;

  }

  &__title {
    font-size: 60px;
    font-weight: 700;
    line-height: 73.14px;
    letter-spacing: 0.05rem;

  }

  &__subtitle {
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    margin-bottom: 15px;
  }


  &__image {
    width: 100%;
    max-width: 300px;
    object-fit: contain;
    margin: 0 auto 30px;
    @media (max-width: $md) {
      max-width: 250px;


    }
  }
}

.price {
  font-size: 60px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: 0.05em;

  span {
    font-size: 25px;
    font-weight: 500;
  }

  @media (max-width: $md) {
    font-size: 40px;
    line-height: 50px;

    span {
      font-size: 20px;
    }

  }

}

.counter {
  display: flex;
  align-items: center;
  max-width: 130px;

  &__button {
    border: none;
    background: transparent;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  span {
    font-size: 25px;
    font-weight: 500;
    margin: 0 25px;

  }


}

.buy {
  display: flex;
  flex-direction: row-reverse;
  padding-right: 20px;
  @media (max-width: $md) {
    flex-direction: row;

  }
}
</style>