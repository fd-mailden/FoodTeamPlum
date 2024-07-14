<template>

  <home-intro/>
  <home-intro-description :isWindowScrolling="isWindowScrolling"/>
  <about-us-section ref="aboutUsSectionRef"/>

  <div class="products">
    <img src="~/assets/images/bg-product.jpg" alt="products__background" class="products__background">
    <!--{{aboutAsSection}}-->
    <ProductSection/>
    <TeamSection/>
  <!--  </div>-->
  <ScientificCollaborations/>

  </div>
  <BecomePartner/>

  <PartnersLocation/>
  <ContactSection/>

</template>

<script>
import HomeIntro from '~/components/HomeIntro.vue'
import HomeIntroDescription from '~/components/HomeIntroDescription.vue'
import AboutUsSection from "~/components/about/AboutUsSection.vue";
import TeamSection from "~/components/team/TeamSection.vue";
import ProductSection from '~/components/products/ProductsSection.vue'
import ScientificCollaborations from "~/components/ScientificCollaborations.vue";
import BecomePartner from "~/components/partners/BecomePartner.vue";
import PartnersLocation from "~/components/partners/PartnersLocation.vue";
import ContactSection from "~/components/contact/ContactSection.vue";

export default {
  components: {
    HomeIntro,
    HomeIntroDescription,
    AboutUsSection,
    PartnersLocation,
    TeamSection,
    ContactSection,
    ProductSection,
    BecomePartner,
    ScientificCollaborations
  },
  data() {
    return {
      isWindowScrolling: false,
      aboutUsSectionHeight: 400,
    }
  },
  computed: {
    aboutUsSectionHeightClass() {
      return {top: `${this.aboutUsSectionHeight - 100}px`}
    }
  },
  mounted() {
    this.handleWindowScroll()
    this.detectIsWindowScrolling()
    this.getAboutUsSectionHeight()
  },
  unmounted() {
    this.removeWindowScroll()
  },
  methods: {
    detectIsWindowScrolling() {
      this.isWindowScrolling = window.pageYOffset > 0
    },
    handleWindowScroll() {
      window.addEventListener('scroll', this.detectIsWindowScrolling)
    },
    removeWindowScroll() {
      window.removeEventListener('scroll', this.detectIsWindowScrolling)
    },
    getAboutUsSectionHeight() {
      this.$nextTick(() => {
        const aboutUsSection = this.$refs.aboutUsSectionRef;
        console.log(aboutUsSection)
        if (aboutUsSection) {
          this.aboutUsSectionHeight = aboutUsSection.$el.getBoundingClientRect().height;
          console.log('About Us Section Height:', this.aboutUsSectionHeight);
        }
      });
    },
  }
}
</script>

<style scoped lang="scss">
@import "assets/scss/index";

.products {
  position: relative;
  z-index: 0;
  overflow-y: visible;

  &__background {
    position: absolute;
    z-index: -1;
    height: 75%;
    width: 100%;
    top: -100px;
    right: 0;
    object-fit: cover;
    object-position: top;
    @media (max-width: 2000px) {
      width: 100%;
    }
    @media (max-width: 1440px) {
    }
    @media (max-width: $lg) {
      height: 60%;
      object-position: center;
    }
    @media (max-width: $md) {
      height: 40%;
      top: 0;
      width: auto;
    }
    @media (max-width: $md) {
      height: 43%;

    }


  }

}

</style>