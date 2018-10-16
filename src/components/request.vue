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
      <tr v-for="(item, index) in items" :key="index">
        <td><th>{{item.type}}</th><th>{{item.value}}</th></td>
        <td>S/. {{item.price}}</td>
        <td><i @click="remove(item.index)" class="material-icons delete">delete</i></td>
      </tr>
      <tr class="total">
        <td>TOTAL</td>
        <td>S/. {{total}}</td>
      </tr>
    </tbody>
    <input @click="send(items,total)" v-if="items.length >= 1" type="button" :disabled="stateButton" value="Finalizar Orden" class="send">
    <i  v-if="message == true" class="material-icons done">done</i>
  </table>
</template>
<script>
/* eslint-disable */
import firebase,{ app } from 'firebase'
import {EventBus} from "@/plugin/bus.js"
export default {
	name:'request',
	props: ['uidTable'],
	data(){
    return{
      items: [],
      idTable: '',
      total: 0.00,
      stateButton:true,
      message: false
    }
	},
	created(){
    EventBus.$on('ask-food', value => {
      this.idTable = value.uid      
    })
    this.connection(this.uidTable)
        firebase.database().ref().child('table/'+this.uidTable + '/state/')
      .on('value', state => {
        if(state.val() === 'ocupado'){
          this.stateButton = false
          this.message = true
        }else{
          this.message = false
        }
      })
  },
  beforeDestroy(){
     EventBus.$off()
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
        const arr = data.val()
        if(arr !== null ){
        const temp = []
          Promise.all([arr])
        .then(response => {
          response.map(element => {                   
            Object.keys(element).map(data => {
            firebase.database().ref().child('food/'+ element[data].food)
            .on('value', food => {
              temp.push(food.val())  
              Object.defineProperty(temp[temp.length-1], 'index', {value:temp.length, writable:true, configurable:true, enumerable:true} )
              this.items = temp
              })
            })            
          })
        })
        .catch()
        }else{
          this.items = []
          firebase.database().ref('table/'+uid).update({state:'desocupado'})
        }
			})
    },
    remove(index){
      const arrayItems = this.items
      const data = arrayItems.filter(data => data.index === index)
      firebase.database().ref('table/'+this.idTable+'/person')
      .once('value', data=> {       
       firebase
       .database()
       .ref('table/'+ this.idTable+'/person/'+ Object.keys(data.val())[index-1])
       .remove()  
      })
    },
    send(items, total) {  
      const dt = new Date()
      const date = dt.getDate() + '-' + (dt.getMonth()+1) + '-' + dt.getFullYear()
      const key = firebase.database().ref().child('kitchen/' + date + '/' + this.idTable).push().key
      const array = items.map(data => data.uid)
      firebase.database()
      .ref('kitchen/' + date + '/' + this.idTable+'/'+ key)
      .set({total: total, platos: array})
      .then(dta => {
        firebase.database().ref('table/'+this.uidTable + '/person').remove()
        this.message = false
        this.$router.push('/')
      }
      )
    }
	},
	components:{}
}
</script>
<style>
.send{
  background:#FFEB3B;
  border:1px solid #26a69a;
  color: #26a69a;
  padding: 1em;
}
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
tr {
  border-bottom: 1px solid #80808030;
}
.done {
  color:#26a69a;
  margin-left: 10px;
}
</style>