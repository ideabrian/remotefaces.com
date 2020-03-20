<template>
  <div id="page-wrapper">
    <!-- <Alert/>    -->
    <!-- <Listen/>  -->
    <div id="page-wrapper-inner" class="relative">      
      <MainNav/>   
      <nuxt />
      <Footer/>
    </div>
  </div>
</template>

<script>
import Alert from '~/components/Alert.vue'
import Listen from '~/components/Listen.vue';
import MainNav from '~/components/MainNav.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {            
    Alert,
    Listen,
    MainNav,
    Footer
  }
}
</script>