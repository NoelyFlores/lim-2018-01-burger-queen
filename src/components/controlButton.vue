<template>
<div class="row">
<a class="waves-effect waves-light btn-large" @click="viewType('break')">Breakfast</a>
<a class="waves-effect waves-light btn-large" @click="viewType('lunch')">Lunch</a>
<a class="waves-effect waves-light btn-large" @click="viewType('dinner')">Dinner</a>
</div>
</template>
<script>
/* eslint-disable */
import {EventBus} from "@/plugin/bus.js"
export default {
	name:'button',
	props: [],
	data(){
		return {}
	},
	created(){

	},
	watch: {

	},
	computed:{

	},
	methods:{
		viewType(value) {
		EventBus.$emit('select-type', value)
		}

	},
	components:{}
}
</script>
<style scoped>
.row {
    margin-top: 20px;
}
</style>