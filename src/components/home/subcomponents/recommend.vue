<template>
    <div>
        <div class="recommend-title">猜你喜欢</div>
        <ul>
            <li class="item border-bottom" >
                <img class="item-img" src="https://imgs.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg" alt="">
                <div class="item-info">
                <p class="item-title">深圳小梅沙海洋公园深圳小梅沙海洋公园深圳小梅沙海洋公园</p>
               
                <p class="item-desc">深圳小梅沙海海海洋公海海洋公海洋公园深圳小梅沙海洋公园</p>
                <button class="item-button">查看详情</button>
                </div>
            </li>

            <li class="item border-bottom" >
                <img class="item-img" src="https://imgs.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg" alt="">
                <div class="item-info">
                <p class="item-title">深圳小梅沙海洋公园深圳小梅沙海洋公园深圳小梅沙海洋公园</p>
               
                <p class="item-desc">深圳小梅沙海海海洋公海海洋公海洋公园深圳小梅沙海洋公园</p>
                <button class="item-button">查看详情</button>
                </div>
            </li>

            <li class="item border-bottom" >
                <img class="item-img" src="https://imgs.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg" alt="">
                <div class="item-info">
                <p class="item-title">深圳小梅沙海洋公园深圳小梅沙海洋公园深圳小梅沙海洋公园</p>
               
                <p class="item-desc">深圳小梅沙海海海洋公海海洋公海洋公园深圳小梅沙海洋公园</p>
                <button class="item-button">查看详情</button>
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
.item
   display flex
   height 1.9rem
   overflow hidden
   .item-img
       width 1.7rem
       height 1.7rem
       padding  .1rem
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
       .item-button
          background #ff9300
          padding 0 .2rem
          border-radius .06rem
          margin-top .16rem
          color #fff
          line-height .44rem

</style>
