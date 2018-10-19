<template>
<ul class="collapsible">
<li  v-for ='item in items' :key ='item.uid' v-if="item.category==dataView.type" class="collection-item">
<div class="collapsible-header">
<label>{{item.type}}</label>
<label>{{item.value}}</label>
<label>{{item.queantity?item.queantity:''}}</label>
<span class="badge">
<span class="badge">S/. {{item.price}}.00</span>
<i @click="pedir(item.uid)" class="material-icons done">done</i>
</span>
</div>
</li>
</ul>
</template>
<script>
/* eslint-disable */
import firebase from "firebase"
import {EventBus} from "@/plugin/bus.js"
export default {
  name: 'product',
  props: ['dataView'],
  data(){
    return {
      items: [],
      color: '',
      hide:false
    };
  },
  created () {
    this.connection('food')
  },
  watch: {},
  computed: {},
  methods: {
    connection (db) {
      let tablesData = firebase
        .database()
        .ref()
        .child(db ? db : 'table')
      tablesData.on('value', data => {
        this.items = data.val()
      })
    },
    pedir (uid) {
      const newKey = firebase.database().ref().child('table/'+this.dataView.userId+'/person').push().key
      firebase.database()
      .ref('table/'+this.dataView.userId+'/person/' + newKey)
      .set({food: uid})
      .then(data => {
        firebase.database().ref('table/'+this.dataView.userId).update({state:'pendiente'})
        EventBus.$emit('ask-food', { uid:this.dataView.userId })
      })
    },
    comprovar () {
      firebase
        .database()
        .ref()
        .child('table/'+this.dataView.userId+'/person')
        .on('value', data => {
          const platos = data.val()
          // si este id esta en la lista no agregar punto!!!!
        })
    }
  },
  components: {}
}
</script>
<style scoped>
.hide {
  background: red
}
.color {
  background-color: #babebe75;
}
.color label {
  text-decoration: line-through;
  color: #6a6c6d;
}
.c-white {
  background-color: white;
}
.material-icons input {
  width: 70% !important;
  background: red !important;
}
#edit {
  background: blue;
}
.collapsible {
    margin: 0rem 1.5% 1rem 3.5% !important;
    width: 45% !important;
    float: left;
}
</style>
