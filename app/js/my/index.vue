<template lang="html">
    <div>
        <New/>
      <Navbar/>
    </div>
</template>

<script>
import Navbar from '../public/navbar.vue'
import New from './new.vue'
export default {
  components: {
   New,
   Navbar,

  }
}
</script>

<style lang="scss">

</style>