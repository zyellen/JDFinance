<template lang="html">
    <div>
      <Heador/>
        <Mslider/>
       <Ada/>
       <Money/>
       <Adb/>
       <Finance/>
       <Adc/>
      <Footer cname="mfooter"/>
      <Navbar/>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Mslider from './mslider.vue'
import Ada from './ada.vue'
import Money from './money.vue'
import Adb from './adb.vue'
import Finance from './finance.vue'
import Adc from './adc.vue'

export default {
  components: {
    Heador,
   Mslider,
   Footer,
   Navbar,
   Ada,
   Money,
   Adb,
   Finance,
   Adc
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
