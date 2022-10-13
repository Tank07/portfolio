<template>

<div class="fixed-top z=7 container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light flex justify-content-between ">
    <div>
      <a class="navbar-brand" href="#" >
        <img src="../assets/images/logo_header.svg" alt="">
      </a>
    </div>
    <div class="navbar-nav">
      <a class="nav-link" href="#">About me</a>
      <a class="nav-link" href="#">Projects</a>
      <a class="nav-link" href="#">Resume</a>
      <a class="nav-link" href="#">Contacts</a>
    </div>
  </nav>
</div>


</template>

<script>
export default {
  name: 'NavBar',

  data() {
        return {
                  
        }
    },

}

</script>

<style scoped >

img{
  height: 40px;
  width: auto;
  margin-left: -40px;
}

a{
  font-weight: 600;
}


</style>
