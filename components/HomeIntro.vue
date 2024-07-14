<template>
  <section id="home-intro" class="home-intro">
    <div class="container">
      <div class="intro-context">
        <div class="intro-context__inner">
          <LogoSvg class="intro-context__logo"/>
          <MobileLogoSvg class="intro-context__mobile-logo"/>
          <!--          <h1 class="home-intro__title">-->
          <!--            FOODTEMPLUM-->
          <!--          </h1>-->
          <p class="home-intro__description">
            Food that inspires
            <!--            <arrow-button>Залишити заявку</arrow-button>-->
          </p>
        </div>
      </div>
    </div>
    <div class="social-media">
      <div class="social-media__context">
        <span class="social-media__text">
        Ми в соцмережах</span>
        <span class="social-media__line">

        </span>

      </div>
      <div class="social-media-link-list">
        <!--        <YouTubeSvg/>-->
        <a href="https://www.instagram.com/foodtemplum?igsh=MXE4NTV0NnlucWd4dQ==" target="_blank">
          <InstagranSvg/>
        </a>
        <a href="" target="_blank">
          <TelegramSvg/>
        </a>
      </div>
    </div>
    <div class="home-intro-background">

    </div>
  </section>
</template>
<script>
import ArrowButton from "~/components/arrow-button.vue";
import YouTubeSvg from "~/components/svg/YouTubeSvg.vue";
import TelegramSvg from "~/components/svg/TelegramSvg.vue";
import InstagranSvg from "~/components/svg/InstagranSvg.vue";
import LogoSvg from "~/components/svg/LogoSvg.vue";
import MobileLogoSvg from "~/components/svg/MobileLogoSvg.vue";

export default {
  name: 'HomeIntro',
  components: {ArrowButton, InstagranSvg, YouTubeSvg, TelegramSvg, LogoSvg, MobileLogoSvg},

}
</script>

<style lang="scss" scoped>
.card-wrapper {
  margin-top: 100px;
  padding: 15px;
  @media (max-width: $md) {
    margin-top: 54px;
  }
}

.intro-context {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &__logo {
    width: 100%;
    object-fit: cover;
    @media (max-width: $sm) {
      display: none;
    }
  }

  &__mobile-logo {
    width: 100%;
    object-fit: cover;
    display: none;
    @media (max-width: $sm) {
      display: block;
    }
  }

  &__inner {
    max-width: 50%;
  }
}

.home-intro {
  min-height: 100vh;
  color: $white;
  padding-top: 140px;

  @media (min-width: $lg) {
    padding-top: 220px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .container {
    display: flex;
    align-items: center;
    min-height: 100%;
  }

  &__title {
    font-weight: bold;
    font-size: 40px;
    text-align: start;

    @media (min-width: $sm) {
      font-size: 60px;
      margin-bottom: 10px;
      text-align: center;
      max-width: 550px;
      line-height: 72px;
    }
  }

  &__description {
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-align: left;
    margin-top: 20px;
    @media (max-width: $sm) {
      margin-top: 10px;
    }
  }

  .btn {
    margin: 0 auto;
    @media (max-width: $sm) {
      width: 100%;
      padding: 14px;
    }
  }

  &-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    background-image: url("assets/images/intro.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;

    @media (min-width: $lg) {
      background-attachment: fixed;
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: rgba(#000, 0.35);
      z-index: 5;
    }

  }
}

.social-media {
  position: absolute;
  top: 15vh;
  left: 70px;
  //width: 100%;
  height: 100%;
  z-index: 8;
  @media (max-width: $sm) {
    left: 32px;
    top: 42px;
  }


  &__context {
    display: flex;
    flex-direction: column;
  }

  &__text {
    color: rgba(255, 255, 255, 0.59);
    height: 154px;
    transform: rotate(-90deg);
  }

  &__line {
    margin-top: 15px;
    height: 25vh;
    max-width: 1px;
    background: rgba(255, 255, 255, 0.59);
  }
}

.social-media-link-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 35px;
  margin-left: -10px;

  svg {
    border-radius: 10px;
    transition: box-shadow 0.3s ease-in-out;
   &:hover{
     box-shadow:-2px 2px 17px 2px $white;
   }
  }

  a {
    color: $white;
  }
}
</style>