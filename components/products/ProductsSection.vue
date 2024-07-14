<template>
  <section :id="SECTION_ANCHORS.product" class="container products">
    <article class="product-content">
      <div class="product-content__head">
        <h2 class="product-content__name">Продукт</h2>
        <h2 class="product-content__title">coffee flour</h2>
      </div>
      <div class="products-wrapper">
        <div class="product-item">
          <ProductContent
              :price="products[0].price"
              :counter="products[0].counter"
              :image="products[0].img"
              :text="products[0].text"
              @onDecrement="decrement(0)"
              @onIncrement="increment(0)"
              @onOpenModal='onOpenProduct(products[0])'/>
        </div>
        <div class="product-badges">
          <SideProductTooltips/>
        </div>
        <div class="product-item ">
          <ProductContent
              :price="products[1].price"
              :counter="products[1].counter"
              :image="products[1].img"
              :text="products[1].text"
              @onDecrement="decrement(1)"
              @onIncrement="increment(1)"
              @onOpenModal='onOpenProduct(products[1])'/>
        </div>
      </div>
    </article>
  </section>

  <ProductModalContent
      :is-loading="isLoading"
      :counter="currentProduct?.counter"
      :form="form"
      :showModal="showModal"
      :price="currentProduct?.price || 300"
      :errors="errors"
      :image="currentProduct?.img || '/_nuxt/assets/images/coffee-pacet.png' "
      :isRequestedModal="isRequestedModal"
      @onClose=onCloseModal
      @handleSubmit="onSubmit"
      @onDecrement="decrementCurrentProduct(currentProduct?.id)"
      @onIncrement="incrementCurrentProduct(currentProduct?.id)"
      @validateName="validateName"
      @validatePhone="validatePhone"
      @validateEmail="validateEmail"
  />
</template>
<script>
import {SECTION_ANCHORS} from "~/constants/NavigationList.js";
import ProductInfoCard from "~/components/products/ProductInfoCard.vue";
import SideProductTooltips from "~/components/products/SideProductTooltips.vue";
import ProductContent from "~/components/products/ProductContent.vue";
import ModalProduct from "~/components/modals/AppModal.vue";
import ProductModalContent from "~/components/modals/ProductModalContent.vue";

export default {
  name: "ProductSection",
  components: {
    ProductInfoCard,
    SideProductTooltips,
    ModalProduct,
    ProductContent,
    ProductModalContent,
  },
  data() {
    return {
      showModal: false,
      counter: 1,
      isLoading: false,
      isRequestedModal: false,
      currentProduct: null,
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
      products: [
        {
          id: 0,
          counter: 1,
          name: "Shallow",
          price: 300,
          img: "/_nuxt/assets/images/coffee-pacet.png",
          text: '<p class="description-paragraph">Coffeе Flour  - натуральний та багатофункціональний харчовий продукт, вироблений по запатентованій технології біопереробки відпрацьованої кавової гущі (SCG).</p>' + '<p class="description-paragraph">Додайте кавове борошно до вашого улюбленого рецепту хліба або кексів, щоб\n' +
              '        збагатити його смак та поживну цінність. Використовуйте в смузі для додаткового енергетичного заряду або\n' +
              '        створюйте оригінальні десерти, які здивують ваших гостей.</p>' +
              '<p class="description-paragraph">Coffeе Flour є корисним для здоровя’я та безпечним продуктом харчування, який не містить глютену, багатий на клітковину, антіоксиданти, білки та вітаміни. </p>' +
              '<p class="description-paragraph">Гамма смаку Coffeе Flour поєднує в собі нотки шоколаду, горіху та кави.</p>'
        },
        {
          id: 1,
          counter: 1,
          name: 'Average',
          price: 300,
          img: "/_nuxt/assets/images/sec_product.png",
          text: '<p class="description-paragraph">Coffeе Flour  - натуральний та багатофункціональний харчовий продукт, вироблений по запатентованій технології біопереробки відпрацьованої кавової гущі (SCG).</p>' + '<p class="description-paragraph">Додайте кавове борошно до вашого улюбленого рецепту хліба або кексів, щоб\n' +
              '        збагатити його смак та поживну цінність. Використовуйте в смузі для додаткового енергетичного заряду або\n' +
              '        створюйте оригінальні десерти, які здивують ваших гостей.</p>' +
              '<p class="description-paragraph">Coffeе Flour є корисним для здоровя’я та безпечним продуктом харчування, який не містить глютену, багатий на клітковину, антіоксиданти, білки та вітаміни. </p>' +
              '<p class="description-paragraph">Гамма смаку Coffeе Flour поєднує в собі нотки шоколаду, горіху та кави.</p>'
        }
      ]
    }
  },
  methods: {
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
      this.currentProduct = null
    },
    onOpenProduct(product) {
      this.currentProduct = product
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
            from: 'ПРОДУКТ',
            subject: `Хочешу курили ПРОДУКТ ${this.currentProduct.name}`,
            text: `Хочешу курили ПРОДУКТ ${this.currentProduct.name}`,
            html: `<div>
                      <p style='margin: 0 0 10px;'>Name: ${this.form.name}</p>
                      <p style='margin: 0 0 10px;'>Phone: ${this.form.phone}</p>
                      <p style='margin: 0 0 10px;'>Email: ${this.form.email}</p>
                      <p style='margin: 0 0 10px;'>Amount: ${this.currentProduct.counter}</p>
                      <p style='margin: 0 0 10px;'>Totola Price: ${this.currentProduct.price * this.currentProduct.counter}</p>
                      <p style='margin: 0 0 10px;'>Хочешу курили ПРОДУКТ ${this.currentProduct.name}</p>
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
    increment(index) {
      if (this.products[index].counter <= 100) {
        this.products[index].counter++
      }
    },
    decrement(index) {
      if (this.products[index].counter > 1) {
        this.products[index].counter--
      }
    },
    incrementCurrentProduct(index) {
      if (this.currentProduct.counter <= 100) {
        this.products[index].counter++
        this.currentProduct.counter++
      }
    },
    decrementCurrentProduct(index) {
      if (this.currentProduct.counter > 1) {
        this.products[index].counter--
        this.currentProduct.counter--
      }
    }

  },
  computed: {
    SECTION_ANCHORS() {
      return SECTION_ANCHORS
    }
  }
}

</script>

<style scoped lang="scss">
.product-content {
  overflow: visible;


  :deep(. container) {
    overflow: visible;
  }
}

.products {
  padding-top: 150px;
  //padding-bottom: 150px;
  width: 100%;
  //background-image: url("~/assets/images/bg-product.jpg");
  //background-size: 100%;
  //background-position: center;
  //background-repeat: no-repeat;
  //background-attachment: local;
  @media (max-width: $md) {
    padding-top: 100px;
  }

  &__background {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product-left {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__image {
    max-width: 400px;
    object-position: center;
    object-fit: cover;
    margin-bottom: 24px;
  }
}

.product-content {
  color: $white;
  font-size: 16px;

  &__head {
    text-align: end;
    margin-bottom: 45px;
  }

  &__name {
    color: $white;
    font-size: 25px;
    font-weight: 500;
    line-height: 30.48px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    @media (max-width: $md) {
      font-size: 17px;
      margin-bottom: 0;

    }

  }

  &__title {
    color: $white;
    font-size: 60px;
    font-weight: 700;
    line-height: 73.14px;
    letter-spacing: 0.05em;
    @media (max-width: $md) {

      font-size: 40px;

    }
  }
}

.products-wrapper {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: $md) {
    gap: 30px;
    flex-direction: column-reverse;
  }
}

.product-item {
  display: block;
  width: 40%;
  @media (max-width: $md) {
    width: 90vw;
  }
}

.product-badges {
  @media (max-width: $md) {
    position: absolute;
    top: -50px;
    left: -5px;

  }
}


</style>