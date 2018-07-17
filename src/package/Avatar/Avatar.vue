<template>
  <div :class="`${prefixCls}`" :style="wrapStyle">
    <slot>
      <div :class="`${prefixCls}--content`" :style="contentStyle" >
        <img :class="`${prefixCls}--img`" v-if="src" :src="src" alt="头像" />
        <div :class="`${prefixCls}--name`" v-else-if="name" :style="nameStyle">{{name.slice(0,1)}}</div>
        <cb-icon :class="`${prefixCls}--default`" v-else :name="icon" :color="color" :size="fontSize"></cb-icon>
      </div>
      <div :class="`${prefixCls}--verified`">
        <slot name="verified" />
      </div>
    </slot>
  </div>
</template>

<script>
const prefixCls = 'cb-avatar'
export default {
  name: 'Avatar',
  props: {
    size: {
      type: [Number, String],
      default: 30
    },
    src: String,
    name: String,
    color: {
      type: String,
      default: '#666'
    },
    flat: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'icon-people'
    },
    background: String
  },
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  computed: {
    fontSize() {
      return this.size / 1.5
    },
    wrapStyle() {
      return {
        height: this.size + 'px',
        width: this.size + 'px'
      }
    },
    nameStyle() {
      return {
        color: this.color,
        fontSize: this.fontSize + 'px'
      }
    },
    contentStyle() {
      return {
        borderRadius: this.flat ? '0' : '50%',
        backgroundColor: this.background
      }
    }
  }
}
</script>

<style lang="less">
.cb-avatar {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  background: transparent;
  font-size: 16px;
  object-fit: cover;
  &--content {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #fff;
  }
  &--img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &--default {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  &--name {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #666;
  }
  &--verified {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: auto;
    border-radius: 50%;
    z-index: 2;
  }
}
</style>
