<template>
  <main class="payment" ref="payment">
    <div class="payment__wrapper">
      <div class="payment__row">
        <div class="payment__info">   
          <Form class="payment__form appForm" @submit="completeOrder()" :validation-schema="schema" ref="myForm">            
            <div class="appForm__step">
              <h2 class="appTitle appTitle--left mt-0">
                {{$t('BillingH1')}}
              </h2>
              <p class="appText">
                {{$t('Pleaseр2')}}
              </p>
              <div class="appForm__billingWrap">
                <div class="appForm__group appForm__group--full appForm__group--col ">
                  <label for="fio">ФИО</label>
                  <Field id="fio" name="fio" type="fio" class="appInput" v-model.trim="order.full_name" placeholder="ФИО"/>  
                  <ErrorMessage class="appError" name="fio" />
                </div>
                <div class="appForm__group appForm__group--half appForm__group--col ">
                  <label for="email">{{$t('Email')}}</label>
                  <Field id="email" name="email" type="email" class="appInput" v-model.trim="order.email" :placeholder="$t('Email')"/>  
                  <ErrorMessage class="appError" name="email" />
                </div>
                <div class="appForm__group  appForm__group--half appForm__group--col">
                  <label for="Phone">{{$t('Phone')}}</label>
                  <Field id="Phone" name="Phone" type="Phone" class="appInput" v-model.trim="order.tel" :placeholder="$t('Phone')"/>  
                  <ErrorMessage class="appError" name="Phone" />
                </div> 
                <div class="appForm__group  appForm__group--half appForm__group--col">
                  <label for="Address">{{$t('Address')}}</label>
                  <Field id="Address" name="Address" type="Address" class="appInput" v-model.trim="order.address.address" :placeholder="$t('Address')"/>  
                  <ErrorMessage class="appError" name="Address" />
                </div>
                <div class="appForm__group  appForm__group--half appForm__group--col">
                  <label for="Postal">{{$t('Postal')}}</label>
                  <Field id="Postal" name="Postal" type="Postal" class="appInput" v-model.trim="Postal" :placeholder="$t('Postal')"/>  
                  <ErrorMessage class="appError" name="Postal" />
                </div>
              </div>
            </div> 
            <div class="appForm__step">
              <h2 class="appTitle appTitle--left">
                {{$t('ConfirmationH1')}}
              </h2>
              <p class="appText">
                {{$t('Weare')}}
              </p>
              <div class="appCheckbox groupCheckbox full">
                <div> 
                  <Field name="With" id="With" type="checkbox" v-model="With"/>
                  <label for="With">{{$t('With')}}</label>
                </div>
              </div>
                <ErrorMessage class="appError" name="With" />
            </div>  
            <button 
              class="appForm__btn appBtn appBtn--outline"
            >Complete order</button>
          </Form> 
        </div>
        <div class="payment__order order">
          <h2 class="appTitle appTitle--left order__title">Ваш заказ</h2>
          <p class="appText order__text">Цена может варьироваться в зависимости от способа доставки и налогов вашего города.</p>
          <div class="order__item itemSmall" v-for="item in cart.cart" :key="item.id">
            <img 
              :src="`${ApiInstance}${item.product?.photo[0]}`" 
              class="itemSmall__img"
            >
            <div class="itemSmall__info">
              <h4 class="itemSmall__title">{{item.name}}</h4>
              <div class="itemSmall__price">
                <span class="itemSmall__priceinfo">{{item.price}} р.</span>
              </div>
            </div>
          </div>
          <div class="total__price price">
            <div class="price__info">
              <p><b>Итог:</b></p>
            </div>
            <div class="price__count">
              {{totalPrice}} р.
            </div>
          </div>  
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapGetters} from "vuex"
import { Form, Field, ErrorMessage  } from 'vee-validate';
import * as yup from 'yup'
import { ApiInstance } from '../config'
import { orderAdd, orderPay } from '../api/shop'

export default {
  data() {
    return { 
      ApiInstance,
      order: {
        tel: '',
        full_name: '',
        obtain: '',
        address: {address: ''},
      },
      Postal: '',
      With: false,
      loaded: false,
    }
  },
  mounted(){
    this.product.price = this.cart.final_price > 0 ? this.cart.final_price : '200'
  },
  methods: {
    async completeOrder(){
      if(this.cart.cart.length > 0){
        try {
          const orderInfo = await orderAdd({
            ...this.order,
            price: this.totalPrice,
            obtain: "CDEK"
          })
          
          const orderId = new FormData
          orderId.append('id', orderInfo.id)
          const payInfo = await orderPay(orderId)
          window.location.href = payInfo.confirmation.confirmation_url
        } catch(e) {
          console.log(e)
        }
      }else{
        alert('add product in cart')
      }
    },
  },
  computed: {
    ...mapGetters(['cart', 'isLoggedIn', 'totalPrice']),
    schema() {
      return yup.object({
        fio: yup.string().required('фио обязательное поле'),
        email: yup.string().required('email обязательное поле').email('неверный email'),
        Phone: yup.string().required('телефон обязательное поле'),
        Address: yup.string().required('адрес обязательное поле'),
        Postal: yup.string().required('почтовый индекс обязательное поле'),
        With: yup.boolean().oneOf([true], "Необходимо принять политику конфиденциальности"),
      });
    },
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
}
</script>

<style lang="less">
@import '../assets/less/payment.less';

</style>