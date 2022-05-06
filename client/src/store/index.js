import { createStore } from 'vuex'
import auth from './auth'
import {getCartUser, getOneItem, addToCard, deleteCartItemFetch} from '@/api/shop'

export default createStore({
  state: {
    cart: {
      cartCount: 0, 
      cart: [], 
      endedPrice: 0
    }, 
  },
  mutations: {
    setCart(state, cart){
      state.cart = cart
    },
  },
  actions: {
    async deleteCartItem({commit}, id){
      let cart = {}
      if(Object.keys(this.state.auth.token).length){
        console.log('delete from server cart')
        await deleteCartItemFetch(id)
        cart = await getCartUser()       
      }else{
        console.log('delete from localcart')
        cart = JSON.parse(localStorage.getItem('cart')) 
        let index = cart.cart.findIndex(item => item.id == id)
        cart.cart.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(cart))    
      }
      commit('setCart', cart)
    },
    async addToCart({commit}, item){
      let cart = {}    
      if(Object.keys(this.state.auth.token).length){
        console.log('add to server cart')
        await addToCard({
          ...item,
          productId: item.id
        })
        cart = await getCartUser()
      }else{
        console.log('add to local cart')
        cart = JSON.parse(localStorage.getItem('cart'))
        const newItem = {
          ...item,
          product: item,
          productId: item.id
        }
        cart.cart.push(newItem)
        localStorage.setItem('cart', JSON.stringify(cart))    
      }
      
      commit('setCart', cart)
    },
    async loadCart({commit}){
      let cart = {} 
      let items = []
      cart = JSON.parse(localStorage.getItem('cart'))
      if(this.state.auth?.token){
        console.log('auth cart')
        // проверяем на наличие товаров в локальной корзине
        if(cart.cartCount){
          console.log('check local cart')
          items = cart.cart
          this.dispatch('clearCart')
          // если нашли товары в локальной корзине, отпраляем на сервер 
          console.log(items)
          for(let res of items){
            await addToCard({
              ...res,
            })
            console.log(res, 'add to cart')
          }
        }
        // получаем корзину
        cart = await getCartUser()
        console.log('get cart', cart)
      }else{
        console.log('start local cart')
        if(!cart){
          console.log('!!!start local cart')
          cart = {cartCount: 0, cart: []}
          localStorage.setItem('cart', JSON.stringify(cart))
        }
      }
      commit('setCart', cart)
    },
    clearCart({commit}){
      let cart = {
        cartCount: 0, 
        cart: [], 
      }
      localStorage.setItem('cart',JSON.stringify(cart))
      commit('setCart', cart)
    }
  },
  getters: {
    cart: state => state.cart,
    totalItems: state => state.cart.cart?.length || 0,
    totalPrice: state => state.cart?.cart.reduce((sum, res) => {
      return parseInt(sum)  + parseInt(res.price)
    }, 0) || 0
  },
  modules: {
    auth,
  }
})
