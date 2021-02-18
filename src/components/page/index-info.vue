<template>
  <div class="component">
    <index-title title="基本信息"></index-title>
    <!-- <img class="avatar" :src="user.avatar" alt="avatar"> -->
    <div class="info">
      <div class="info-item info-item-center">
        <div class="info-item-large">{{user.name}}</div>
        <div class="info-item-normal">{{user.workYears}}年前端开发经验</div>
      </div>
      <div class="info-item">
        <div class="info-item-normal">户籍：{{user.hometown}}</div>
        <div class="info-item-normal">年龄：{{user.age}}</div>
        <div class="info-item-normal">性别：{{user.sex}}</div>
        <!-- <base-icon icon="icon-nansheng" class="info-marl" size="1.1" /> -->
      </div>
      <div class="info-item">
        <div class="info-item-normal">
          <base-icon icon="icon--" size="1.2" />
          &
          <base-icon icon="icon-weixin" class="info-marl" size="1.2" />
          :
          <a href="tel:18620800179" class="info-underline">{{user.phone}}</a>
        </div>
      </div>
    </div>
    <div class="mini-pro">
      <base-icon icon="icon-jijin" class="fund" size="1.5" @click.native="fundClickHandle" />
      <base-icon icon="icon-github" class="github" size="1.4" @click.native="githubClickHandle" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-info',
  components: {
    'index-title': () => import('@comp/index-title')
  },
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
    },
    fundClickHandle () {
      this.$router.push('/fund')
    }
  }
}
</script>

<style scoped lang="stylus">
.component
  display: flex;
  background-color #fff
  border-radius 6px
  position: relative;
  padding-top 30px
.avatar
  width 100px
  height 82px
  position relative
  top 25px
  transform-origin 0 100%
  transform scale(1.6, 1.6)
  filter brightness(30%)
.info
  padding 16px 6px 16px 20px
  flex auto
  .info-item
    display flex
    align-items center
    color #333333
  .info-item-center
    align-items flex-end
  .info-item:nth-of-type(n+2)
    margin-top 10px
  .info-item-large
    font-size 18px
    font-weight bold
  .info-item-normal
    font-size 14px
  .info-item-normal:nth-of-type(n+2)
    margin-left 20px
  .info-underline
    color #333333
    text-decoration underline
  .info-marl
    margin-left 2px
.mini-pro
  position: absolute;
  right 6px
  top 10px
  display: flex;
  align-items flex-end
  .github
    margin-left 4px
</style>