<template lang="html">
    <div>
      <Heador/>
      <Hslider/>
      <Novice/>
      <Borrow/>
      <Money/>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Hslider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
export default {
  components: {
    Heador,
   Hslider,
   Novice,
   Borrow,
   Money
  }
}
</script>

<style lang="scss">
 
</style>
