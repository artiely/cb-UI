<template>
  <span :class="badgeCls">
    <slot></slot>
    <sup :class="supCls" :style="badgeStyle" v-if="dot || text">{{ currentText }}</sup>
  </span>
</template>
<script>
const prefixCls = 'cb-badge'
export default {
  name: 'Badge',
  props: {
    size: [Number, String],
    text: {
      type: [String, Number]
    },
    corner: {
      type: Boolean,
      default: false
    },
    dot: {
      type: Boolean,
      default: false
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    outline: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    color: String,
    styles: {
      type: Object
    },
    badgeClass: [String, Object, Array]
  },
  data() {
    return {
      children: null
    }
  },
  computed: {
    currentText() {
      if (this.dot) {
        return null
      } else if (this.text > this.overflowCount) {
        return this.overflowCount + '+'
      } else {
        return this.text
      }
    },
    badgeStyle() {
      let _height = null
      let _fontSize = null
      let _padding = null
      let _borderRadius = null
      if (this.size) {
        _height = this.size + 'px'
        _fontSize = this.size / 1.2 + 'px'
        _borderRadius = this.size / 2 + 'px'
        _padding = Math.ceil(this.size / 3.6) + 'px'
      }
      return {
        ...this.styles,
        height: _height,
        lineHeight: _height,
        fontSize: _fontSize,
        borderRadius: this.flat ? null : _borderRadius,
        paddingLeft: _padding,
        paddingRight: _padding,
        border: this.outline ? `1px solid ${this.color}` : null,
        color: this.outline ? this.color : '#fff',
        backgroundColor: this.outline ? null : this.color
      }
    },
    badgeCls() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}--not-a-wrapper`]: !this.children,
        [`${prefixCls}--corner-wrapper`]: this.corner
      }
    },
    supCls() {
      return {
        [`${prefixCls}--dot`]: this.badgeClass ? null : this.dot,
        [`${prefixCls}--text`]: this.badgeClass
          ? null
          : !this.dot && !this.corner,
        [`${prefixCls}--corner`]: this.badgeClass ? null : this.corner,
        [`${prefixCls}--flat`]: this.badgeClass ? null : this.flat,
        [`${prefixCls}--outline`]: this.badgeClass ? null : this.outline,
        [this.badgeClass]: true
      }
    }
  },
  mounted() {
    this.children = this.$slots.default !== undefined
  }
}
</script>
<style lang="less">
.cb-badge {
  position: relative;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;
  &--text {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: -6px;
    height: 18px;
    line-height: 18px;
    min-width: 9px;
    border-radius: 12px;
    padding: 0 5px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    background-color: #ff5b05;
    white-space: nowrap;
    transform: translateX(-45%);
    transform-origin: -10% center;
    z-index: 10;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', SimSun, sans-serif;
  }
  &--flat {
    border-radius: 2px;
  }
  &--outline {
    background-color: transparent;
    border: 1px solid #ff5b05;
    color: #ff5b05;
  }
  &--text a {
    color: #fff;
  }
  &--text p {
    margin: 0;
    padding: 0;
  }
  &--dot {
    position: absolute;
    transform: translateX(-50%);
    transform-origin: 0 center;
    top: -4px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    background: #ff5b05;
    z-index: 10;
  }
  &--not-a-wrapper &--text,
  &--not-a-wrapper &--dot {
    top: auto;
    display: block;
    position: relative;
    transform: translateX(0);
  }
  &--corner {
    width: 80px;
    padding: 8px;
    position: absolute;
    right: -32px;
    top: 8px;
    background-color: #ff5b05;
    color: #fff;
    white-space: nowrap;
    transform: rotate(45deg);
    text-align: center;
    font-size: 15px;
  }
  &--corner-wrapper {
    overflow: hidden;
    width: 100%;
  }
}
</style>
