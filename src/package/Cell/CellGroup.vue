<template>
  <div class="cb-cell-group" :class="{'cb-cell-group-border':border}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CellGroup',
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="less">
@import '../style/mixins';
.cb-cell-group {
  margin-bottom: 20px;
  background: #fff;
  overflow: hidden;
}
.cb-cell-group-border {
  .thin-border-tb();
}
</style>
