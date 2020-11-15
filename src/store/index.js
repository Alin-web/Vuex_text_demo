import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    // 禁止在mutations 进行异步操作 不然会使得vue的调试器值 不工作
    add(state){
      /* setTimeout(()=>{
        state.count ++
      },1000) */
      state.count ++
    },
    addn(state,step){
      state.count += step
    },
    jj(state){
      state.count --
    },
    jjn(state,step){
      state.count -= step
    }

  },
  actions: {
    // vuex 的异步操作都在actions中完成的  但需要mutations 配合完成
    DAsync(a){
      setTimeout(()=>{
        a.commit('add')
      },1000)
    },
    //异步操作 带参数
    DnAsync(a,step){
      setTimeout(()=>{
        a.commit('addn',step)
      },1000)
    },
    // 异步操作 -1
    JAsync(a){
      setTimeout(()=>{
        a.commit('jj')
      },1000)
    },
    // 异步操作 -n 带参
    JnAsync(a,step){
      setTimeout(()=>{
        a.commit('jjn',step)
      },1000)
    }
  },
  getters:{
    title(state){
      return '当前最新的数量是['+state.count+']'
    }
  },
  modules: {
  }
})
