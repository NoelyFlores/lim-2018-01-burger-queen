<template>
<div>
<button-control :numTable="numTable"></button-control>
<product-food :dataView="{type:type, userId:uidTable}"></product-food>
<request-list :uidTable="uidTable"></request-list>
</div>
</template>
<script>
/* eslint-disable */
import button from '@/components/controlButton'
import product from '@/components/product'
import request from '@/components/request'
import {EventBus} from "@/plugin/bus.js"
export default {
	name:'order',
	props: ['typeView'],
	data(){
		return {
			food:'food',
			type:'break',
			uidTable: this.$route.params.userId,
			numTable: this.$route.params.num
		}
	},
	created(){
	EventBus.$on("select-type", val => {
      this.type = val;
    });
	},
  	beforeDestroy(){
     EventBus.$off()
  	},
	watch: {

	},
	computed:{

	},
	methods:{

	},
	components:{'button-control':button, 'product-food':product, 'request-list': request}
}
</script>
<style>

</style>