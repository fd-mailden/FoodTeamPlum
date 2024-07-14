<template>
  <AppModal :visible="showModal" @close="onClose" to="partners" :is-loading="isLoading">
    <template v-slot:header>
      <h2 v-if="!isRequestedModal">Залишити заявку</h2>
      <h2 v-else>Заявка успішно відправлена</h2>
    </template>
    <form @submit.prevent="onSubmit" class="partner-form" v-if="!isRequestedModal">
      <AppInput label="Ім’я" v-model="form.name" @input="validateName"/>
      <span v-if="errors.name" class="error">{{ errors.name }}</span>
      <AppInput label="Номер телефону" v-model="form.phone" @input="validatePhone"/>
      <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      <AppInput label="Електрона пошта" type="emal" v-model="form.email" @input="validateEmail"/>
      <span v-if="errors.email" class="error">{{ errors.email }}</span>
    </form>
    <p v-else>Наш менеджер з’яжиться з Вами у найближчий час</p>
    <template v-slot:footer>
      <arrow-button v-if="!isRequestedModal" @click="onSubmit">Надіслати</arrow-button>
      <app-sec-button v-else @click="onClose">Відправлено</app-sec-button>
    </template>
  </AppModal>
</template>

<script>
import AppModal from "~/components/modals/AppModal.vue";

export default {
  name: "PartnerModal",
  components: {AppModal},
  props: {
    showModal: {
      type: Boolean,
    },

    isLoading: {
      type: Boolean,
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
  },
  methods: {
    onSubmit() {
      this.$emit('handleSubmit')
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


.partner-form {
  position: relative;
  display: flex;
  width: 400px;
  flex-direction: column;
  gap: 20px
}


.footer-modal {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}
</style>