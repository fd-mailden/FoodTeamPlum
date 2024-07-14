<template>
  <app-header :nav-list="navList"/>
  <main class="custom-main container">
    <slot/>
  </main>
  <app-footer :nav-list="navList"/>
</template>

<style scoped lang="scss">

header{
  background: rgb(84,84,84);
  background: linear-gradient(10deg, rgba(84,84,84,1) 0%, rgba(194,179,151,1) 100%);
  padding: 50px 0 !important;
  @media (max-width: $lg) {
    padding: 20px 0 !important;

  }
}
.custom-main{
  padding-top: 250px;
  @media (max-width: $lg) {
    padding-top: 90px;

  }
}
.app-header--active :deep(span){
  background: $white !important;
}

.app-header--active :deep(a) {
  color: $white !important;
  @media (max-width: $lg) {
    color: $white!important;
  }


}
</style>
<script>
import {defineComponent} from "vue";
import AppFooter from "~/components/footer/AppFooter.vue";
import {navigationList} from "~/constants/NavigationList.js";
import AppHeader from "~/components/haeder/Header.vue";

export default defineComponent({
  components: {AppHeader, AppFooter},
  data() {
    return {
      navList: navigationList(),
    }
  }

})
</script>