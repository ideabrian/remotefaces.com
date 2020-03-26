<template>
  <div id="page-wrapper">
    <WatchMe id="watch-me" v-if="false && $store.getters.isLoggedIn"/>
    <div id="page-wrapper-inner" class="relative">            
      <MainNav/>   
      <nuxt />
      <Footer/>
    </div>
  </div>
</template>

<script>
import MainNav from '~/components/MainNav.vue'
import WatchMe from '~/components/WatchMe.vue'
import Footer from '~/components/Footer.vue'
export default {
  middleware: 'joinRoom',
  components: {            
    MainNav,
    WatchMe,
    Footer
  }
}
</script>