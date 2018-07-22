<template>
  <div class="cb-radio-group" :class="{'cb-radio-group--show':inCell}">
    <slot/>
  </div>
</template>

<script>
import findParent from '../utils/minxins/findParent'
export default {
  name: 'RadioGroup',
  mixins: [findParent],
  props: {
    value: null,
    disabled: Boolean,
    options: {
      type: Object,
      default: () => {
        return {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          checkedIcon: 'icon-danxuan-xuanzhong',
          checkIcon: 'icon-ico2'
        }
      }
    }
  },
  data() {
    return {
      inCell: false
    }
  },
  watch: {
    value(value) {
      this.$emit('change', value)
    }
  },
  created() {
    this.findParent('CellGroup')
    if (this.parent) {
      this.inCell = true
    }
  }
}
</script>
<style lang="less">
.cb-radio-group {
  .cb-radio {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 9;
    &::after,
    &::before {
      content: '';
    }
    .cb-radio--icon {
      height: 25px;
      width: 25px;
      position: relative;
      .icon {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9;
      }
      input {
        opacity: 0;
      }
    }
  }
  &.cb-radio-group--show {
    position: relative;
    .cb-radio {
      .cb-radio--icon {
        position: absolute;
      }
    }
  }
}
</style>
