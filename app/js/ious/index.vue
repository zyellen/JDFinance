<template lang="html">
    <div>
      <Heador/>
        <Islider/>
        <More/>
        <Welfare/>
      <Footer/>
      <Navbar/>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Islider from './islider.vue'
import More from './more.vue'
import Welfare from './welfare.vue'
export default {
  components: {
    Heador,
   Islider,
   More,
   Footer,
   Navbar,
   Welfare
  }
}
</script>

<style lang="scss">
</style>
