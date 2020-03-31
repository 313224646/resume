<template>
  <div class="component">
    <img class="avatar" :src="user.avatar" alt="avatar">
    <div class="info">
      <div class="info-item info-item-center">
        <div class="info-item-large">{{user.name}}</div>
        <div class="info-item-normal">{{user.workYears}}年经验</div>
      </div>
      <div class="info-item">
        <div class="info-item-normal">{{user.hometown}}</div>
        <div class="info-item-normal">{{user.age}}岁</div>
        <base-icon icon="icon-nansheng" class="info-marl" size="1.1" />
      </div>
      <div class="info-item">
        <div class="info-item-normal">
          <a href="tel:18620800179" class="info-underline">{{user.phone}}</a>
          （
          <base-icon icon="icon--" size="1.2" />
          <base-icon icon="icon-weixin" class="info-marl" size="1.2" />
          ）
        </div>
      </div>
    </div>
    <base-icon icon="icon-github" class="github" size="1.5" @click.native="githubClickHandle" />
  </div>
</template>

<script>
export default {
  name: 'base-info',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    githubClickHandle () {
      window.open('https://github.com/313224646')
    }
  }
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
  position relative
  top 25px
  transform-origin 0 100%
  transform scale(1.6, 1.6)
  filter brightness(0%)
.info
  padding 16px 6px 16px 20px
  flex auto
  .info-item
    display flex
    align-items center
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
.github
  padding 6px 6px 0 0
</style>