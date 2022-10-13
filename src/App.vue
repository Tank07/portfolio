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

<style >

@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');

.container {
  font-family: 'Titillium Web', sans-serif;
}

.viewport_scale{
    height: 100vh;
}

</style>
