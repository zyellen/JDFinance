<template lang="html">
   <section :class="[cname]">
       <swiper :options="options" :not-next-tick="options.notNextTick">
           <swiper-slipe v-for="item in items" :key="item.href">
               <router-link :to="{name:item.href}">
                   <img :src="item.src" alt="">
                </router-link>
           </swiper-slipe>
           <div class="swiper-pagination" v-if="options.pagination"/>
       </swiper>
   </section>
</template>

<script>
import {swiper,swiperSlide} from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
   props: {
       options: {
           type: Object,
           define() {
               return {
                   autoplay: true,
                   loop: true,
                   pagination: {
                       el: ".swiper-pagination",
                   },
                  notNextTick: false,
               }
           },
       },
       items: {
           type: {
               type: Array,
               default() {
                   return []
               },
           },
       },
   }
}
</script>

<style lang="scss">
</style>
