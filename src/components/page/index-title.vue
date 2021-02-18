<template>
  <div class="title">{{title}}</div>
</template>

<script>
export default {
  name: 'index-title',
  props: {
    title: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped lang="stylus">
.title
  position: absolute;
  top 10px
  left -10px
  background: #5a78ff
  color #ffffff
  font-size 14px
  padding 6px 20px
  &:after
    content ''
    position: absolute;
    left 2px
    bottom -4px
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 12px solid #5a78ff;
    transform: rotate(28deg);
</style>