<template>
  <div class="cb-radio-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'RadioGroup',
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value(value) {
      this.$emit('change', value)
    }
  }
}
</script>