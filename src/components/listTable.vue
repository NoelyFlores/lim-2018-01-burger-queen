<template>
	<ul class="collapsible content local">
		<li v-for ='item in items' :key ='item.uid' class="collection-item">
			<div class="collapsible-header" v-bind:class="[item.state]">
				<div v-if="dataOption =='food'">
				<label>{{item.category}}</label>
				<label>{{item.type}}</label>
				</div>
				<label v-if="alternative == 'table'">Mesa</label>
				<label>{{item.value}}</label>
				<span class="badge">
					<div v-if="dataOption == 'food'" class="optionFood">
						<span class="badge">S/. {{item.price}}.00</span>
						<i @click="edit({
							id:item.uid,
							ctg:item.category,
							ty:item.type,
							name:item.value,
							pr:item.price})"
							class="material-icons add">edit</i>
					</div>
					<i v-if="alternative == 'table'" class="material-icons add" exact><router-link :to="{ name: 'order', params: { userId: item.uid, num: item.value }}">add</router-link></i>
					<i @click="deleteTable(item.uid, dataOption?dataOption:'table')" class="material-icons delete">delete</i>
				</span>
			</div>
		</li>
		<span v-if="alternative == 'table'" class= "badge">
			<label class="active">ocupado</label>
			<label class="process">Proceso</label>
			<label class="libre">Desocupado</label>
		</span>
	</ul>
</template>
<script>
/* eslint-disable */ 
import firebase from 'firebase'
import {EventBus} from '@/plugin/bus.js'
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
		this.connection(this.dataOption)
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
			})
		},
		deleteTable(uid, db){
		  firebase.database().ref(db +'/' + uid).remove()
		},
		edit(items){
			EventBus.$emit('data-edit', items)
		}
	},
	components:{}
}
</script>
<style>
.optionFood{
	display: inline-block;
}
span.badge {
	float: none;
	color: #b1a9aa;
}
	.active{
		color: #8bc34aa3;
	}
	.process{
		color: #FFEB3B
	}
	.libre{
		color: #6a6c6d
	}
	.c-white {
		background-color: white
	}
	.material-icons input{
		width: 70% !important;
	}
	.router-link-active {
    color: #FFC200;
	}
	.pendiente{
	  background: #ffeb3b63;
    color: #8c8787 !important;
	}
	.ocupado{
    background: #8bc34aa3;
    color: #fff !important;
	}
	.desocupado{
	  background: #fff;
	  color: #8c8787 !important
	}
</style>

