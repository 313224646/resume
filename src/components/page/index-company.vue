<template>
  <div class="component">
    <index-title title="工作经历"></index-title>
    <van-steps direction="vertical" :active="-1">
      <van-step v-for="(item, index) in company" :key="index">
        <div class="name">{{item.name}}</div>
        <p>{{item.startTime}} —— {{item.endTime}}</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
import { Step, Steps } from 'vant'
export default {
  name: 'index-company',
  components: {
    [Steps.name]: Steps,
    [Step.name]: Step,
    'index-title': () => import('@comp/index-title')
  },
  props: {
    company: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
}
</script>

<style scoped lang="stylus">
.component
  background-color #fff
  border-radius 6px
  padding 40px 0 10px
  position: relative;
.name
  color #333333
  margin-bottom 6px
</style>