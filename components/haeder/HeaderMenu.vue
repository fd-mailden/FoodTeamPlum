<template>
  <div class="header-menu" :class="{'is-active': isOpen}">
    <div class="header-menu-content">
      <button class="burger-menu" @click="closeMenu">
        <span class="line" :class="{'line--active': isOpen}"></span>
        <span class="line" :class="{'line--active': isOpen}"></span>
        <span class="line" :class="{'line--active': isOpen}"></span>
      </button>
      <MenuLogoSvg class="logo"/>
      <header-nav :nav-list="navList" @onClickLink="closeMenu"/>

      <div class="social-media">
        <a href="" target="_blank">
          <TelegramSvg/>
        </a>
        <!--          <YouTubeSvg/>-->
        <a href="https://www.instagram.com/foodtemplum?igsh=MXE4NTV0NnlucWd4dQ==" target="_blank">
          <InstagranSvg/></a>

      </div>
    </div>
    <div class="header-menu-mask" @click="closeMenu"></div>
  </div>
</template>

<script>
import HeaderNav from "~/components/haeder/HeaderNav.vue";
import MenuLogoSvg from "~/components/svg/MenuLogoSvg.vue";
import TelegramSvg from "~/components/svg/TelegramSvg.vue";
import InstagranSvg from "~/components/svg/InstagranSvg.vue";

export default {
  name: 'HeaderMenu',
  components: {MenuLogoSvg, HeaderNav, InstagranSvg, TelegramSvg},
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    navList: {
      type: Array,
      required: true
    },

  },
  methods: {
    closeMenu() {
      this.$emit('onCloseMenu')
    }
  },
}
</script>

<style lang="scss" scoped>
.header-menu {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  transform: translateX(100%);
  transition: $transition-time-main;
  z-index: 100;

  @media (min-width: $lg) {
    display: none;
  }

  &.is-active {
    transform: translateX(0);

    .header-menu-mask {
      opacity: 1;
      transition: $transition-time-main;
      //transition-delay: $transition-time-main;
      z-index: -10;
    }
  }

  &-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: flex-end;
    background: #50574B;
    z-index: 10;

    ::v-deep {
      color: $white;

      .header-nav {

        &-list {
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          overflow-y: hidden;


          li {
            margin-bottom: 24px;

            &:last-of-type {
              margin-bottom: 0;
            }

            a {
              color: $white;
              font-size: 17px;

              &.nuxt-link-exact-active {
                color: $primary;
              }
            }

            .menu-button {
              color: $white;
              font-size: 1.5rem;

              &__chevron {
                fill: $white;
              }
            }
          }
        }
      }
    }

    .btn-book {
      position: absolute;
      left: 25px;
      bottom: 60px;
    }
  }

  &-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, .5);
    cursor: pointer;
    opacity: 0;
    transition-delay: 0s;
    transition: 0s;
    z-index: 5;
  }
}

.burger-menu {
  margin-bottom: 30px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  z-index: 25;


  &:hover,
  &:focus-visible {
    .line {
      background: $primary;
    }
  }

  .line {
    display: block;
    position: absolute;
    left: 5px;
    width: 20px;
    height: 2px;
    background: $dark;

    border-radius: 3px;
    z-index: 1;
    transition: $transition-time-main;

    &--active {
      background: $white;

    }

    &:nth-child(1) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:nth-child(2) {
      left: -30px;
    }

    &:nth-child(3) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }

  }
}

.logo {
  margin: 0 auto 4rem;
  color: $white;
}

.social-media {
  overflow: visible;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  gap: 28px;
  padding-bottom: 10px;

  a {
    color: $white;

    svg {
      border-radius: 10px;
      transition: box-shadow 0.3s ease-in-out;

      &:hover {
        box-shadow: -2px 2px 17px 2px rgb(255, 253, 252);
      }
    }
  }
}
</style>
