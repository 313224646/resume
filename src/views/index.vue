<template>
  <div class="page">
    <index-info />
    <index-education />
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {
    'index-info': () => import('@comp/index-info'),
    'index-education': () => import('@comp/index-education')
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
