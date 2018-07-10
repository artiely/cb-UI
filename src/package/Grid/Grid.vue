<template>
  <div>
    <slot :row="items"></slot>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      // data: ''
    }
  }
}
</script>

<style>
</style>
