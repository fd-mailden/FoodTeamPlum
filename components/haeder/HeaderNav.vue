<template>
  <nav class="header-nav">
    <ul class="header-nav-list">
      <li v-for="navItem in navList" :key="navItem.id">
        <nuxt-link
            external
            :to="navItem.link"
            @click.native="handleClickLink"
        >
          {{ navItem.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
// defineEmits(['onClickLink'])
export default {
  name: 'HeaderNav',

  props: {
    navList: {
      type: Array,
      required: true
    },

  },
  methods: {
    handleClickLink() {
      this.$emit('onClickLink')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &-list {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 60vh;
    overflow-y: auto;
    font-weight: 400;
    @media (min-width: $lg) {
      overflow-y: visible;
    }

    li {
      margin-right: 0;
      font-weight: 400;
      @media (min-width: $lg) {
        margin-right: 15px;
      }

      @media (min-width: $xl) {
        margin-right: 30px;
      }

      a {
        white-space: nowrap;
        color: $white;
        font-size: 1rem;
        font-weight: 300;

        &:hover {
          font-weight: 500;
        }

        //@media (min-width: $lg) {
        //  font-size: 1.125rem;
        //}
        //
        //@media (min-width: $xl) {
        //  font-size: 1.25rem;
        //}

        &.router-link-active {
          font-weight: bold;
        }
      }

    }
  }
}
</style>
