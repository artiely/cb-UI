<template>
  <div :class="wrapCls">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    large: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrapCls() {
      return {
        'cb-badge': true,
        'cb-badge-large': this.large,
        'cb-badge-small': this.small
      }
    }
  }
}
</script>

<style lang="less">
.cb-badge {
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 10px;
  padding: 0 4px;
  background: red;
  color: #fff;
  display: inline-block;
  &.cb-badge-large {
    transform: scale(1.5);
  }
  &.cb-badge-small {
    transform: scale(0.8);
  }
}
</style>
