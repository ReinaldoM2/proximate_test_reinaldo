<template>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <label for="user" class="form-label">User</label>
      <input type="text" class="form-control" id="user" v-model="user">
    </div>
    <div class="mb-3">
      <label for="user" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <Loader v-if="preloader" />
</template>
<script>
import axios from "axios";
import store from '@/store';
import { ref } from 'vue';
import Loader from '../components/Loading.vue'
export default {
  components: {
    Loader
  },
  name: 'Login',
  setup() {
    let user     = ref("");
    let password = ref("");
    const submit = async () => {
      await axios.post('/login ',{user: user.value, password: password.value})
      .then(async response => {
        if (response.data.status === false)
          alert(response.data.message)
        else{
          let datos = JSON.parse(response.data.data);
          let token = datos.userToken;
          store.dispatch("saveToken",token);
          preloader = true
          if (store.state.token != "") {
            location.href = "/products";
          }
        }
      })
      .catch(error => {
        alert(error);
      });
    }
    let preloader = ref(false);
    return {
      user,
      password,
      submit,
      preloader
    }
  },
}
</script>