<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" >
                <div class="item-img-wrap">
                <img class="item-img" src="https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg" alt="">
                </div>
                <div class="item-info">
                <p class="item-title">深圳小梅沙</p>
               
                <p class="item-desc">深圳小梅沙海海海洋公海海洋公海洋公园深圳小梅沙海洋公园</p>
                
                </div>
            </li>
            
                <li class="item border-bottom" >
                <div class="item-img-wrap">
                <img class="item-img" src="https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg" alt="">
                </div>
                <div class="item-info">
                <p class="item-title">东部华侨城</p>
               
                <p class="item-desc">深圳小梅沙海海海洋公海海洋公海洋公园深圳小梅沙海洋公园</p>
               
                </div>
            </li>

                <li class="item border-bottom" >
                <div class="item-img-wrap">
                <img class="item-img" src="https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg" alt="">
                </div>
                <div class="item-info">
                <p class="item-title">园博园</p>
               
                <p class="item-desc">深圳小梅沙海海海洋公海海洋公海洋公园深圳小梅沙海洋公园</p>
                
                </div>
            </li>
            
            
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item-img-wrap
   overflow hidden
   height 0
   padding-bottom 33.9%
   .item-img
       width 100%
       
.item-info
       flex 1
       padding .1rem
       min-width 0
       .item-title
          line-height .54rem
          font-size .32rem
          ellipsis()
       .item-desc
           line-height .4rem
           color gray
           ellipsis()
       

</style>
