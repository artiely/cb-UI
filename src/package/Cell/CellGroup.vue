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
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  background: #fff;
  overflow: hidden;
  margin-bottom: -1px;
}
.cb-cell-group-border {
  .thin-border-tb();
}
</style>
