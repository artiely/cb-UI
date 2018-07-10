<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>

<script>
import { oneOf } from '../../utils'
export default {
  props: {
    alignContent: {
      type: String,
      validator(value) {
        return oneOf(value, [
          'start',
          'end',
          'center',
          'between',
          'around',
          'stretch'
        ])
      }
    },
    alignItems: {
      type: String,
      validator(value) {
        return oneOf(value, ['start', 'end', 'center', 'baseline', 'stretch'])
      }
    },
    alignSelf: {
      type: String,
      validator(value) {
        return oneOf(value, [
          'auto',
          'start',
          'end',
          'center',
          'baseline',
          'stretch'
        ])
      }
    },
    padding: {
      type: [String, Number]
    }
  },
  computed: {
    style() {
      // var alignContent, alignSelf
      // if (this.alignContent) {
      //   alignContent = `;flex-wrap: wrap;align-content:${this.alignContent}`
      // }
      // if (this.alignSelf) {
      //   alignSelf = `;align-self:${this.alignSelf}`
      // }
      if (this.alignContent) {
        return `display:flex;flex-flow: row wrap;;align-content:${
          this.alignContent
        }`
      }
    }
  }
}
</script>
<style>
</style>
