<template>
  <main class="cart appWrapper">
    <div class="breadcrumbs">
      <router-link to="home" class="breadcrumbs__link appText">{{$t('home')}}</router-link>
      <span>/</span>
      <a class="breadcrumbs__active">{{$t('deinsteindesign')}}</a>
    </div>
    <div class="cart__row">
      <div class="cart__info">
        <h1 class="cart__title appTitle appTitle--left">
          My Shopping cart
        </h1>
        <p class="appText">
          Please choose a payment method
        </p>
        <div class="cart__items">
          <div class="cart__item itemSmall" v-for="item in cart.related_items" :key="item.id">
            <img 
              src="../assets/img/close.svg" 
              class="itemSmall__close"
              @click="deleteItem(item)"
            >
            <img src="../assets/img/cartimg.png" alt="" class="itemSmall__img">
            <div class="itemSmall__info">
              <h4 class="itemSmall__title">{{item.item.title}}</h4>
              <p class="itemSmall__desc">
                Shower tray silver sparkie granite stone.
              </p>
              <div class="itemSmall__count">
                  <span>1pcs</span>
                  <span>|</span>
                  <span>Pcs</span>
                </div>
              <div class="itemSmall__price">
                <p>Price:</p> 
                <span class="itemSmall__priceinfo">€ {{item.item.price}}</span> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart__total total">
        <h4 class="total__title">
          Total:
        </h4>
        <div class="total__price price">
          <div class="price__info">
            <p><b>Total Order</b></p>
            <p>Guaranteed Readiness day: August 21, 2021</p>
          </div>
          <div class="price__count">
            {{cart.final_price}} EUR
          </div>
        </div>  
        <button 
          class="appBtn appBtn--outline total__btn"
          @click="$router.push('/payment')"
        >
          Proceed to checkout
        </button>     
      </div>
    </div>
    
  </main>  
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: 'Cart',
  mounted(){
    console.log(this.cart)
  },
  methods: {
    deleteItem(item){
      this.$store.dispatch('deleteCartItem', {
        CIid: item.id, 
        Iid: item.item.id
      })
    }
  },
  computed: {
    ...mapGetters(['cart']),
  }
}
</script>

<style lang="less">
@import '../assets/less/cart.less';

</style>