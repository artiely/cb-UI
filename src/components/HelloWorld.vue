<template>
  <div id="app">
    <router-view></router-view>
    <cb-header>默认固定顶部</cb-header>
    <div style="height:50px"></div>
    正常标题默认
    <cb-header :fixed="false">默认标题</cb-header>
    带返回
    <cb-header back :fixed="false">带返回</cb-header>
    标题很长
    <cb-header :fixed="false">123很厉害厉害厉害厉害厉害厉害了很厉了很厉了很厉</cb-header>
    白色主题
    <cb-header mode="light" :fixed="false">123很厉害厉害厉害厉害厉害厉害了很厉了很厉了很厉</cb-header>
    白色主题带返回
    <cb-header mode="light" :fixed="false" back>123很厉害厉害厉害厉害厉害厉害了很厉了很厉了很厉</cb-header>
    自定义图标
    <cb-header :fixed="false" left-icon="icon-remind" right-icon="icon-share_fill" :on-left-click="handleLeft">123很厉害厉</cb-header>
    自定义
    <cb-header :fixed="false" left-icon="icon-remind" right-icon="icon-share_fill">
      <div slot="left" @click="handleLeft" style="vertical-align:top">
        <cb-icon name="icon-return"> |</cb-icon>
        <cb-icon name="icon-close" :size="20"></cb-icon>
      </div>嘿嘿
      <div slot="right">
        <cb-icon name="icon-search"></cb-icon>
        <cb-icon name="icon-switch"></cb-icon>
      </div>
    </cb-header>
    图标 可自定义尺寸和颜色
    <br>
    <cb-icon name="icon-search" :size="42"></cb-icon>
    <br>
    <cb-icon name="icon-search" :size="32"></cb-icon>
    <br>
    <cb-icon name="icon-search" :size="22"></cb-icon>
    <br>
    <cb-icon name="icon-search" :size="22" color="red"></cb-icon>
    <br> 默认头像
    <br>
    <cb-avatar></cb-avatar>
    <br> Artiely<br>
    <cb-avatar name="Artiely"></cb-avatar>
    <br> 谭杰<br>
    <cb-avatar name="谭杰"></cb-avatar>
    <br> 自定义颜色
    <br>
    <cb-avatar name="谭杰" color="red"></cb-avatar>
    <cb-avatar name="谭杰" background="#333" color="#fff"></cb-avatar>
    <br> 自定义尺寸
    <br>
    <cb-avatar name="谭杰" background="#333" color="#fff" :size="100"></cb-avatar>
    <br> 图片
    <br>
    <cb-avatar name="谭杰" :src="require('../assets/logo.png')" :size="50"></cb-avatar>
    <br> 扁平
    <br>
    <cb-avatar name="谭杰" :src="require('../assets/logo.png')" :size="50" flat></cb-avatar>
    <br> 设置 verified
    <br>
    <cb-avatar name="谭杰" background="#333" color="#fff" :size="50">
      <cb-icon name="icon-success_fill" slot="verified" color="red" style="position:absolute;right:0;bottom:0;"></cb-icon>
    </cb-avatar>
    <br> 网格组件(默认列3)
    <cb-grid :items="[1,2,3,4,5]">
      <template slot-scope="scope">
        <div style="width:100%;height:100px;text-align:center;line-height:100px;">{{scope.item}}</div>
      </template>
    </cb-grid>
    自定义列数（4）
    <cb-grid :items="[1,2,3,4,5]" :col="4">
      <template slot-scope="scope">
        <div style="width:100%;height:100px;text-align:center;line-height:100px;">{{scope.item}}</div>
      </template>
    </cb-grid>
    无边框
    <cb-grid :items="[1,2,3,4,5]" :col="4" :divider="false">
      <template slot-scope="scope">
        <div style="width:100%;height:100px;text-align:center;line-height:100px;">{{scope.item}}</div>
      </template>
    </cb-grid>
    <br> dividers
    <div class="test test1"></div>
    <div class="test test2"></div>
    <div class="test test3"></div>
    <div class="test test4"></div>
    <div class="test"></div>
    <div class="test test5"></div>
    group有边框
    <cb-cell-group>
      <cb-cell left-icon="icon-questions"></cb-cell>
      <cb-cell title="我是川普"></cb-cell>
    </cb-cell-group>
    <div class="test test5"></div>
    group无边框
    <cb-cell-group :border="false">
      <cb-cell left-icon="icon-questions" title="你好"></cb-cell>
      <cb-cell title="我是川普"></cb-cell>
      <cb-cell title="我是川普" input v-model="valuex"></cb-cell>
      <cb-cell title="长度3" input v-model="valuex" maxlength="3"></cb-cell>
      {{valuex}}
      <cb-cell title="川普" input v-model="valuex"></cb-cell>
      <cb-cell title="请输入数字" input v-model="valuex" type="number"></cb-cell>
      <cb-cell title="请输入手机号" input v-model="valuex" type="tel"></cb-cell>
      <cb-cell title="请输入金额" input v-model="valuex" currency type="number"></cb-cell>
      <cb-cell title="我是川普我是川普" input required v-model="valuex" clear></cb-cell>
      <cb-cell title="我是川普我是川普" text="我是文本内容"></cb-cell>
      <cb-cell title="我是川普我是川普" text="我是文本内容我是文本内容我是文本内容本内容"></cb-cell>
      <cb-cell title="我是川普我是川普" text="我是文本内容我是文本内容我是文本内容本内容" wrap></cb-cell>
      <cb-cell title="请选择" text="我是文本内容我是文本内容我是文本内容本内容" link></cb-cell>
      改变input属性动态切换输入和只读状态
      <button @click="switchType=!switchType">switchType</button>
      {{text}}
      <cb-cell title="我是标题" v-model="text" :input="switchType"></cb-cell>
      <cb-cell title="我是标题" v-model="text" input placeholder="请输入123"></cb-cell>

      <cb-cell>
        <div>
          <cb-icon name="icon-coupons"></cb-icon>
        </div>
      </cb-cell>
    </cb-cell-group>
    <div class="test test5"></div>
    <br> 徽章溢出状态
    <br>
    <cb-badge :text="num"></cb-badge>
    <cb-badge :text="num" :dot="num>99"></cb-badge>
    <br> 徽章的绶带形式
    <br>
    <cb-cell-group>
      <cb-badge text="促销" corner>
        <div>
          <cb-cell title="清仓" text="跳楼"></cb-cell>
        </div>
      </cb-badge>
      <cb-badge text="促销" corner large>
        <cb-cell title="清仓" text="跳楼"></cb-cell>
      </cb-badge>
    </cb-cell-group>
    徽章结合cell的使用
    <cb-cell-group>
      <cb-cell title="我是标题" link>
        <div slot="text">
          <cb-badge text="999" />
        </div>
      </cb-cell>
      <cb-cell title="我是标题" link>
        <div slot="text">
          <cb-badge text="促销" />
        </div>
      </cb-cell>
    </cb-cell-group>
    <br> 徽章结合头像自定义style
    <br>
    <cb-badge text="10" :styles="{marginLeft:'-8px',marginTop:'8px'}">
      <cb-avatar name="谭杰" background="#333" color="#fff" :size="50"></cb-avatar>
    </cb-badge>
    <br> 徽章自定义尺寸
    <br>
    <cb-badge text="10" size="30" />
    <cb-badge text="10" size="20" />
    <cb-badge text="10" size="10" />
    <br> 是否去圆角
    <br>
    <cb-badge text="你好" flat />
    <br> 是否去填充色
    <br>
    <cb-badge text="你好" flat outline />
    <cb-badge text="你好" size="25" flat outline />
    <br> 自定义class属性
    <br>
    <cb-badge text="你好" badge-class="badge-class" />
    <br> 自定义颜色属性
    <br>
    <cb-badge text="你好" color="blue" />
    <cb-badge text="你好" color="#000" />
    <cb-badge text="你好" color="rgb(200,200,200)" />
    <cb-badge text="你好" color="blue" outline />
    <cb-badge text="你好" color="#000" outline flat/>
    <br>
    <button @click="toNewPage">scroll</button>

    {{sex}}
    <cb-radio-group v-model="sex">
      <cb-radio name="1">男</cb-radio>
      <cb-radio name="2">女</cb-radio>
    </cb-radio-group>

    <cb-cell-group>
      <cb-radio-group v-model="sex" :options="{top:15,left:10,checkedIcon:'icon-like_fill',checkIcon:'icon-like'}">
        <cb-radio name="1">
          <!-- <cb-cell left-icon="icon-questions" title="你好"></cb-cell> -->
          <cb-cell title="男" left-icon=" "></cb-cell>
        </cb-radio>
        <cb-radio name="2">
          <cb-cell title="女" left-icon=" "></cb-cell>
        </cb-radio>
      </cb-radio-group>
    </cb-cell-group>
    {{name}}
    <cb-cell-group>
      <cb-radio-group v-model="name" :options="{top:15,right:10,checkedIcon:'icon-like_fill',checkIcon:'icon-like'}">
        <cb-radio :name="we[0].name">
          <cb-cell title="男"></cb-cell>
        </cb-radio>
        <cb-radio :name="we[1].name">
          <cb-cell title="男"></cb-cell>
        </cb-radio>
      </cb-radio-group>
    </cb-cell-group>
    <div>
      <cb-radio-group v-model="sex">
        <div style="width:20%;display:inline-block">
          <cb-radio name="1">男</cb-radio>
        </div>
        <div style="width:20%;display:inline-block">
          <cb-radio name="2">女</cb-radio>
        </div>
      </cb-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      num: 100,
      name: 'tanjie',
      we: [{ name: 'tanjie' }, { name: 'beibi' }],
      valuex: '',
      text: '',
      sex: '1',
      switchType: false
    }
  },
  methods: {
    handleLeft() {
      console.log('点击了自定义事件')
    },
    toNewPage() {
      this.$router.push('/scroll')
    }
  }
}
</script>

<style lang="less">
@import '../package/style/mixins';
* {
  font-family: 'PingFang SC', 'Hiragino Sans GB', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica,
    'Microsoft YaHei', SimSun, sans-serif;
}
#app {
  background: #eee;
}
.badge-class {
  border-radius: 0;
  border: 1px solid yellow;
  background: plum;
  color: red;
}
.test {
  height: 40px;
  width: 200px;
  background: yellow;
  &.test1 {
    .divider(right);
  }
  &.test2 {
    .divider(left);
  }
  &.test3 {
    .divider(top);
  }
  &.test4 {
    .divider(bottom,red);
  }
  &.test5 {
    .thin-border(2px);
  }
}
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
  flex-flow: row wrap;
  //-webkit-align-content: center;
  align-content: center;
  > div {
    height: 100px;
    width: 100px;
  }
}
</style>
