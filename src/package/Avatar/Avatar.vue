<template>
  <div class="cb-avatar" :style="'background-color:'+background+';height:'+size+'px;width:'+size+'px'">
    <img class="cb-avatar--img" v-if="src" :src="src" alt="头像" />
    <div class="cb-avatar--name" v-else-if="name" :style="'color:'+color+';font-size:'+fontSize+'px'">{{name.slice(0,1)}}</div>
    <cb-icon class="cb-avatar--default" v-else :name="icon" :color="color" :size="fontSize"></cb-icon>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    size: {
      type: Number,
      default: 30
    },
    src: String,
    name: String,
    color: {
      type: String,
      default: '#666'
    },
    icon: {
      type: String,
      default: 'icon-people'
    },
    background: String
  },
  computed: {
    fontSize() {
      return this.size / 1.5
    }
  }
}
</script>

<style lang="less">
.cb-avatar {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ddd;
  overflow: hidden;
  font-size: 16px;
  object-fit: cover;
  .cb-avatar--img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cb-avatar--default {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .cb-avatar--name {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #666;
  }
}
</style>
