<template>
<div> 
<home-header></home-header>
<home-swiper></home-swiper>
<home-icon></home-icon>
<home-recommend></home-recommend>
<home-weekend></home-weekend>
 </div>
   
</template>

<script>
import HomeHeader from './subcomponents/Header'
import HomeSwiper from './subcomponents/Swiper'
import HomeIcon from './subcomponents/Icon'
import HomeRecommend from './subcomponents/recommend'
import HomeWeekend from './subcomponents/Weenkend'
export default {
    name:'home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcon,
        HomeRecommend,
        HomeWeekend
        }
}
</script>

<style scoped>

</style>

