<template>
<div> 
<home-header></home-header>
<home-swiper></home-swiper>
<home-icon></home-icon>

 </div>
   
</template>

<script>
import HomeHeader from './subcomponents/Header'
import HomeSwiper from './subcomponents/Swiper'
import HomeIcon from './subcomponents/Icon'
export default {
    name:'home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcon

        }
}
</script>

<style scoped>

</style>

