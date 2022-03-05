<template>
  <div class="home">
    <HelloWorld/>
    <Loading/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Loading from '../components/Login.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Loading
  }
}
</script>
