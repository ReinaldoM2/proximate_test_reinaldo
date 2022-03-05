<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <div class=" w-50">
            <router-link to="/">
              <img src="./assets/logo.png" alt="" class="img-fluid">
            </router-link>
          </div>
        </ul>
        <form class="d-flex">
          <router-link v-if="token" to="/login">
            <button class="btn btn-outline-success" @click="logout()">Logut</button>
          </router-link>
          <router-link v-else to="/login">
            <button class="btn btn-outline-success">Login</button>
          </router-link>
        </form>
      </div>
    </div>
  </nav> -->
  <router-view/>
</template>
<script>
import store from './store'
export default {
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
