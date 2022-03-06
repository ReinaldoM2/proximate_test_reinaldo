<template>
  <div class="p-5">
    <div class="p-5">
      <HelloWorld/>
    </div>
    <!-- <Loading/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Loading from '../components/Loading.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
    // Loading
  }
}
</script>
