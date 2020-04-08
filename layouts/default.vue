<template>
  <div id="page-wrapper">
    <div id="page-wrapper-inner" class="relative">             
      <MainNav/>
      <nuxt />
      <Footer/>
    </div>
  </div>
</template>

<script>
import MainNav from '~/components/MainNav.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {            
    MainNav,
    Footer
  }
}
</script>