<template>
<div> 
<home-header :city="city"></home-header>
<home-swiper :list="swiperList"></home-swiper>
<home-icon :list="iconList"></home-icon>
<home-recommend :list="recommendList"></home-recommend>
<home-weekend :list="weekendList"></home-weekend>
 </div>
   
</template>

<script>
import HomeHeader from './subcomponents/Header'
import HomeSwiper from './subcomponents/Swiper'
import HomeIcon from './subcomponents/Icon'
import HomeRecommend from './subcomponents/recommend'
import HomeWeekend from './subcomponents/Weenkend'
import axios from 'axios'
export default {
    name:'home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcon,
        HomeRecommend,
        HomeWeekend
        },
        data(){
            return{
              city:'',
              swiperList:[],
              iconList: [],
              recommendList: [],
              weekendList: []

            }
        },
        methods:{
            getHomeInfo () {
              axios.get('/api/index.json')
              .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    this.city = data.city
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
            }
        },
    mounted(){
         this.getHomeInfo ()
         
        }
}
</script>

<style scoped>

</style>

