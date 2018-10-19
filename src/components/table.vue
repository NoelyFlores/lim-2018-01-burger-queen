<template>
<div class="row">
<div class= "title">
<h5>Insertar Mesas</h5>	
</div>
<form class="col s12">
<div class="box-insert">
<div class="box-container-txt">
<input  v-model="txtNumber" @keyup.enter="insert()" type="text" placeholder="Number table">
<p>{{message}}</p>
</div>
<div class="box-container-button">
<span @click="insert()" ><i class="material-icons add">add</i></span>
<span @click="clean()"><i class="material-icons clean">replay</i></span>
</div>
</div>
</form>
<div class="box-list">
<list-mesa :dataView="table"></list-mesa>
</div>
</div>
</template>
<script>
/* eslint-disable */ 
import listTable from '@/components/listTable'
import firebase from 'firebase'
export default {
	name:'table',
	props: [],
	data(){
		return {
			txtNumber: '',
            message: '',
            table: 'table'
		}
	},
	created(){

	},
	watch: {

	},
	computed:{

	},
	methods:{
		insert(){
			if(this.txtNumber !== ''){
				const num = parseInt(this.txtNumber)
				let newKey = firebase.database().ref().child('table').push().key;
				
				const type = (parseInt(this.txtNumber) + 1)			
				console.log(typeof type);	
				if(type >= 1){
					console.log('si')
					firebase.database().ref('table/' + newKey).set({value:num, state: 'desocupado', uid:newKey})
					this.message = ''
					this.txtNumber = ''
			}else{				
				console.log('no');
				
					this.message='Not number'
			}
			}else{
					this.message='Insert a number of table'
			}
		}
	},
	components: {
	 'list-mesa': listTable
  }
}
</script>
<style>
form p{
	text-align: center !important;
}
.box-container-txt {
  float: left;
  width: 100%;
	height: 50px;
}
.collapsible {
  border-top: none !important;
	border-right: none !important;
	border-left: none !important;
	box-shadow: none !important;
	height: 500px;
  overflow: scroll;
	}
@media (max-width: 480px){
	.box-container-txt {
			width: 75%;
	}
}
</style>
