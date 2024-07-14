<template>
  <ModalProduct :visible="showModal" @close="showModal = false">
    <template v-slot:header>
      <h2>Покупка успішно оформлена</h2>
    </template>
    <p>Наш менеджер з’яжиться з Вами у найближчий час</p>
    <template v-slot:footer>
      Відправлено
    </template>
  </ModalProduct>
</template>
<script>
import MinusSvg from "~/components/svg/MinusSvg.vue";
import PlusSvg from "~/components/svg/PlusSvg.vue";
import ModalProduct from "~/components/modals/AppModal.vue";

export default {
  name: "SuccessRequestedModal",
  components: {ModalProduct, PlusSvg, MinusSvg},
  props:{
    showModal: {
      type: Boolean,
    }
  }
}
</script>