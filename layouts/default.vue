<template>
  <div id="page-wrapper">
    <div id="page-wrapper-inner" class="relative">             
      <nuxt />
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
export default {
  components: {            
    Footer
  }
}
</script>