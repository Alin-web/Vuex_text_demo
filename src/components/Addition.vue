<template>
  <div>
    <!-- 组件访问 State 中数据的第一种方式  this.$store.start.全局变量名-->
   <!-- <p>当前conts最新的值为:{{$store.state.count}}</p> -->
   <!-- 组件访问 store.getters  中数据的第一种方式  this.store.getters.全局变量名-->
   <p>{{ $store.getters.title}}</p>
    <button @click="add">+1</button>
    <button @click="addN">+n</button>
    <button @click="addAsync">+1 Async</button>
    <button @click="addnAsync">+n Async</button> 
   
  </div>
</template>
<script>
export default {
  data() {
      return {
        
      }
  },
  methods:{
    add(){
      //console.log(number)
      this.$store.commit('add')
    },
    addN(){
      this.$store.commit('addn',3)
    },
    // 异步操作 让其自挣＋1
    addAsync(){
      this.$store.dispatch('DAsync')
    },
    // 异步带参数
    addnAsync(){
      this.$store.dispatch('DnAsync',5)
    }
  }
}
</script>
<style lang="less" scoped>

</style>