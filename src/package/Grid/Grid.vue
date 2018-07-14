
<template>
  <div>
    <div v-for="(item,index) in items" :key="index" :style="itemStyle">
      <div :class="{[`${prefixCls}--border-right`]:(index+1)%col!==0 && divider}">
        <div :class="{[`${prefixCls}--border-bottom`]:divider}">
          <div :class="{[`${prefixCls}--border-top`]:index<col && divider }">
            <slot :item="item"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = 'cb-grid'
export default {
  name: 'Grid',
  props: {
    items: Array,
    col: {
      type: Number,
      default: 3
    },
    divider: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  computed: {
    itemStyle() {
      return {
        width: `${100 / this.col}%`,
        display: 'inline-block'
      }
    }
  }
}
</script>
<style lang="less">
@import '../style/mixins';
.cb-grid {
  &--border-right {
    .divider(right);
  }
  &--border-bottom {
    .divider(bottom);
  }
  &--border-top {
    .divider(top);
  }
}
</style>
