<template>
<div class="wrapper">
    <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item in swiperlist" :key="item.id">
        <img  class="swiper-img" :src="item.imgurl" alt="">
    </swiper-slide>
   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
  </swiper>
</div>
     
</template>

<script>
export default {
    name:'HomeSwiper',
    data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                 loop:true
                 //循环：真
            },
            swiperlist:[
                {
                    id:'0001',
                    imgurl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/389d0194766566f8f1185aa19b759c25.jpg_750x200_22620261.jpg'
                    },
                {
                    id:'0002',
                    imgurl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/9a58c99c3eb4fbc92f4ac01fd3811047.jpg_750x200_b0a16dc8.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active
     background:white !important
.wrapper
   overflow:hidden
   width:100%
   height:0
   padding-bottom:26.6%
  
  .swiper-img
     width: 100%
</style>
