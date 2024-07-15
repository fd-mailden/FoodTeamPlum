<template>
  <section :id="SECTION_ANCHORS.team" class="team container">
    <h2 class="team__title">КОМАНДА</h2>
    <UITitle>foodtemplum</UITitle>
    <article class="team-made-row row">
      <TeaMadeCard v-for="teamed of team"
                   :key="teamed.id"
                   :name="teamed.name"
                   :position="teamed.position"
                   :image="teamed.image"
      />
      <!--      <TeaMadeCard/>-->
      <!--      <TeaMadeCard/>-->
      <!--      <TeaMadeCard/>-->
    </article>
  </section>
</template>
<script>
import {SECTION_ANCHORS} from "~/constants/NavigationList.js";
import RegisteredSvg from "~/components/svg/RegisteredSvg.vue";
import TeaMadeCard from "~/components/team/TeaMaitCard.vue";
import UITitle from "~/components/Title.vue";

export default {
  name: "TeamSection",
  components: {RegisteredSvg, TeaMadeCard, UITitle},
  data() {
    return {
      team: [
        {
          id: 1,
          name: 'Сукманов Валерій Олександрович',
          position: 'Науковий керівник проекту',
          image: '/member-1.jpg'
        },
        {
          id: 2,
          name: 'Іваненко Олександр Олексійович ',
          position: 'Засновник та генеральний директор ',
          image: '/partner2.jpg'
        },
        {
          id: 3,
          name: 'Животченко Сергій Леонідович',
          position: 'Співзасновник',
          image: '/partner3.jpg'
        },
        {
          id: 4,
          name: 'Лебединська Наталья Іванівна',
          position: 'Менеджер по роботі з клієнтами',
          image: '/partner4.jpg'
        },
      ]
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
.team {
  position: relative;
  color: $primary;
  margin-top: 150px;

  &__title {
    font-size: 25px;
    font-weight: 500;
    line-height: 30.48px;
    letter-spacing: 0.05em;
    text-align: left;
    margin-bottom: 20px;

  }


}

.team-made-row {
  overflow: visible;
  background: transparent;
  //display: flex;
  //align-items: flex-start;
  //justify-content: center;
  //gap: 26px;
  //flex-wrap: wrap;

}
</style>