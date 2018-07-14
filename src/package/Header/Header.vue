<template>
  <div :class="wrapCls">
    <div :class="`${prefixCls}--left`" v-finger:tap="click">
      <slot name="left">
        <span v-if="back" v-finger:tap="toBack">
          <cb-icon :name="leftIcon?leftIcon:'icon-return'"></cb-icon>
        </span>
        <span v-else>
          <cb-icon :name="leftIcon"></cb-icon>
        </span>
      </slot>
    </div>
    <div :class="`${prefixCls}--title`">
      <slot></slot>
    </div>
    <div :class="`${prefixCls}--right`">
      <slot name="right">
        <cb-icon v-if="rightIcon" :name="rightIcon"></cb-icon>
      </slot>
    </div>
  </div>
</template>
<script>
import { oneOf } from '../../utils'
import Icon from '../Icon/Icon'
const prefixCls = 'cb-header'
export default {
  name: 'Header',
  components: {
    Icon
  },
  props: {
    mode: {
      validator(value) {
        return oneOf(value, ['dark', 'light'])
      },
      default: 'dark'
    },
    leftIcon: String,
    rightIcon: String,
    left: {
      type: String
    },
    onLeftClick: {
      type: Function
    },
    back: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      prefixCls: prefixCls
      // hasIcon: false
    }
  },
  computed: {
    wrapCls() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}--fixed`]: this.fixed,
        [`${prefixCls}--dark`]: this.mode === 'dark',
        [`${prefixCls}--light`]: this.mode === 'light'
      }
    }
  },
  methods: {
    click(e) {
      if (this.onLeftClick) {
        this.onLeftClick(e)
      }
    },
    toBack(e) {
      if (this.onLeftClick) return
      if (this.$router) {
        this.$router.back()
      }
    }
  },
  mounted() {
    // this.hasIcon = this.$slots.icon !== undefined
  }
}
</script>
<style lang="less">
@import '../style/mixins';
.cb-header {
  display: flex;
  align-items: center;
  height: 45px;
  background-color: #108ee9;
  color: #fff;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  &--fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  &--left,
  &--title,
  &--right {
    flex: 0.5;
    height: 100%;
    line-height: 45px;
    align-items: center;
    white-space: nowrap;
    .icon {
      font-size: 24px;
      color: #fff;
    }
  }
  &--left {
    padding-left: 10px;
    text-align: left;
    display: flex;
    align-items: center;
    height: 100%;
    vertical-align: top;
  }
  &--left-icon {
    margin-right: 5px;
    display: inherit;
  }
  &--title {
    flex: 1;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    .ellipsis-1;
  }
  &--right {
    justify-content: flex-end;
    font-size: 16px;
    padding-right: 10px;
    text-align: right;
  }
  &--light {
    background-color: #fff;
    color: #108ee9;
    .icon {
      font-size: 24px;
      color: #000 !important;
    }
  }
  &--light &--title {
    color: #000;
  }
}
</style>
