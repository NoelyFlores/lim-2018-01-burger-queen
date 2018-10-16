<template>
  <div class="row">
    <a class="waves-effect waves-light btn-large" @click="viewType('break')">Desayuno</a>
    <a class="waves-effect waves-light btn-large" @click="viewType('lunch')">Almuerzo</a>
    <a class="waves-effect waves-light btn-large" @click="viewType('dinner')">Cena</a>
	<span class="badge"><h5>Mesa {{numTable}}</h5></span>
  </div>
</template>
<script>
/* eslint-disable */
import {EventBus} from "@/plugin/bus.js"
export default {
	name:'button',
	props: ['numTable'],
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
span.badge {
  position: absolute;  
  margin-left: 10% !important;
}
h5 {
  color: #E91E63;
}
</style>