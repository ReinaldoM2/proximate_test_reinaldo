<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <div class=" w-50">
          <a href="/">
            <img src="../assets/logo.png" alt="" class="img-fluid">
          </a>
        </div>
      </ul>
      <form class="d-flex">
        <span v-if="token">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown" v-if="menu">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="(dato, index) in menu" :key="index"><a class="dropdown-item" href="/products">{{dato.icon}}</a></li>
              </ul>
            </li>
            <li class="nav-item" style="margin-left:15px;">
              <button  class="btn btn-outline-success" @click="logout()">{{sign}}</button>
            </li>
          </ul>
        </span>
        <router-link v-else to="/login">
          <button class="btn btn-outline-success">{{sign}}</button>
        </router-link>
      </form>
    </div>
  </div>
</nav>
</template>
<script>
import store from '@/store';
import router from '@/router';
export default {
  name: 'Header',
  methods: {
    async obtenerToken(){
      this.token = await store.getters.getToken;
    },
    async obtenerMenu(){
      this.menu = await store.getters.getMenu;
    },
    async logout(){
      localStorage.clear();
      router.push('/login')
    }
  },
  async mounted(){
    this.obtenerToken(),
    this.obtenerMenu()
  },
  data(){
    return {
      token: "",
      menu: []
    }
  },
  computed: {
    sign(){
      return this.token != null ? 'Logout' : 'Login'
    }
  }
}
</script>