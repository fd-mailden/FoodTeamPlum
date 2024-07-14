<template>
  <AppModal :visible="showModal" @close="onClose" to="modals" :is-loading="isLoading">
    <template v-slot:header>
      <h2 v-if="!isRequestedModal">Ваше замовлення</h2>
      <h2 v-else>Покупка успішно оформлена</h2>
    </template>
    <div class="modal-context" v-if="!isRequestedModal">
      <article class="product-view">
        <img class="product-view__image" :src="image" alt="coffee">
        <div class="counter">
          <button class="counter__button" @click="decrement">
            <MinusSvg/>
          </button>
          <span>{{ counter }}</span>
          <button class="counter__button" @click="increment">
            <PlusSvg/>
          </button>
        </div>
        <p class="price">{{ price * counter }}<span>₴</span></p>

      </article>
      <form @submit.prevent="onSubmit" class="product-form">
        <AppInput label="Ім’я" v-model="form.name" @input="validateName"/>
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
        <AppInput label="Номер телефону" v-model="form.phone" @input="validatePhone"/>
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
        <AppInput label="Електрона пошта" type="emal" v-model="form.email" @input="validateEmail"/>
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </form>
    </div>
    <p v-else> Наш менеджер з’яжиться з Вами у найближчий час</p>
    <template v-slot:footer>
      <div class="footer-modal" v-if="!isRequestedModal">
        <arrow-button @click="onSubmit">Надіслати</arrow-button>
      </div>
      <app-sec-button v-else @click="onClose">Відправлено</app-sec-button>
    </template>
  </AppModal>
</template>

<script>
import AppModal from "~/components/modals/AppModal.vue";
import MinusSvg from "~/components/svg/MinusSvg.vue";
import PlusSvg from "~/components/svg/PlusSvg.vue";

export default {
  name: "ProductModalContent",
  components: {AppModal, MinusSvg, PlusSvg},
  props: {
    counter: {
      type: Number,
    },
    isLoading:{
      type: Boolean,
    },
    showModal: {
      type: Boolean,
    },
    image: {
      type: String,
      required: true
    },
    isRequestedModal: {
      type: Boolean,
    },
    form: {
      type: Object,
    },
    errors: {
      type: Object,
    },
    price: {
      type: Number,
      required: true
    }
  },
  methods: {
    onSubmit() {
      this.$emit('handleSubmit')
    },
    increment() {
      this.$emit('onIncrement')
    },
    decrement() {
      this.$emit('onDecrement')
    },
    validateEmail() {
      this.$emit('validateEmail')
    },
    validatePhone() {
      this.$emit('validatePhone')
    },
    validateName() {
      this.$emit('validateName')
    },
    onClose() {
      this.$emit('onClose')
    }
  }
}
</script>

<style scoped lang="scss">


.product-form {
  display: flex;
  width: 400px;
  flex-direction: column;
  gap: 20px;
  @media (max-width: $md) {
    width: 100%;
    max-width: 400px;
  }
}

.price {
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0.05em;

  span {
    font-size: 25px;
    font-weight: 500;
  }

}

.counter {
  display: flex;
  align-items: center;
  max-width: 150px;
  margin: 26px auto;

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

.modal-context {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  @media (max-width: $lg) {
    flex-direction: column;

  }
}

.product-view {
  width: 400px;
  padding: 0 100px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: $md) {
    width: auto;
    padding: 0px;
  }


  &__image {
    max-width: 200px;
  }
}

.footer-modal {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}
</style>