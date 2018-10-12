<template>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.uid">
        <td><th>{{item.type}}</th><th>{{item.value}}</th></td>
        <td>S/. {{item.price}}</td>
        <td><i @click="deleteAsk(item.uid)" class="material-icons delete">delete</i></td>
      </tr>
      <tr class="total">
        <td>TOTAL</td>
        <td>S/. {{total}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
/* eslint-disable */
import firebase from 'firebase'
export default {
	name:'request',
	props: [],
	data(){
    return{
      items: [],
      idTable: '',
      total: 0.00

    }
	},
	created(){
    this.$root.$on('ask-food', value => {
      this.idTable = value
      this.connection(value)
    })
    
	},
	watch: {
   items: function () {    
     this.total = 0      
      this.items.map(data => {
        this.total += data.price     
      })
    }
  },
	computed:{
 
  },
	methods:{
    connection(uid){
      let tablesData = firebase.database().ref().child('table/'+uid+'/person')			
			tablesData.on('value', data => {
        const arr = data.val();
        const temp = []
          Promise.all([arr])
        .then(response => {
          response.map(element => {       
            Object.keys(element).map(data => {
            firebase.database().ref().child('food/'+ element[data].food)
            .on('value', food => {
              temp.push(food.val())
              this.items = temp 
              })
            })            
          });
        })
        .catch()
			})
    },
    deleteAsk(uid){
      let refDelete = firebase.database().ref('table/'+this.idTable+'/person')
      refDelete.on('value', data =>{        
          const search = data.val()
        if (search !== null) {
          Object.keys(data.val()).map(data => {
          if(search[data].food === uid){
            firebase.database().ref('table/'+ this.idTable+'/person/'+ data).remove()  
          }
        })
        }else{

        }
      })
    }
	},
	components:{}
}
</script>
<style>
.total {
  background: #26a69a;
  color: #fff;
}
table {
  width: 48% !important;
  margin: .5rem 1rem 1rem 1rem !important;
  border: 1px solid #e1dbdb;
  box-shadow: 0 0 4px 0px #c5c5bd;
  color: #b1a9aa;
}
tr{
  border-bottom: 1px solid #80808030;
}
</style>