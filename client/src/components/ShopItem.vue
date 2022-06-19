<template>
	<div class="shop__item shopitem">
		<div class="shopitem__link">
			<img :src="`${ApiInstance}${itemInfo.photo}`" alt="" />
		</div>
		<div class="shopitem__body">
			<h4 class="shopitem__title">{{ itemInfo.name }}</h4>
			<p class="shopitem__text appText">{{ description }}</p>
			<div class="shopitem__price">{{ itemInfo.price }} р.</div>
			<button
				type="button"
				class="shopitem__btn appBtn appBtn--outline"
				@click="addHandler()"
			>
				В корзину
			</button>
		</div>
	</div>
</template>

<script>
import { ApiInstance } from '../config'

export default {
	data: () => ({
		ApiInstance,
	}),
	props: {
		itemInfo: {
			type: Object,
			default: {},
		},
		tile: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		description() {
			return this.itemInfo.item_desc.substring(0, 100) + '...'
		},
	},
	methods: {
		addHandler() {
			this.$store.dispatch('addToCart', this.itemInfo)
		},
	},
}
</script>

<style></style>
