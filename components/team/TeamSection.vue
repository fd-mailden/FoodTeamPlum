<template>
  <section :id="SECTION_ANCHORS.team" class="team container">
    <h2 class="team__title">КОМАНДА</h2>
    <UITitle>foodtemplum</UITitle>
    <article class="team-made-row row">
      <TeaMadeCard/>
      <TeaMadeCard/>
      <TeaMadeCard/>
      <TeaMadeCard/>
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
  components: {RegisteredSvg, TeaMadeCard,UITitle},
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