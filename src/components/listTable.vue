<template>
<ul class="collapsible">
<label>holaa client</label>
<li  v-for ='item in items' :key ='item.uid' class="collection-item">
<div class="collapsible-header" v-bind:class="{ 'color': item.state, 'c-white': !item.state}">
<label>{{item.number}}</label>
<label>Mariana Guerra</label>
<span class="new badge">0.00</span>
<span class="badge">
<i v-if="!item.state" class="material-icons add"><router-link to="/admin">add</router-link></i>
<i @click="completeHmw(item.uid)" class="material-icons done">done</i>
<i @click="deleteTable(item.uid)" class="material-icons delete">delete</i>
</span>
</div>
</li>
</ul>
</template>
<script>
/* eslint-disable */ 
import firebase from 'firebase'
export default {
	name:'client',
	props: ['dataList'],
	data(){
      return {
				items: [],
        color: '',
        edit: false
      }
	},
	created(){
		this.connection();
	},
	watch: {

	},
	computed:{},
	methods:{
		connection () {
			let tablesData = firebase.database().ref().child('table')			
			tablesData.on('value', data => {
				this.items = data.val()
			})
		},
		deleteTable(uid){
			let refDelete = firebase.database().ref('table/' + uid)
  		refDelete.remove()
		}
	},
	components:{}
}
</script>
<style>
	.color {
		background-color: #babebe75;;
	}
	.color label{
		text-decoration: line-through;
		color: #6a6c6d;	
	}
	label {
		font-size: 1rem !important;
		margin: 0em .5em;
	}
	.c-white {
		background-color: white
	}
	.material-icons input{
		width: 70% !important;
		background: red !important;
	}
	#edit{
		background: blue;
	}
</style>

