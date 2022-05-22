<template>
	<main class="cart appWrapper">
		<div class="cart__items">
			<div
				class="cart__item itemSmall"
				v-for="item in cart.cart"
				:key="item.id"
			>
				<img
					src="../assets/img/close.svg"
					class="itemSmall__close"
					@click="deleteItem(item)"
				/>
				<img
					:src="`${ApiInstance}${item.product?.photo}`"
					class="itemSmall__img"
				/>
				<div class="itemSmall__info">
					<h4 class="itemSmall__title">{{ item.product?.name }}</h4>
					<div class="itemSmall__price">
						<p>Цена:</p>
						<span class="itemSmall__priceinfo"
							>{{ item.price }} р.</span
						>
					</div>
				</div>
			</div>
		</div>
		<div class="cart__total total">
			<div class="total__price price">
				<div class="price__info">
					<p><b>Итог:</b></p>
				</div>
				<div class="price__count">{{ totalPrice }} р.</div>
			</div>
			<button
				class="appBtn appBtn--small appBtn--outline total__btn"
				@click="toOrder()"
			>
				Оформить заказ
			</button>
		</div>
	</main>
</template>

<script>
import { mapGetters } from 'vuex'
import { ApiInstance } from '../config'

export default {
	name: 'Cart',
	data: () => ({ ApiInstance }),
	mounted() {
		console.log(this.cart)
	},
	methods: {
		deleteItem(item) {
			this.$store.dispatch('deleteCartItem', item.id)
		},
		toOrder() {
			this.$router.push(
				this.isLoggedIn
					? '/payment'
					: {
							name: 'Home',
							params: {
								login: true,
								message:
									'Для оформления заказа, нужно быть авторизованым',
							},
					  }
			)
		},
	},
	computed: {
		...mapGetters(['cart', 'totalPrice', 'isLoggedIn']),
	},
}
</script>

<style lang="less">
@import '../assets/less/cart.less';
</style>
