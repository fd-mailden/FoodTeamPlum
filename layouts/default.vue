<template>
  <div class="host">
    <app-header :nav-list="navList"/>
    <main>
      <nuxt v-if="!$slots.default" />
      <slot />
    </main>
    <app-footer :nav-list="navList"/>
<!--    <app-footer />-->
  </div>
  <portal-target name="modals"></portal-target>
  <portal-target name="partners"></portal-target>

</template>
<script>

import AppHeader from '~/components/haeder/Header.vue'
import {navigationList} from "~/constants/NavigationList.js";
import AppFooter from "~/components/footer/AppFooter.vue";
// import {portalTarget} from "portal-target";
// import portalTarget
export default {
  name: 'Default',
  components: {AppFooter, AppHeader },
  data() {
    return {
      navList: navigationList(),
    }
  },

}
</script>