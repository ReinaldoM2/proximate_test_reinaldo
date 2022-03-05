<template>
  <div>
    <h1>Componente Products</h1>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(dato, index) in products.products" :key="index">
          <div class="card">
            <img :src="dato.image" class="rounded d-block card-img-top" style="width: 100%;height: 15vw;object-fit: scale-down;" :alt="dato.image">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">{{dato.longDescription}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { default: store }=require("@/store");
import axios from 'axios'
export default {
  methods: {
    async getProducts(){
      let token = store.getters.getToken;
      const variables = {
        userToken : token
      }
      let datos = [];
      let response = await axios.post(`/getproducts`, variables)
      datos     = JSON.parse(response.data.data)
      this.products = datos;
    },
  },
  async mounted(){
    this.getProducts()
  },
  data(){
      return{
          products: []
      }
  }
}
</script>