<template>
  
  <div class="container" > 
    <NavBar/>
    <AboutMe/>
  </div>
   
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AboutMe
  }
}
</script>

<style lang="scss">

</style>
