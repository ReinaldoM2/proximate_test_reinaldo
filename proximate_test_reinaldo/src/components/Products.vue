<template>
  <div v-if="!preloader">
    <h1>Products</h1>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(dato, index) in products.products" :key="index">
          <div class="card">
            <img :src="dato.image" class="rounded d-block card-img-top" style="width: 100%;height: 15vw;object-fit: scale-down;" :alt="dato.image">
            <div class="card-body">
              <h5 class="card-title">{{dato.title}}</h5>
              <p class="card-text">{{dato.shortDescription}}</p>
              <router-link :to="dato.path">
                <button class="btn btn-primary">Ver mas</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loader v-if="preloader" />
</template>
<script>
const { default: store }=require("@/store");
import axios from 'axios'
import Loader from '../components/Loading.vue'
export default {
  components:{
    Loader
  },
  methods: {
    async getProducts(){
      let token = store.getters.getToken;
      const variables = {
        userToken : token
      }
      let datos = [];
      let menu  = [];
      let response = await axios.post(`/getproducts`, variables)
      datos = JSON.parse(response.data.data)
      menu  = JSON.stringify(datos.menu)
      store.dispatch("saveMenu",menu);
      this.products = datos;
      this.preloader = false
    },
  },
  async mounted(){
    this.getProducts()
  },
  data(){
      return{
          products: [],
          preloader : true
      }
  }
}
</script>