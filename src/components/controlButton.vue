<template>
  <div class="row">
    <a class="waves-effect waves-light btn-large request" @click="viewType('break')">Desayuno</a>
    <a class="waves-effect waves-light btn-large request" @click="viewType('lunch')">Almuerzo</a>
    <a class="waves-effect waves-light btn-large request" @click="viewType('dinner')">Cena</a>
<span class="badge"><h5>M{{numTable}}</h5></span>
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
    position: fixed;
    margin-top: 48%;
    margin-left: -100px;
    z-index: 1;
    bottom: 115px;
}
h5 {
    color: #fff;
    border-radius: 100%;
    background: #ffc200;
    padding: 4em;
}
.request{
	width: 30% !important;
}
</style>