<template>
<div class="row">
<a class="waves-effect waves-light btn-large" @click="insertFood()">Insert Food</a>
<a class="waves-effect waves-light btn-large" @click="insertTable()">Insert Table</a>
<div v-if="view ==false">
<list-food></list-food>
</div>
<div v-else>
<list-table></list-table>
</div>
</div>
</template>
<script>
/* eslint-disable */ 
import listTable from '@/components/table'
import listFood from '@/components/food'
export default {
	name:'admin',
	props: [],
	data(){
		return {
			view: false,
			message: '',
		}
	},
	created(){

	},
	watch: {

	},
	computed:{

	},
	methods:{
		insertTable(){
			this.view = true
		},
		insertFood(){
			this.view = false
		}

	},
	components: {
	 'list-table': listTable,
	 'list-food': listFood,
  }
}
</script>
<style scoped>
.row {
    margin-top: 20px;
	}
</style>
