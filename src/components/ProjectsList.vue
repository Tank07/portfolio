<template>

<div class="container">

	<div class="row row-cols-3  text-center">
		<div v-for="item in projects" v-bind:key="item.name">
			<h3>{{item.name}}</h3>
    		<img :src="`${item.image}`" alt="">
			<h5>{{item.description}}</h5>
			<div>
				<span class="mx-2" v-for="banana, i in item.techsUsed" :key="i">{{ banana }}</span>
			</div>
		</div> 
	</div>
	 

</div>
    
</template>
    
<script>
export default {
    name: 'ProjectList',
    
    data() {
        return {
            projects: [
				{
					name: "BoolBnb",
					image: "../assets/images/basicimage.png",
					description: "A recreation of the popular website 'AirBnb'",
					techsUsed: ["HTML", "CSS","Bootstrap","Javascript","VueJs","PHP","Laravel"]
				},
				{
					name: "Dc Comics Homepage",
					image: "",
					description: "lorem ipsum",
					techsUsed: ["HTML", "CSS", "SCSS","Bootstrap","Javascript","VueJs","PHP","Laravel"]
				},
                {
					name: "BoolFlix",
					image: "",
					description: "lorem ipsum",
					techsUsed: ["HTML", "CSS","Bootstrap","Javascript","VueJs"]
				},
                {
					name: "BoolZapp",
					image: "",
					description: "lorem ipsum",
					techsUsed: ["HTML", "CSS","Bootstrap","Javascript","VueJs"]
				},
                {
					name: "Spotify",
					image: "",
					description: "lorem ipsum",
					techsUsed: ["HTML", "CSS","Bootstrap","Javascript","VueJs"]
				},
                {
					name: "Playstation",
					image: "",
					description: "lorem ipsum",
					techsUsed: ["HTML", "CSS","Bootstrap","Javascript","VueJs"]
				},
            ]       
        }
    },
    
}
    
</script>
    
<style scoped >

</style>
    