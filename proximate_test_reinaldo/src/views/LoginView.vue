<template>
  <div class="d-flex justify-content-center">
    <div class="w-25 card">
      <div class="card-body">
        <Login/>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "@/components/Login.vue"
export default {
  name: 'LoginView',
  components: {
    Login,
  }
}
</script>