<template>
  <div class="component">
    <van-steps direction="vertical" :active="-1">
      <van-step>
        <div>化州市第二中学</div>
        <p>2011-09-01 —— 2014-06-08</p>
      </van-step>
      <van-step>
        <div>广东轻工职业技术学院（肆业）</div>
        <p>2014-09-01 —— 2017-06-08</p>
      </van-step>
      <van-step>
        <div>自考本科（深圳大学）</div>
        <p>2019-07-01 —— 至今</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
import { Step, Steps } from 'vant'
export default {
  name: 'index-education',
  components: {
    [Steps.name]: Steps,
    [Step.name]: Step
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
  padding 10px 0
</style>