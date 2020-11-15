<template>
  <div>
    <!-- <p>当前conts最新的值为:{{count}}</p> -->
    <h3>{{title}}</h3>
   <button @click="jianjian">-1</button>
   <button @click="jianjiann">-n</button>
   <button @click="jianAsync">-1 async</button>
   <button @click="jianNAsync">-n async</button>
  </div>
</template>
<script>
//第二中  访问 vuex   state中数据的方式  按需导入
//  mapState 映射state 中的全局变量   mapMutations 映射mutations方法
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed:{
    // 通过刚才导入的 mapState 函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性：
    ...mapState(['count']),
    ...mapGetters(['title'])
  },
  methods:{
    // 把当前方法 映射到method中
    ...mapMutations(['jj','jjn']),
    ...mapActions(['JAsync','JnAsync']),
    jianjian(){
      this.jj()
    },
    jianjiann(){
      this.jjn(2)
    },
    // 异步操作 -1 
    jianAsync(){
      this.JAsync()
    },
    jianNAsync(){
      this.JnAsync(5)
    }
  }
}
</script>
<style lang="less" scoped>
</style>