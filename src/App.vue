<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <button @click='goHome'>HOME</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  methods:{
    goHome(){
      console.log('gohome');
      if (this.$route.path !== '/home') {
        console.log('---');
        this.$router.replace('/home')
      }
    }
  }
}
</script>

<style>

</style>