<template>
  <div class="component">
    <img class="avatar" src="@i/avatar.png" alt="avatar">
    <div class="info">
      <div class="info-item info-item-center">
        <div class="info-item-large">吴上海</div>
      </div>
      <div class="info-item">
        <div class="info-item-normal">广东</div>
        <div class="info-item-normal">25岁</div>
        <base-icon icon="icon-nanhai" class="info-marl" size="1.1" />
      </div>
      <div class="info-item">
        <div class="info-item-normal">
          <a href="tel:18620800179" class="info-underline">18620800179</a>
          （
          <base-icon icon="icon--" size="1.2" />
          <base-icon icon="icon-weixin" class="info-marl" size="1.2" />
          ）
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-info',
  components: {},
  data () {
    return {}
  },
}
</script>

<style scoped lang="stylus">
.component
  display: flex;
  background-color #fff
  border-radius 6px
.avatar
  width 100px
  height 82px
  transform scale(1.5, 1.5) translate(17px, 3px)
.info
  padding 16px 6px 16px 20px
  flex auto
  .info-item
    display flex
    color #333333
  .info-item-center
    align-items center
  .info-item:nth-of-type(n+2)
    margin-top 10px
  .info-item-large
    font-size 18px
    font-weight bold
  .info-item-normal
    font-size 14px
  .info-item-normal:nth-of-type(n+2)
    margin-left 10px
  .info-underline
    color #333333
    text-decoration underline
  .info-marl
    margin-left 6px
</style>