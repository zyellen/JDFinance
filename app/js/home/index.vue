<template lang="html">
    <div>
      <Heador/>
      <Hslider/>
      <Novice/>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Hslider from './hslider.vue'
import Novice from './novice.vue'
export default {
  components: {
    Heador,
   Hslider,
   Novice
  }
}
</script>

<style lang="scss">
 
</style>
