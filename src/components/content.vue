<template>
<div>
<button-control></button-control>
<product-food :dataView="type"></product-food>
<request-list></request-list>
<input type="button" value="">
</div>
</template>
<script>
/* eslint-disable */
import button from '@/components/controlButton'
import product from '@/components/product'
import request from '@/components/request'
export default {
	name:'order',
	props: ['typeView'],
	data(){
		return {
			food:'food',
			type:'break'
		}
	},
	created(){
		this.$root.$on("select-type", val => {
      this.type = val;
    });
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