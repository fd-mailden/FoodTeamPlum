<template>
  <header class="app-header" :class="{'app-header--active': isWindowScrolling}">
    <div class="container app-header__inner">
      <burger-menu
          class="d-lg-none"
          :is-active="isWindowScrolling"
          :class="{ 'is-active': isActiveMenu }"
          @onClickLink="switchShowedMenu"
      />
      <div class="row justify-content-center align-items-center">
        <header-nav
            class="d-none d-lg-block"
            :nav-list="navList"
            @onClickLink="switchShowedMenu"
        />
      </div>
    </div>
    <header-menu
        @onCloseMenu="switchShowedMenu"
        :is-open="isActiveMenu"
        :nav-list="navList"/>
  </header>
</template>

<script>
import HeaderNav from "~/components/haeder/HeaderNav.vue";
import BurgerMenu from '~/components/haeder/BurgerMenu.vue'
import HeaderMenu from "~/components/haeder/HeaderMenu.vue";

export default {
  name: 'AppHeader',
  components: {HeaderNav, BurgerMenu, HeaderMenu},
  data() {
    return {
      headerData: {},
      isActiveMenu: false,
      isWindowScrolling: false,
    }
  },
  props: {
    navList: {
      type: Array,
      required: false,
    },
  },
  mounted() {
    this.handleWindowScroll()
    this.detectIsWindowScrolling()
  },
  unmounted() {
    this.removeWindowScroll()
  },
  methods: {
    switchShowedMenu() {
      this.isActiveMenu = !this.isActiveMenu
    },
    detectIsWindowScrolling() {
      this.isWindowScrolling = !!window.pageYOffset > 0
    },
    handleWindowScroll() {
      window.addEventListener('scroll', this.detectIsWindowScrolling)
    },
    removeWindowScroll() {
      window.removeEventListener('scroll', this.detectIsWindowScrolling)
    },
  },
}
</script>

<style scoped lang="scss">
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: background-color 0.3s ease-in-out, padding 0.3s ease-in-out;
  padding: 50px 0 20px;

  &__inner {

    @media (max-width: $lg) {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: $lg) {
    padding: 15px 0;

  }

  &--active {
    background-color: $white;
    color: $primary !important;

    :deep(a) {
      color: $dark !important;
    }

    @media (min-width: $sm) {
      padding: 25px 0;
    }
    -webkit-box-shadow: -2px -11px 27px 0px rgba(66, 68, 90, 0.68);
    -moz-box-shadow: -2px -11px 27px 0px rgba(66, 68, 90, 0.68);
    box-shadow: -2px -11px 27px 0px rgba(66, 68, 90, 0.68);
  }

  @media (max-width: $lg) {

    &--active :deep(a) {
      color: $white !important;
    }

  }
}
</style>