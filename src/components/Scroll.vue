<template>
  <div class="hello">
    <cb-header title="头" back></cb-header>
    <div style="position:fixed;top:45px;bottom:0;left:0;right:0">
      <cb-scroll :data="data" ref="scroll" :options="options" @pulling-down="onPullingDown" @pulling-up="onPullingUp">
        <cb-cell-group>
          <cb-cell v-for="(item,i) in data" :text="item.title" :key="i" wrap></cb-cell>
        </cb-cell-group>
      </cb-scroll>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data() {
    return {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      options: {
        pullDownRefresh: {
          threshold: 60,
          stop: 40,
          txt: '更新成功'
        },
        pullUpLoad: {
          threshold: 200,
          txt: {
            more: '加载中...',
            noMore: '没有更多数据'
          }
        }
      },
      page: 1,
      limit: 10
    }
  },
  methods: {
    onPullingDown() {
      // 模拟更新数据
      this.page = 1
      this.getData()
    },
    getData() {
      axios({
        url: `http://gank.io/api/history/content/${this.limit}/${this.page}`,
        method: 'get'
      }).then(res => {
        console.log(res)
        if (res.data.error === false) {
          if (this.page === 1) {
            this.data = res.data.results
          } else {
            this.data = this.data.concat(res.data.results)
          }
        }
      })
    },
    onPullingUp() {
      // 模拟更新数据
      this.page++
      if (this.page >= 3) {
        this.$refs.scroll.forceUpdate()
      } else {
        this.getData()
      }
    }
  },
  created() {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
