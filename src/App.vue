<template>
  <div>
    <my-add></my-add>
    <p>-------</p>
    <my-sub></my-sub>
  </div>
</template>
<script>
// 注册为私有子组件
import add from './components/Addition'
import sub from './components/Subtraction'

export default {
  data() {
    return {
      
    }
  },
  components:{
    'my-add' : add,
    'my-sub' : sub
  }
}
</script>
<style lang="less" scoped>

</style>