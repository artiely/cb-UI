<template>
  <div>
    <input type="radio">
    <slot/>
  </div>
</template>

<script>
import findParent from './findParent'
export default {
  mixins: [findParent],
  props: {
    name: null
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
    }
  },
  methods: {
    handleClick() {}
  },
  created() {
    this.findParent('RadioGroup')
  }
}
</script>

<style>
</style>
