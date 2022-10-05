<template>

<div class="container">

	<div v-for="item in projects" v-bind:key="item.name">
	<h3>{{item.name}}</h3>
    <h4>{{item.image}}</h4>
	<h5>{{item.description}}</h5>
		<div>
			<span class="mx-2" v-for="banana, i in item.techsUsed" :key="i">{{ banana }}</span>
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
					image: "IMMAGINE",
					description: "A recreation of the popular website 'AirBnb'",
					techsUsed: ["HTML", "CSS","Bootstrap","Javascript","VueJs","PHP","Laravel"]
				},
				{
					name: "Dc Comics Homepage",
					image: "IMMAGINE",
					description: "lorem ipsum",
					techsUsed: ["HTML", "CSS", "SCSS","Bootstrap","Javascript","VueJs","PHP","Laravel"]
				},
                {
					name: "BoolFlix",
					image: "IMMAGINE",
					description: "lorem ipsum",
					techsUsed: ["HTML", "CSS","Bootstrap","Javascript","VueJs"]
				},
                {
					name: "BoolZapp",
					image: "IMMAGINE",
					description: "lorem ipsum",
					techsUsed: ["HTML", "CSS","Bootstrap","Javascript","VueJs"]
				},
                {
					name: "Spotify",
					image: "IMMAGINE",
					description: "lorem ipsum",
					techsUsed: ["HTML", "CSS","Bootstrap","Javascript","VueJs"]
				},
                {
					name: "Playstation",
					image: "IMMAGINE",
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
    