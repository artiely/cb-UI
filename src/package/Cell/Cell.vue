<template>
  <div :class="`${prefixCls}`">
    <div :class="`${prefixCls}--left-icon`" v-if="hasIcon">
      <slot name="left-icon">
        <cb-icon :name="leftIcon">
        </cb-icon>
      </slot>
    </div>
    <div :class="{[`${prefixCls}--no-height`]:wrap,[`${prefixCls}--divider`]:true}">
      <slot>
        <slot name="title">
          <div :class="`${prefixCls}--title`" v-if="title">{{title}}
            <span v-if="required" :class="`${prefixCls}--required`"> *</span>
          </div>
        </slot>
        <div :class="`${prefixCls}--input-box`" v-if="this.value!==undefined&&this.input">
          <input :type="type" :class="`${prefixCls}--input`" v-bind="$attrs" :placeholder="placeholder" :value="value" @input="handleInput" />
        </div>
        <div :class="`${prefixCls}--text` " v-else>
          <slot name="text">
            <div :class="wrapCls">
              {{finalText}}
            </div>
          </slot>
        </div>
        <div :class="`${prefixCls}--link`" v-if="link||clear">
          <cb-icon name="icon-enter" v-if="link"></cb-icon>
          <cb-icon name="icon-delete_fill" v-if="clear" class="tap-area" color="#ddd" @click.native="clearInput"></cb-icon>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import findParent from '../utils/minxins/findParent'
const prefixCls = 'cb-cell'
export default {
  name: 'Cell',
  mixins: [findParent],
  inheritAttrs: false,
  props: {
    title: [String, Number],
    leftIcon: String,
    input: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    text: String,
    required: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: false
    },
    currency: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number]
  },
  data() {
    return {
      prefixCls: prefixCls,
      hasIcon: false
      // radioParent: null
    }
  },
  computed: {
    wrapCls() {
      // 是否换行
      return {
        [`${prefixCls}--no-ellipsis`]: this.wrap,
        [`${prefixCls}--ellipsis`]: !this.wrap,
        [`${prefixCls}--text-align`]: this.wrap
      }
    },
    // leftIconName() {
    //   // console.log('this.parent', this.parent)
    //   return this.leftIcon
    // },
    finalText() {
      // input = false 但是有value
      if (!this.input) {
        if (this.value) {
          return this.value
        } else {
          return this.text
        }
      }
    }
  },
  methods: {
    handleInput(e) {
      var value = e.target.value
      if (this.currency) {
        e.target.value = e.target.value.replace(/[^\d.]/g, '') // 清除“数字”和“.”以外的字符
        e.target.value = e.target.value.replace(/\.{2,}/g, '.') // 只保留第一个. 清除多余的
        e.target.value = e.target.value
          .replace('.', '$#$')
          .replace(/\./g, '')
          .replace('$#$', '.')
        e.target.value = e.target.value.replace(
          /^(-)*(\d+)\.(\d\d).*$/,
          '$1$2.$3'
        ) // 只能输入两个小数
        if (e.target.value.indexOf('.') < 0 && e.target.value !== '') {
          // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
          e.target.value = parseFloat(e.target.value)
        }
        // e.target.value = e.target.value.replace(/[^\d]/g, '')
        if (e.target.value > this.maxValue) {
          e.target.value = this.maxValue
        }
        this.$emit('input', e.target.value)
      } else {
        this.$emit('input', value)
      }
    },
    clearInput() {
      this.$emit('input', '')
    }
  },
  mounted() {
    // this.hasIcon = this.$slots.leftIcon !== undefined || this.radioParent !== null
    this.hasIcon = this.$slots.leftIcon !== undefined || this.leftIcon
  },
  created() {
    // this.radioParent = this.findParent('Radio')
  }
}
</script>

<style lang="less">
@import '../style/mixins';
.cb-cell {
  padding-left: 15px;
  display: flex;
  position: relative;
  &--required {
    color: red;
    position: absolute;
    top: 0;
    right: -7px;
  }
  &--divider {
    flex: 1;
    display: flex;
    height: 50px;
    line-height: 50px;
    .divider(bottom);
    font-size: 16px;
    padding-right: 15px;
  }
  &--no-height {
    height: auto;
    line-height: 50px;
  }
  &--link {
    width: 20px;
    text-align: right;
    .icon {
      font-size: 24px;
    }
  }
  &--text {
    font-size: 16px;
    padding-left: 15px;
    color: #333;
    flex: 1;
    width: 100px;
    text-align: right;
  }
  &--ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 50px;
    text-align: right;
  }
  &--no-ellipsis {
    padding-top: 15px;
    padding-bottom: 10px;
    line-height: 1.3;
  }
  &--text-align {
    text-align: left;
  }
  &--title {
    font-size: 16px;
    color: #666;
    min-width: 66px;
    position: relative;
  }
  &--input-box {
    flex: 1;
  }
  &--input {
    width: 100%;
    line-height: normal;
    padding-left: 20px;
    outline: none;
    border: none;
    box-sizing: border-box;
    font-size: 16px;
    background: #ffffff;
    box-shadow: none;
    -webkit-appearance: none; /* 除输入框和按钮的原生外观，在iOS上加上这个属性才能给按钮和输入框自定义样式 */
    vertical-align: middle;
    line-height: normal; //光标问题
    resize: none;
    -webkit-tap-highlight-color: transparent;
    &[type='number'] {
      -moz-appearance: textfield;
    }
    &:focus {
      /* 防止在获得焦点时, 出现边框 */
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0;
    }
  }
  &--left-icon {
    display: inline-block;
    width: 30px;
    height: 50px;
    line-height: 50px;
    text-align: left;
    .icon {
      font-size: 24px;
    }
  }
}
</style>
