<template>
<ul class="collapsible">
<label>holaa client</label>
<li  v-for ='item in items' :key ='item.uid' class="collection-item">
<div class="collapsible-header">
<label v-if="dataOption =='food'">{{item.category}}</label>
<label v-if="dataOption == 'food'" >{{item.type}}</label>
<label>{{item.value}}</label>
<span class="badge">
<span v-if="dataOption == 'food'" class="badge">S/. {{item.price}}</span>
<i v-if="alternative == 'table'" class="material-icons add" exact><router-link :to="{ name: 'order', params: { userId: item.uid }}">add</router-link></i>
<i class="material-icons done">done</i>
<i @click="deleteTable(item.uid, dataOption?dataOption:'table')" class="material-icons delete">delete</i>
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
	props: ['dataOption'],
	data(){
      return {
				items: [],
        color: '',
				state: false,
				stateView: 'food',
				alternative: this.dataOption?this.dataOption:'table'
      }
	},
	created(){
		this.connection(this.dataOption);
	},
	watch: {
		dataOption: function (newVal, oldValue) {
			this.stateView = newVal
		}
	},
	computed:{},
	methods:{
		connection (db) {
			// muestra la informacion de las mesas de forma automatica 
			let tablesData = firebase.database().ref().child(db?db:'table')		
			tablesData.on('value', data => {
				this.items = data.val()
				const color = data.val()
				for (const key in color) {
					if (color.hasOwnProperty('person')) {
						this.state = true						
					}
				}
			})
		},
		deleteTable(uid, db){
			firebase.database().ref(db+'/' + uid).remove()
		},
		routeContent(uid){
			console.log(this)
			this.$router.push('order/', onComplete )
		},
		haber(uid){
			return uid
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
	}
	.router-link-active {
  color: #f66;
}
</style>

