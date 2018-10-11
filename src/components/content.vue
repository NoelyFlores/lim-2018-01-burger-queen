<template>
<div>
<button-control></button-control>
<product-food></product-food>
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
	props: [],
	data(){

	},
	created(){

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