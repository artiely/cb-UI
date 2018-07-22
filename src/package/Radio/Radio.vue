<template>
  <label @click="$emit('click')" class="cb-radio">
    <span class="cb-radio--icon" :style="styles">
      <input :value="name" v-model="currentValue" type="radio" :disabled="isDisabled">
      <cb-icon :name="checked ? options.checkedIcon : options.checkIcon"></cb-icon>
    </span>
    <slot/>
  </label>
</template>

<script>
import findParent from '../utils/minxins/findParent'
export default {
  mixins: [findParent],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: Boolean,
    checkedIcon: {
      type: String,
      default: 'icon-danxuan-xuanzhong'
    },
    checkIcon: {
      type: String,
      default: 'icon-ico2'
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value
      },
      set(val) {
        ;(this.parent || this).$emit('input', val)
      }
    },
    isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled
    },
    options() {
      let _options = this.parent ? this.parent.options : {}
      return {
        top: _options.top ? _options.top : '',
        bottom: _options.bottom ? _options.bottom : '',
        left: _options.left ? _options.left : '',
        right: _options.right ? _options.right : '',
        checkedIcon: _options.checkedIcon
          ? _options.checkedIcon
          : 'icon-danxuan-xuanzhong',
        checkIcon: _options.checkIcon ? _options.checkIcon : 'icon-ico2'
      }
    },
    checked() {
      return this.currentValue === this.name
    },
    styles() {
      return {
        top: this.options ? this.options.top + 'px' : '',
        left: this.options ? this.options.left + 'px' : '',
        bottom: this.options ? this.options.top + 'px' : '',
        right: this.options ? this.options.right + 'px' : ''
      }
    }
  },
  methods: {
    onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name
      }
    }
  },
  created() {
    this.findParent('RadioGroup')
  }
}
</script>
