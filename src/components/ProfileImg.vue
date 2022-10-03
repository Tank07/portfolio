<template>

    <div class="d-flex justify-content-center my-5" >
        <div>
            <img src="../assets/images/myselfcv.jpeg" alt="">
        </div>
        <div class="">
           <h2>Hello. I am</h2>
           <h1>Tancredi Carluccio</h1>
           <div class="d-flex justify-content-end" >
                <vue-typed-js :strings="['Web', 'Frontend', 'Backend']" :loop="true">
                    <h3 class="typing"></h3>
                </vue-typed-js>
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
}

h2{
    font-size: 50px;
}

</style>
