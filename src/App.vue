<template>
  
  <div class="container" > 
    <NavBar/>
    <ProfileImg/>
    <AboutMe/>
  </div>
   
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProfileImg from './components/ProfileImg.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ProfileImg,
    AboutMe
  }
}
</script>

<style lang="scss">

</style>
