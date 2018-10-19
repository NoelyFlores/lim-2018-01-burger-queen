<template>
<div class="row">
<div class= "title">
<h5>Insertar Comida</h5>	
</div>	
<form class="col s12">
<div class="box-insert">
<select class="browser-default" v-model="category">
<option value="" disabled selected>Categoria</option>
<option value="break">Breakfast</option>
<option value="lunch">Lunch</option>
<option value="dinner">Dinner</option>
</select>
<select class="browser-default" v-model="type">
<option value="" disabled selected>Tipo</option>
<option value="Bebida">Bebida</option>
<option value="Café">Café</option>
<option value="Hamburguesa">Hamburguesa</option>
<option value="Sandwich">Sandwich</option>
<option value="Jugo">Jugo</option>
<option value="Menu">Menu</option>
<option value="Agregado">Agregado</option>
</select>
<div class="input-field col s6">
<input id="first_name2" type="text" class="validate"  v-model="txtfood">
<label class="active" for="first_name2">Nombre</label>
</div>
<div class="input-field col s6">
<input id="first_name2" type="text" class="validate"  v-model="queantity">
<label class="active" for="first_name2">Cantidad</label>
</div>
<div class="input-field col s6">
<input id="first_name2" type="text" class="validate" v-model="price">
<label class="active" for="first_name2">Precios</label>
</div>
<p>{{message}}</p>
<div class="box-container-button">
<span @click="insert()" > <i class="material-icons add">add</i></span>
<span @click="clean()"><i class="material-icons clean">replay</i></span>
</div>
</div>
</form>
<div class="box-list">
<list-mesa :dataOption="food"></list-mesa>
</div>
</div>
</template>
<script>
/* eslint-disable */ 
import listTable from '@/components/listTable'
import firebase from 'firebase'

export default {
	name:'food',
	props: [],
	data(){
		return {
			txtfood: '',
			message: '',
			price: '',
			food:'food',
			category: '',
			type: '',
			queantity:''
		}
	},
	created(){	
	},
	watch: {},
	computed:{},
	methods:{
		insert(){
			if(this.txtfood !== '' && this.price !== ''&& this.category !== ''){
				const num = parseInt(this.price)
				let newKey = firebase.database().ref().child('food').push().key;
				const number = (parseInt(this.price) + 1)
				if(number >= 1){
					firebase.database().ref('food/' + newKey).set({value:this.txtfood, type: this.type, category: this.category,queantity:this.queantity,price: num, uid:newKey})
					this.message = ''
					this.txtfood = ''
					this.price = ''
					this.category= ''
			}else{				
				
					this.message='Not number'
			}
			}else{
					this.message='Insert all description'
			}
		}
	},
	components: {
	 'list-mesa': listTable
  }
}
</script>
<style>
.input-field.col label {
  margin-top: -8px !important;
}
.row .col.s12{
  width: 45%;
  float: left;
}
.box-container-button{
  display: inline-block;
  margin: 1px;
}
.material-icons{
	cursor: pointer;
}
.box-list {
    width: 50%;
    margin: 0% 5% 0% 45%;
}
.box-insert {
    border-radius: .4em !important;
    width: 80% !important;
    margin: 0% 10%;
}
.collapsible-header i {
    margin-right: 0rem;
}
.col.s6 {
	width: 100% !important;
	display: inline-flex;
    outline: none !important;
    margin-top: 30px;
}
input {
	border-radius: .4em !important;
    border: .5px solid #1c77c3  !important;
    width: 100% !important;
    margin: 0% !important;
    padding: 0em .5em !important;
}
.col{
	flex:none !important
}
select {
	float: left;
    margin: 0em .2em;
	border-radius: .4em;
	border-color: #1c77c3 ;
	color: #9e9e9e;
	width: 48%;
}
input:active{
	background: red	
}
@media(max-width: 600px){
	.box-list {
	width: 100%;
	margin: 0% 0%;
}
.collapsible-header {
    padding: 1rem 0em !important;
}
}

@media(max-width: 480px){
	.box-container-txt {
    width: 75%;
	}
	.box-insert, .box-list{
	  width: 100% !important;
    margin: 0% 0%;
  }	
}

</style>
