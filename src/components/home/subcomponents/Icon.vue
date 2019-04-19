<template>
    <div class="icons">
        <swiper>

        <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
            <img class="iconii" :src="item.imgurl" alt="">
            </div>
            <p class="icondes">{{ item.desc }}</p>
        </div>
       </swiper-slide>

      
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    data() {
        return {
            iconList:[
                {
                    id:'0001',
                    imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'景点门票景点门票景点门票'
                },
                {
                    id:'0002',
                    imgurl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png',
                    desc:'广州融创'
                },
                {
                    id:'0003',
                    imgurl:'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    desc:'深圳必游'
                },
                {
                    id:'0004',
                    imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                    desc:'海洋馆'
                },
                {
                    id:'0005',
                    imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc:'动植物园'
                },
                {
                    id:'0006',
                    imgurl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cba147cf6cfcea7109d0bff6aac6f626.png',
                    desc:'深圳动物园'
                },
                {
                    id:'0007',
                    imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png',
                    desc:'世界之窗'
                },
                {
                    id:'0008',
                    imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/e7/d108f17143b40f02.png',
                    desc:'4月特惠'
                },
                {
                    id:'0009',
                    imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                    desc:'东部华侨城'
                }
            ]
        }
    },
    computed:{
        pages(){
            const pages = []
            this.iconList.forEach((item,index)=>{
               const page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)

            })
            return pages
        }
    }
}
</script>

 <style lang="stylus" scoped>
 @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
        
    .icon
      position relative
      overflow hidden
      float left 
      width 25% 
      height 0
      padding-bottom 21.3%
    
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom 0.44rem
        
        box-sizing border-border-box
        padding .1rem
        .iconii 
            height 100%
            display block
            margin 0 auto
      .icondes
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            color #333
            text-align center
            ellipsis()
                        



</style>
