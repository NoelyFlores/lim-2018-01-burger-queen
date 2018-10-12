<template>
<ul class="collapsible">
<label>Menu para hoy</label>
<li  v-for ='item in items' :key ='item.uid' v-if="item.category==dataView" class="collection-item">
<div class="collapsible-header">
<label>{{item.type}}</label>
<label>{{item.value}}</label>
<label>{{item.queantity?item.queantity:''}}</label>
<span class="badge">
<span class="badge">S/. {{item.price}}</span>
<i @click="pedir(item.uid)" class="material-icons done">done</i>
</span>
</div>
</li>
</ul>
</template>
<script>
/* eslint-disable */
import firebase from "firebase"
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
      const newKey = firebase.database().ref().child('table/-LO_Mz0M8PYeH3pkPtbT/person').push().key
      firebase.database().ref('table/-LO_Mz0M8PYeH3pkPtbT/person/' + newKey).set({food: uid})
      this.$root.$emit('ask-food', '-LO_Mz0M8PYeH3pkPtbT')       
    },
    comprovar () {
      firebase
        .database()
        .ref()
        .child('table/-LO_Mz0M8PYeH3pkPtbT/person')
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
label {
  font-size: 1rem !important;
  margin: 0em 0.5em;
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
    margin: 0rem 1rem 1rem 1rem !important;
    width: 48% !important;
    float: left;
}
</style>
