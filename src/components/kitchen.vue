<template>
  <div class="row">
    <div v-for ='item in items' :key ='item.uid' class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content black-text">
          <span class="card-title">Mesa {{item.value}}</span>
					<wait-list :uid="item.uid"></wait-list>
        </div>
        <div class="card-action">
          <a @click="cancel()">CANCELAR</a>
          <a @click="changeState(item.uid)">LISTO!</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import waitList from '@/components/waitList'
export default {
	name:'kitchen',
	props: [],
	data(){
		return {
			items: []
		}
	},
	created(){
		this.connection();
	},
	watch: {},
	computed:{},
	methods:{
		connection() {
			firebase.database().ref().child('table')		
			.on('value', data => {
				this.items = data.val()
			})
		},
		changeState(uidTable) {
		// cambiar el estado de la mesa a servido u ocupado!!!
		firebase.database().ref('table/'+uidTable).update({state:'ocupado'})
		}
	},
	components:{'wait-list': waitList}
}
</script>
<style scoped>
	.row .col.m6 {
    width: 33.3%
	}
	.blue-grey.darken-1 {
    background-color: #9e9e9e0d !important
	}
	.card-content {
    padding: 25px 18px !important
	}
</style>