<template>
  <div id="app">
    正常标题默认带返回
    <cb-header>123很厉害厉害厉害厉害厉害厉害了很厉了很厉了很厉</cb-header>
    标题很长
    <cb-header>123很厉害厉害厉害厉害厉害厉害了很厉了很厉了很厉</cb-header>
    带返回
    <cb-header back>123很厉害厉</cb-header>
    自定义图标
    <cb-header no-back left-icon="icon-remind" right-icon="icon-share_fill" :on-left-click="handleLeft">123很厉害厉</cb-header>
    自定义
    <cb-header no-back left-icon="icon-remind" right-icon="icon-share_fill">
      <div slot="left" @click="handleLeft" style="vertical-align:top">
        <cb-icon name="icon-return">返回 |</cb-icon>
        <cb-icon name="icon-close" :size="20"></cb-icon>
      </div>嘿嘿
      <div slot="right">
        <cb-icon name="icon-search"></cb-icon>
        <cb-icon name="icon-switch"></cb-icon>
      </div>
    </cb-header>
    图标 可自定义尺寸和颜色
    <cb-icon name="icon-search" :size="42"></cb-icon>
    <cb-icon name="icon-search" :size="32"></cb-icon>
    <cb-icon name="icon-search" :size="22"></cb-icon>
    <cb-icon name="icon-search" :size="22" color="red"></cb-icon>
    默认头像
    <cb-avatar></cb-avatar>
    <br> Artiely
    <cb-avatar name="Artiely"></cb-avatar>
    <br> 谭杰
    <cb-avatar name="谭杰"></cb-avatar>
    <br> 自定义颜色
    <cb-avatar name="谭杰" color="red"></cb-avatar>
    <cb-avatar name="谭杰" background="#333" color="#fff"></cb-avatar>
    <br> 自定义尺寸
    <cb-avatar name="谭杰" background="#333" color="#fff" :size="100"></cb-avatar>
    <cb-avatar name="谭杰" :src="require('./assets/logo.png')" :size="50"></cb-avatar>
    <br>
    <cb-box alignContent="center" style="background:#eee;height:110px;width:110px;">
      <cb-box style="background:red;display:flex;height:20px"></cb-box>
      <cb-box style="background:red;width:110px;height:20px"></cb-box>
    </cb-box>
    <div class="main">
      <div style="background-color:coral;"></div>
      <div style="background-color:pink;"></div>
    </div>
    <br>
    <cb-grid :items="[1,2,3,4,5,6]">
      <template slot-scope="scope" >
        {{scope}}
      </template>
    </cb-grid>
    <br>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleLeft() {
      console.log('点击了自定义事件')
    }
  }
}
</script>

<style lang="less">
.main {
  // display: flex;
  // flex-flow: row wrap;
  // align-content: center;
  // background: rgb(238, 238, 238);
  // height: 110px;
  // width: 110px;
  width: 70px;
    height: 300px;
    border: 1px solid #c3c3c3;
    //display: -webkit-flex;
    display: flex;
    //-webkit-flex-wrap: wrap;
    flex-flow:  row wrap;
    //-webkit-align-content: center;
    align-content: center;
  > div {
    height: 100px;
    width: 100px;
  }
}
</style>
