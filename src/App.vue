<template>
  
  <div class="container" > 
    <NavBar/>
    <ProfileImg/>
    <AboutMe/>
    <ProjectsList/>
  </div>
   
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProfileImg from './components/ProfileImg.vue'
import AboutMe from './components/AboutMe.vue'
import ProjectsList from './components/ProjectsList.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ProfileImg,
    AboutMe,
    ProjectsList
  }
}
</script>

<style lang="scss">

</style>
