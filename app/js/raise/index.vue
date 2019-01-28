<template lang="html">
    <div>
      <Heador/>
      <Rslider/>
      <Daily/>
      <In/>
      <More/>
    <Footer cname="mfooter"/>
      <Navbar/>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Rslider from './rslider.vue'
import Daily from './daily.vue'
import In from './in.vue'
import More from './more.vue'
export default {
  components: {
    Heador,
   Rslider,
   In,
   More,
   Footer,
   Navbar,
   Daily
  }
}
</script>

<style lang="scss">
.mfooter{
    ul{
        li:first-child{
            display: none;
        }
    }
}
</style>