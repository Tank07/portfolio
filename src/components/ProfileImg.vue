<template>

    <div class="d-flex justify-content-center align-items-center viewport_scale">
        <div>
            <img src="../assets/images/myselfcv.jpeg" alt="">
        </div>
        <div>
           <h2>Hello. I am</h2>
           <h1>Tancredi Carluccio</h1>
           <div class="d-flex justify-content-end" >
                <vue-typed-js :strings="['Web', 'Frontend', 'Backend']" :loop="true">
                    <h3 class="typing"></h3>
                </vue-typed-js>
                <h3 class="py-1">Developer</h3>
           </div>    
        </div>
    </div>
    
</template>
    
<script>
export default {
  name: 'ProfileImg',

  data() {
        return {
                  
        }
    },

}

</script>

<style scoped >

img{ 
    height: 250px;
    border-radius: 20px;
    margin-right: 20px;
}

h1{
    font-size: 70px;
    font-weight: 900;
}

h2{
    font-size: 50px;
    font-weight: 600;
}

</style>
