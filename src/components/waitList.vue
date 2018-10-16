<template>
  <ul class="collection">						
		<li v-for="(item, index) in items" :key="index" class="collection-item"> {{item.type}} {{item.value}}</li>		
	</ul>
</template>
<script>
import firebase from 'firebase'
export default {
	name: 'waitList',
	props: ['uid'],
	data() {
		return {
			items: []
		}
	},
	created(){
		this.connection()
	},
	methods:{
		connection() {
			firebase.database().ref().child('table/'+this.uid+'/person')			
			.on('value', data => {
				const arr = data.val()
				if(arr !== null ){
					const temp = []
					Object.keys(arr).map(data => {
						firebase.database().ref().child('food/'+ arr[data].food)
            .on('value', food => {
              temp.push(food.val())  
              this.items = temp
              })
					})
				}else{
					this.items = []
				}
			})
		},
	}
}
</script>