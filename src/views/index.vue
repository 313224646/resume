<template>
  <div class="page">
    <index-info :user="user.base" />
    <index-education :education="user.education" />
    <index-company :company="user.company" />
    <index-project :project="user.project" />
  </div>
</template>

<script>
import USER from '@/assets/json/user'
export default {
  name: 'index',
  components: {
    'index-info': () => import('@comp/index-info'),
    'index-education': () => import('@comp/index-education'),
    'index-company': () => import('@comp/index-company'),
    'index-project': () => import('@comp/index-project')
  },
  data () {
    return {
      user: USER
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  min-height 100vh
  background-color #F6F6F6
  padding 15px
  & > div:nth-of-type(n+2)
    margin-top 10px 
</style>
