<template>
  <article class="collaborations container">
    <h2 class="collaborations__title">наукові СПІВРОБІТНИЦТВО</h2>
    <div class="collaborations__inner">
      <div class="collaboration-item" v-for="collaborationItem in collaborationList" :key="collaborationItem.id">
        <component :is="collaborationItem.logo" class="collaboration-item__logo"/>
        <p class="collaboration-item__name">{{ collaborationItem.name }}</p>
      </div>
    </div>
  </article>
</template>
<script>
import LogoNUHTSvg from "~/components/svg/collaboration/LogoNUHTSvg.vue";
import LogoIPRSvg from "~/components/svg/collaboration/LogoIPRSvg.vue";
import
  LogoPDAUSvg from "~/components/svg/collaboration/LogoPDAUSvg.vue";

export default {
  name: "ScientificCollaborations",
  components: {LogoNUHTSvg, LogoPDAUSvg, LogoIPRSvg},
  data() {
    return {
      collaborationList: [
        {
          id: 1,
          logo: LogoNUHTSvg,
          name: "Національний університет харчових технологій"
        },
        {
          id: 2,
          logo: LogoIPRSvg,
          name: "Інститут продовольчих ресурсів НААН України"
        },
        {
          id: 3,
          logo: LogoPDAUSvg,
          name: "Полтавський державний аграрний університет"
        },
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.collaborations {
  margin-top: 100px;

  &__inner {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    justify-content: space-between;
    @media (max-width: $md) {
      flex-wrap: wrap;
      justify-content: center;
    }

  }

  &__title {
    margin-bottom: 40px;
    font-size: 25px;
    font-weight: 500;
    line-height: 30.48px;
    letter-spacing: 0.05em;
    color:$primary;
    text-transform: uppercase;
  }

}

.collaboration-item {
  text-align: center;
  max-width: 328px;

  &__logo {
    margin-bottom: 15px;
  }

  &__name {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: $primary;

  }
}
</style>