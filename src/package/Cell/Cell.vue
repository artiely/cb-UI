<template>
  <div class="cb-cell">
    
      <div class="cb-cell-left--icon" v-if="hasIcon||leftIcon">
        <slot name="left-icon">
          <cb-icon :name="leftIcon?'icon-questions':''">
          </cb-icon>
        </slot>
      </div>
      <!-- 不换行 -->
      <div class="cb-cell-divider" :class="{'cb-cell-no-height':wrap}">
        <slot>
        <slot name="title">
          <div class="cb-cell-title">{{title}}
            <span v-if="required" class="cb-cell-required"> *</span>
          </div>
        </slot>
        <div class="cb-cell-input-box" v-if="input">
          <input :type="type" class="cb-cell-input" v-bind="$attrs" :value="value" @input="handleInput" placeholder="请输入">
        </div>
        <div class="cb-cell-text "  v-else>
          <div class="cb-cell-text-align" :class="{'cb-cell-no-ellipsis':wrap,'cb-cell-ellipsis':!wrap}">
            {{text}}
          </div>
        </div>
        <div class="cb-cell-link" v-if="link||clear">
          <cb-icon name="icon-enter" v-if="link"></cb-icon>
          <cb-icon name="icon-delete_fill" v-if="clear" class="tap-area" color="#ddd" @click.native="clearInput"></cb-icon>
        </div>
        </slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    title: String,
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
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number]
  },
  data() {
    return {
      hasIcon: false
    }
  },
  methods: {
    handleInput(e) {
      var value = e.target.value
      if (this.currency) {
        e.target.value = e.target.value.replace(/[^\d.]/g, '') // 清除“数字”和“.”以外的字符
        e.target.value = e.target.value.replace(/\.{2,}/g, '.') // 只保留第一个. 清除多余的
        e.target.value = e.target.value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
        e.target.value = e.target.value.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3') // 只能输入两个小数
        if (e.target.value.indexOf('.') < 0 && e.target.value !== '') { // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
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
    this.hasIcon = this.$slots.leftIcon !== undefined
  }
}
</script>

<style lang="less">
@import '../style/mixins';
.cb-cell {
  padding-left: 15px;
  display: flex;
  position: relative;
  margin-bottom: -1px;
  .cb-cell-required{
    color: red;
  }
  .cb-cell-divider {
    flex: 1;
    display: flex;
    height: 50px;
    line-height: 50px;
    .divider(bottom);
    font-size: 16px;
    padding-right: 15px;
    &.cb-cell-no-height {
      height: auto;
      line-height: 50px;
    }
  }
  .cb-cell-link {
    width: 20px;
    text-align: right;
    .icon{
      font-size: 24px;
    }
  }
  .cb-cell-text {
    font-size: 16px;
    padding-left: 15px;
    color: #333;
    flex: 1;
    width: 100px;
    text-align: right;

    .cb-cell-ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 50px;
    }
    .cb-cell-no-ellipsis {
      padding-top: 15px;
      padding-bottom: 10px;
      line-height: 1.3;
    }
    .cb-cell-text-align {
      text-align: left;
    }
  }
  .cb-cell-title {
    font-size: 16px;
    color: #666;
    min-width: 66px;
  }
  .cb-cell-input-box {
    flex: 1;
    .cb-cell-input {
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
      &:focus {
        /* 防止在获得焦点时, 出现边框 */
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }
    }
  }
  .cb-cell-left--icon {
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
