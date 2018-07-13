
<template>
  <div>
    <div v-for="(item,index) in items" :key="index" :style="{
      width:width,
      display:'inline-block',
    }">
      <div :class="{[`${prefixCls}-border-right`]:(index+1)%col!==0 && divider}">
        <div :class="{[`${prefixCls}-border-bottom`]:divider}">
          <div :class="{[`${prefixCls}-border-top`]:index<col && divider }">
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
    width() {
      return `${100 / this.col}%`
    },
    border() {
      return `1px sloid`
    },
    row() {
      return Math.floor(this.items.length / this.col)
    }
  }
}
</script>
<style lang="less">
@import '../style/mixins';
.cb-grid-border-right {
  .divider(right);
}
.cb-grid-border-bottom {
  .divider(bottom);
}
.cb-grid-border-top {
  .divider(top);
}
</style>
