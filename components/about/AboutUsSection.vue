<template>
  <section class="container about-wrapper" :id="SECTION_ANCHORS.about">
    <h2 class="about__title">Про нас</h2>

    <div class="about">
      <article class="about__info">
        <div class="about-context">
          <div class="">
            <p class="about-context__text">
              НАУКОВО-ВИРОБНИЧА КОМПАНІЯ «FOODTEMPLUM» - міжнародний  лідер в сфері апсайклінгу їжі. </p>
            <p class="about-context__text">
              Наша компанія маючи власний R&D центр та багаторічний досвід створення інноваційних технологічних розробок
              в харчовій галузі, створили та запатентували новий продукт - кавове борошно (COFFEE FLOUR), інноваційний
              харчовий продукт, який змінює традиційні уявлення про каву.
            </p>
          </div>
          <img class="about-context__img" src="~/assets/images/coffe-shop.png" alt="coffee-shop">
        </div>
        <div class="about-description">
          <h3 class="about-description__title">Наша історія</h3>
          <p class="about-description__text">Все почалося з простої ідеї — знайти нове життя для кавових зерен.
            Все почалося з ідеї — знайти нове життя для відпрацьованої кавової гущі (SCG).
            Захоплені пристрастю до кави та інновацій, ми провели низку науково-технічних досліджень, розробили та
            запатентували унікальну технологію біопереробки відпрацьованої кавової гущі (SCG), яка перетворює її на
            корисне і смачне кавове борошно (COFFEE FLOUR). 
          </p>
          <h3 class="about-description__title">Наша історія</h3>
          <p class="about-description__text">
            Покращення якості навколишнього середовища шляхом зменшення відходів та створення екологічних та корисних
            для здоров’я продуктів харчування.</p>
        </div>

      </article>
      <article class="about-right">
        <img class="about-right__first" src="~/assets/images/coffe-shop.png" alt="coffee-shop">
        <img class="about-right__last" src="~/assets/images/sack.png" alt="sack">
      </article>
    </div>
  </section>
</template>

<script>
import {SECTION_ANCHORS} from '~/constants/NavigationList.js'

export default {
  name: "AboutUsSection",
  computed: {
    SECTION_ANCHORS() {
      return SECTION_ANCHORS
    }
  },
}
</script>

<style scoped lang="scss">
.about-wrapper{
  overflow: visible;
  z-index: 1;
}
.about {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: $xl) {
    flex-direction: column;
  }

  &__title {
    font-size: 25px;
    font-weight: 500;
    line-height: 30.48px;
    letter-spacing: 0.05em;
    text-align: left;
    color: $primary;
    text-transform: uppercase;
  }

  &__info {

  }
}

.about-context {
  display: flex;
  gap: 30px;

  &__text {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    color: $primary;
  }
  &__img{
    object-fit: contain;
    object-position: top;
    @media (max-width: $md) {
      display: none;
    }
  }
}

.about-description {
  transform: translateY(-22px);

  &__title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color:$primary;


  }

  &__text {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    color: $primary;
  }
}
.about-right{
  display: flex;
  @media (max-width: $md) {
    height: 300px;
  }
  &__first{
    display: none;
    @media (max-width: $md) {
      display: block;
      width: 100%;
      max-width: 180px;
      object-fit: contain;
      object-position: top;
    }
  }
  &__last{
    @media (max-width: $md) {
      width: 100%;
      max-width: 180px;
      object-fit: contain;
      object-position: bottom;
    }

  }

}
</style>