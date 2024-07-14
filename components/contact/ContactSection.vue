<template>
  <section class="contact" :id="SECTION_ANCHORS.contacts">
    <article class="contact__left">
      <h3 class="under-title">Контакти</h3>
      <UITitle>foodtemplum</UITitle>
      <p class="text-label">Номер телефону</p>
      <a class="text" href="tel:3809646534">+380 964 65 34</a>
      <p class="text-label">Пошта</p>
      <a class="text" href="mailto:foodtemplum@gmail.com">foodtemplum@gmail.com</a>
      <p class="text-label">Офіси</p>
      <a class="text" href="https://maps.app.goo.gl/gjN8jYNqcadRidZs5" target="_blank">Україна, Київ, вул. Басейна,
        21.</a>

    </article>
    <article class="contact__right">
      <h3 class="form-title" v-if="!isPausedForm">залишились запитання - зв’яжиться з нами</h3>
      <h3 class="form-title" v-else>Заявка успішно відправлена</h3>
      <form @submit.prevent="onSubmit" v-if="!isPausedForm">
        <AppInput label="Ім’я" v-model="form.name" @input="validateName"/>
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
        <AppInput label="Номер телефону" v-model="form.phone" @input="validatePhone"/>
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
        <AppInput label="Електрона пошта" type="emal" v-model="form.email" @input="validateEmail"/>
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
        <arrow-button>Надіслати</arrow-button>
      </form>
      <div class="form-success" v-else>
        <p>Наш менеджер з’яжиться з Вами у найближчий час</p>
        <app-sec-button>Відправлено</app-sec-button>
      </div>
      <app-loader :loading="isLoading"/>
    </article>
  </section>
</template>


<script>
import UITitle from "~/components/Title.vue";
import AppInput from "~/components/AppInput.vue";
import {SECTION_ANCHORS} from "~/constants/NavigationList.js";

export default {
  name: "ContactSection",
  computed: {
    SECTION_ANCHORS() {
      return SECTION_ANCHORS
    }
  },
  components: {UITitle, AppInput},
  data() {
    return {
      isPausedForm: false,
      isLoading: false,
      form: {
        name: "",
        email: "",
        phone: ""
      },
      errors: {
        name: null,
        email: null,
        phone: null
      }
    };
  },
  methods: {
    validateName() {
      console.log(this.form.name)
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
      console.log(this.errors.name)
      return !this.errors.name && !this.errors.email && !this.errors.phone;
    },
    async onSubmit() {
      if (this.validateForm()) {
        // Здесь вы можете отправить данные формы на сервер или выполнить другие действия
        console.log("Форма валидна. Данные формы:", this.form);
        const {$mail} = useNuxtApp()
        this.isLoading = true
        try {
          // const response = await fetch('/api/gmail', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json'
          //   },
          //   body: JSON.stringify({form: this.form})
          // })
          await $mail.send({
            from: 'ЗАЛИШИЛИСЬ ЗАПИТАННЯ - ЗВ’ЯЖИТЬСЯ З НАМИ',
            subject: 'Contact form',
            text: 'ЗАЛИШИЛИСЬ ЗАПИТАННЯ - ЗВ’ЯЖИТЬСЯ З НАМИ',
            html: `<div>
                      <p style='margin: 0 0 10px;'>Name: ${this.form.name}</p>
                      <p style='margin: 0 0 10px;'>Phone: ${this.form.phone}</p>
                      <p style='margin: 0 0 10px;'>Email: ${this.form.email}</p>
                      <p style='margin: 0 0 10px;'>Message: ЗАЛИШИЛИСЬ ЗАПИТАННЯ - ЗВ’ЯЖИТЬСЯ З НАМИ</p>
                    </div>`
          })
          this.isLoading = false
          this.isPausedForm = true
        } catch (error) {
          this.isLoading = false

          return console.error(error)
        }

      } else {
        console.log("Форма не валидна. Исправьте ошибки.");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  margin-bottom: 100px;

  @media (min-width: 1440px) {
    max-width: 1500px;
    margin: 0 auto;
  }
  @media (max-width: $lg) {
    flex-direction: column;

  }

  &__left {
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    color: $primary;
    @media (max-width: $xl) {
      padding: 0 30px;

    }
    @media (max-width: $lg) {
      width: 100%;
    }
  }

  &__right {
    position: relative;
    padding: 40px;
    width: 100%;
    max-width: 630px;
    border-radius: 20px 0px 0px 20px;
    background: linear-gradient(239.24deg, #e6d0a5 9.27%, #bfb08c 119.52%);
    @media (min-width: 1440px) {
      border-radius: 20px;
    }
    @media (max-width: $lg) {
      padding: 40px 22px;
      margin-bottom: 70px;
      border-radius: 20px;
      max-width: 100%;

    }
  }

  form {
    max-width: 374px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: $md) {
      max-width: 100%;

    }
  }
}

.text-label {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin-top: 0px;
  @media (max-width: $lg) {
    font-size: 14px;
    margin-top: 10px;
  }
}

.text {
  color: $primary;
  font-size: 25px;
  font-weight: 500;
  line-height: 30.48px;
  letter-spacing: 0.05em;
  margin-bottom: 40px;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s ease-in-out;
  width: max-content;
  cursor: pointer;
  @media (max-width: $lg) {
    font-size: 17px;
    margin-bottom: 0px;
  }

  &:hover {
    border-bottom: 1px solid $primary;
  }
}

.form-title {
  font-size: 25px;
  font-weight: 500;
  line-height: 30.48px;
  letter-spacing: 0.05em;
  color: $white;
  text-transform: uppercase;
  @media (max-width: $lg) {
    font-size: 17px;
  }
}

.form-success {
  p {
    color: $white;
    height: 100px;
  }
}

</style>