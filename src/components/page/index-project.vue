<template>
  <div class="component">
    <van-collapse v-model="activeNames">
      <van-collapse-item 
        v-for="(item, index) in project" 
        :key="index" 
        :title="item.name" 
        :name="item.name">
        <div class="text"><span class="bold">负责模块：</span>所有模块</div>
        <div class="text"><span class="bold">服务端口：</span>{{item.port}}</div>
        <div class="text"><span class="bold">项目周期：</span>{{item.startTime}} — {{item.endTime}}</div>
        <div class="text"><span class="bold">相关技术：</span>{{item.technology}}</div>
        <div class="text"><span class="bold">项目介绍：</span></div>
        <div class="text indent">{{item.introduction}}</div>
        <div class="text" v-if="item.difficulty"><span class="bold">相关难点：</span></div>
        <div class="text indent">{{item.difficulty}}</div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from 'vant'
export default {
  name: 'index-project',
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  props: {
    project: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeNames: ['1', '2']
    }
  },
}
</script>

<style scoped lang="stylus">
.component
  border-radius 6px
  overflow hidden
.indent
  text-indent 4ex 
.text
  color #777777
.bold
  font-weight bold
</style>