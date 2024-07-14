<template>
  <section class="container become-partner">
    <div class="row become-partner__inner">
      <article class="col col-lg-6 offers">
        <h3 class="become-partner__title">Ми пропонуємо</h3>
        <PartnerOffer v-for="offer in offers"
                      :key="offer.offerNumber"
                      :offer-number="offer.offerNumber"
                      :title="offer.title"
                      :description="offer.description"
        />
      </article>
      <article class="col col-lg-6 partners-overview">
        <h2 class="partners-overview__title">Хочеш стати партнером ?</h2>
        <UITitle>foodtemplum</UITitle>
        <p class="partners-overview__text">Приєднуючись до партнерської програми FOODTEMPLUM, ви отримуєте унікальні
          можливості для розвитку вашого бізнесу та залучення нових клієнтів. </p>
        <ArrowButton class="partners-overview__btn" mode="secondary" @click="onOpenModal">Стати партнером</ArrowButton>
      </article>
    </div>
  </section>
  <PartnerModal
      :is-loading="isLoading"
      :show-modal="showModal"
      :is-requested-modal="isRequestedModal"
      :errors="errors"
      :form="form"
      @onClose="onCloseModal"
      @validateName="validateName"
      @validatePhone="validatePhone"
      @validateEmail="validateEmail"
      @handleSubmit="onSubmit"
  />
</template>
<script>
import UITitle from "~/components/Title.vue";
import PartnerOffer from "~/components/partners/PartnerOffer.vue";
import PartnerModal from "~/components/modals/PartnerModal.vue";

export default {
  name: 'BecomePartner',
  components: {UITitle, PartnerOffer, PartnerModal},
  data() {
    return {
      isLoading: false,
      showModal: false,
      isRequestedModal: false,
      form: {
        name: "",
        email: "",
        phone: ""
      },
      errors: {
        name: null,
        email: null,
        phone: null
      },
      offers: [
        {
          offerNumber: 1,
          description: "Ми пропонуємо платформу, яка привертає велику кількість відвідувачів, що забезпечує постійний потік потенційних клієнтів для вашого бізнесу. Співпрацюючи з нами, ви зможете збільшити свою аудиторію та знайти нових покупців.",
          title: "Розширення клієнтської бази"
        },
        {
          offerNumber: 2,
          description: "Ми допомагаємо нашим партнерам з просуванням їхніх товарів та послуг. Використовуючи наші маркетингові канали, ви зможете збільшити впізнаваність вашого бренду та підвищити рівень продажів. \n" +
              "Це включає розміщення реклами, участь у спільних акціях та інші маркетингові заходи.",
          title: "Маркетингова підтримка"
        },
        {
          offerNumber: 3,
          description: "Ми надаємо нашим партнерам постійну підтримку та навчання. \n" +
              "Наші експерти завжди готові допомогти вам у вирішенні питань пов’язаних з продуктом та надати необхідні консультації. Ми також проводимо регулярні вебінари та тренінги для підвищення вашої компетенції та ефективності роботи.",
          title: "Підтримка та навчання"
        },
        {
          offerNumber: 4,
          description: "Для наших партнерів ми пропонуємо вигідні умови співпраці, включаючи спеціальні знижки, бонуси та інші привілеї. Ми цінуємо кожного нашого партнера та прагнемо зробити нашу співпрацю максимально взаємовигідною.",
          title: "Спеціальні умови та бонуси"
        },
      ]
    }
  },
  methods: {
    onOpenModal() {
      this.showModal = true
    },
    validateName() {
      if (this.form.name === '') {
        this.errors.name = "Будь ласка, введіть ім’я.";
      } else {
        this.errors.name = null;
      }
    },
    validateEmail() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (this.form.email === '') {
        this.errors.email = "Будь ласка, введіть електронну пошту.";
      } else if (!emailPattern.test(this.form.email)) {
        this.errors.email = "Будь ласка, введіть коректну електронну пошту.";
      } else {
        this.errors.email = null;
      }
    },
    validatePhone() {
      const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
      if (!this.form.phone) {
        this.errors.phone = "Будь ласка, введіть номер телефону.";
      } else if (!phonePattern.test(this.form.phone)) {
        this.errors.phone = "Будь ласка, введіть коректний номер телефону.";
      } else {
        this.errors.phone = null;
      }
    },
    validateForm() {
      this.validateName();
      this.validateEmail();
      this.validatePhone();
      return !this.errors.name && !this.errors.email && !this.errors.phone;
    },
    async onSubmit() {
      const {$mail} = useNuxtApp()

      if (this.validateForm()) {
        try {
          this.isLoading = true
          await $mail.send({
            from: 'Хочешу стати партнером ',
            subject: 'Хочешу стати партнеромm',
            text: ' Хочеш стати партнером ? ЗАЛИШИТИ ЗАЯВКУ',
            html: `<div>
                      <p style='margin: 0 0 10px;'>Name: ${this.form.name}</p>
                      <p style='margin: 0 0 10px;'>Phone: ${this.form.phone}</p>
                      <p style='margin: 0 0 10px;'>Email: ${this.form.email}</p>
                      <p style='margin: 0 0 10px;'>Message: Хочеш стати партнером ? ЗАЛИШИТИ ЗАЯВКУ</p>
                    </div>`
          })
          this.isLoading = false
          this.isRequestedModal = true
        } catch (error) {
          this.isLoading = false

          return console.log(error)
        }
      } else {
        console.log("Форма не валидна. Исправьте ошибки.");
      }
    },
    onCloseModal() {
      this.showModal = false
      this.form = {
        name: "",
        email: "",
        phone: ""
      }
      this.errors = {
        name: "",
        email: "",
        phone: ""
      }
      this.isRequestedModal = false
    },
  }
}
</script>
<style scoped lang="scss">
.become-partner {
  margin-top: 155px;

  &__title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: $primary;
    margin-bottom: 30px;
  }

  &__inner {
    justify-content: space-between;
    @media (max-width: $lg) {
      flex-direction: column-reverse;
    }


  }
}

.partners-overview {
  color: $primary;
  max-width: 480px;
  overflow: visible;
  margin-bottom: 40px;
  @media (max-width: $lg) {
    max-width: 100%;

  }

  &__title {
    font-size: 25px;
    font-weight: 500;
    line-height: 30.48px;
    letter-spacing: 0.05em;
    text-align: end;

  }

  &__text {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

  }

  &__btn {
    color: $primary;

  }

  .offers {
    @media (max-width: $lg) {
      max-width: 100%;

    }
  }

}
</style>