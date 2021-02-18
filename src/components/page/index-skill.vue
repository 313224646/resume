<template>
  <div class="component">
    <index-title title="技能分布"></index-title>
    <canvas id="container"></canvas>
  </div>
</template>

<script>
import F2 from '@antv/f2'

export default {
  name: 'index-skill',
  components: {
    'index-title': () => import('@comp/index-title')
  },
  props: {
    skill: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    createChart () {
      const skill = this.skill
      const chart = new F2.Chart({
        id: 'container',
        pixelRatio: window.devicePixelRatio,
        padding: ['auto', 30, 50, 'auto']
      })
      chart.axis('sales', {
        label: (text) => {
          return {
            text: text + '%'
          }
        }
      })
      chart.source(skill, {
        sales: {
          tickCount: 5
        }
      })
      chart.coord({
        transposed: true
      })
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items
          items[0].name = null
          items[0].name = items[0].title
          items[0].value = items[0].value + '%'
        },
        xTip (val) {
          return {
            val: val + '%'
          };
        }
      })
      chart.interval().position('skill*sales')
      chart.render()
    }
  },
  mounted () {
    this.createChart()
  }
}



</script>

<style scoped lang="stylus">
.component
  border-radius 6px
  padding 20px 0 0 0
  position: relative;
  background-color: #fff;
#container
  width 100%
  min-height 280px
  background-color #fff
</style>
