<template>
<ul class="collapsible">
<label>holaa client</label>
<li  v-for ='item in items' :key ='item.uid' class="collection-item">
<div class="collapsible-header">
<label v-if="dataView =='food'">{{item.category}}</label>
<label v-if="dataView == 'food'" >{{item.type}}</label>
<label>{{item.value}}</label>
<span class="badge">
<span v-if="dataView == 'food'" class="badge">S/. {{item.price}}</span>
<i v-if="dataView =='table'" class="material-icons add"><router-link to="/order">add</router-link></i>
<i @click="completeHmw(item.uid)" class="material-icons done">done</i>
<i @click="deleteTable(item.uid, dataView?dataView:'table')" class="material-icons delete">delete</i>
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
	props: ['dataView'],
	data(){
      return {
				items: [],
        color: '',
				edit: false,
				stateView: 'food'				
      }
	},
	created(){
		this.connection(this.dataView);
	},
	watch: {
		dataView: function (newVal, oldValue) {
			this.stateView = newVal
		}
	},
	computed:{},
	methods:{
		connection (db) {
			let tablesData = firebase.database().ref().child(db?db:'table')			
			tablesData.on('value', data => {
				this.items = data.val()
			})
		},
		deleteTable(uid, db){
			let refDelete = firebase.database().ref(db+'/' + uid)
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

