<template>
  <Header/>
  <router-view/>
</template>
<script>
import store from './store'
import Header from '@/components/Header.vue';
export default {
  components:{
    Header,
  },
  methods: {
    async logout(){
      localStorage.removeItem("token");
    },
    async getToken(){
      this.token = store.getters.getToken;
    }
  },
  async mounted(){
    this.getToken()
  },
  data(){
    return {
      token : ""
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
