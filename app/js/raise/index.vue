<template lang="html">
    <div>
      <Heador/>
      <Rslider/>
      <Footer/>
      <Navbar/>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Rslider from './rslider.vue'

export default {
  components: {
    Heador,
   Rslider,
   Footer,
   Navbar
  }
}
</script>

<style lang="scss">
 
</style>