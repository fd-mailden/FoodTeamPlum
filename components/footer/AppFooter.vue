<template>
  <footer class="footer">
    <section class="footer__inner">
      <article class="footer__left">
        <FooterLogoSvg/>
        <div class="social-media">
          <a href="" target="_blank">
            <TelegramSvg/>
          </a>
          <!--          <YouTubeSvg/>-->
          <a href="https://www.instagram.com/foodtemplum?igsh=MXE4NTV0NnlucWd4dQ==" target="_blank">
            <InstagranSvg/></a>

        </div>
      </article>
      <article class="footer__right">
        <nav class="footer-nav">
          <ul class="footer-nav-list">
            <li v-for="navItem in navList" :key="navItem.id">
              <nuxt-link
                  external
                  :to="navItem.link"
              >
                {{ navItem.text }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="policy">
          <nuxt-link
              external
              to="/privacy-policy"
          >
            Політика конфіденційності
          </nuxt-link>
        </div>
      </article>
    </section>
  </footer>
</template>
<script>
import FooterLogoSvg from "~/components/svg/FooterLogoSvg.vue";
import TelegramSvg from "~/components/svg/TelegramSvg.vue";
import InstagranSvg from "~/components/svg/InstagranSvg.vue";
import YouTubeSvg from "~/components/svg/YouTubeSvg.vue";

export default {
  name: "AppFooter",
  components: {YouTubeSvg, InstagranSvg, TelegramSvg, FooterLogoSvg},
  props: {
    navList: {
      type: Array,
      required: false,
    },
  },

}
</script>
<style scoped lang="scss">
.footer {
  width: 100%;
  padding: 20px 40px 50px;
  background: linear-gradient(194.89deg, #E9D3A7 15.34%, #C0B08D 227.57%);

  &__inner {
    overflow: visible;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: $md) {
      flex-direction: column;
      align-items: center;
      gap: 20px
    }
  }
  &__left{
    overflow: visible;
    color: rgba(89, 61, 43, 1);

  }
  &__right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    @media (max-width: $md) {
      align-items: center;
      gap: 20px
    }

  }
}

.social-media {
  overflow: visible;
  margin-top: 26px;
  display: flex;
  justify-content: center;
  gap: 28px;
  padding-bottom: 10px;

  a {
    color: rgba(89, 61, 43, 1);

    svg {
      border-radius: 10px;
      transition: box-shadow 0.3s ease-in-out;

      &:hover {
        box-shadow: -2px 2px 17px 2px rgba(89, 61, 43, 1);
      }
    }
  }
}

.footer-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &-list {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: 400;
    gap: 30px;

    @media (max-width: $md) {
      flex-wrap: wrap;
    }
    //@media (min-width: $lg) {
    //  overflow-y: visible;
    //
    //}

    li {
      margin-right: 0;
      font-weight: 400;


      a {
        white-space: nowrap;
        color: rgba(89, 61, 43, 1);
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

.policy {
  //margin-top: 100px;
  a {
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: rgba(104, 66, 39, 1);
    opacity: 0.7;
    margin-top: 100px;
  }

}

</style>