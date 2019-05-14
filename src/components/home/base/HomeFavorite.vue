<template>
    <div class= "HomeFavorite">
        <h3 class="title">猜你喜欢</h3>
        <ul  >
            <li class="item border-bottem" >
                <img  class="item-img" src="http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_200x200_50323152.jpg" alt="">
                <div class= "item-info">
                    <h4>橘子洲</h4>
                    <div class='item-fav-info clearfix'>
                        <p class='item-fav-text'>
                            <i v-for='i in 5' class='iconfont icon-star'></i>
                            <span class='item-fav-star' >
                                <i v-for='i in 4' class='iconfont icon-star'></i>
                            </span>
                        </p>
                        <p class='item-text-right'>
                            <span>2000条评论</span>
                        </p>
                    </div>
                    <div class="item-price">444</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"HomeFavorite",
    props:[
        
    ],
    data(){
        return{}
    }
}
</script>
<style lang='stylus' scoped>
  .border-bottom:before
      border-color:#777
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #ddd
    text-indent: .2rem
    font-size: .32rem
  .item
    display:flex
    height: 2.2rem
    padding:.2rem
    .item-img
      width:2rem
      height:2rem
    .item-info
      flex:1
      padding: .1rem
      margin-left:.1rem
      min-width: 0rem;
      h4
        line-height:.6rem
        font-size:.3rem
      .item-price
        color:#ff8300
        font-size:.3rem
        line-height:.4rem
      .item-fav-info
        line-height:.6rem
        .item-fav-text
          position:relative
          display:inline-block
          float:left
          color:#ccc
          margin-right:.5rem
          .item-fav-star
            overflow:hidden
            position:absolute
            left:0
            top:0
            color:#ffb436
        .item-text-right
          float:left
</style>


