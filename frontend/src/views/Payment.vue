<template>
  <main class="payment" ref="payment">
    <div class="payment__wrapper">    
      <div class="breadcrumbs">
        <router-link to="/" class="breadcrumbs__link appText">{{$t('home')}}</router-link>
        <span>/</span>
        <a class="breadcrumbs__active">{{$t('Checkout')}}</a>
      </div>
      <div class="payment__row">
        <div class="payment__info">
          
          <Form v-slot="{ meta }" class="payment__form appForm" @submit="completeOrder()" :validation-schema="schema" ref="myForm">            
            
            <div class="appForm__step">
              <h2 class="appTitle appTitle--left mt-0">
                {{$t('BillingH1')}}
              </h2>
              <p class="appText">
                {{$t('Pleaseр2')}}
              </p>
              <div class="appForm__billingWrap">
                <!-- <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="fname">{{$t('First')}}</label>
                  <Field name="fname" id="fname" type="text" class="appInput" v-model.trim="fname" :placeholder="$t('First')"/>
                  <ErrorMessage class="appError" name="fname" />
                </div>
                <div class="appForm__group appForm__group--col appForm__group--half "> 
                  <label for="lname">{{$t('Last')}}</label>
                  <Field name="lname" id="lname" type="text" class="appInput" v-model.trim="lname" :placeholder="$t('Last')" />
                  <ErrorMessage class="appError" name="lname" />
                </div> -->
                <!-- <div class="appForm__group appForm__group--half appForm__group--col ">
                  <label for="email">{{$t('Email')}}</label>
                  <Field id="email" name="email" type="email" class="appInput" v-model.trim="email" :placeholder="$t('Email')"/>  
                  <ErrorMessage class="appError" name="email" />
                </div>-->
                <div class="appForm__group  appForm__group--half appForm__group--col">
                  <label for="Phone">{{$t('Phone')}}</label>
                  <Field id="Phone" name="Phone" type="Phone" class="appInput" v-model.trim="Phone" :placeholder="$t('Phone')"/>  
                  <ErrorMessage class="appError" name="Phone" />
                </div> 
                <div class="appForm__group  appForm__group--half appForm__group--col">
                  <label for="Address">{{$t('Address')}}</label>
                  <Field id="Address" name="Address" type="Address" class="appInput" v-model.trim="Address" :placeholder="$t('Address')"/>  
                  <ErrorMessage class="appError" name="Address" />
                </div>
                <div class="appForm__group appForm__group--half  appForm__group--col">
                  <label for="Town">{{$t('Town')}}</label>
                  <Field id="Town" name="Town" type="Town" class="appInput" v-model.trim="Town" :placeholder="$t('Town')"/>  
                  <ErrorMessage class="appError" name="Town" />
                </div>
                <div class="appForm__group  appForm__group--half appForm__group--col">
                  <label for="Country">{{$t('Country')}}</label>
                  <Field id="Country" name="Country" type="Country" class="appInput" v-model.trim="Country" :placeholder="$t('Country')"/>  
                  <ErrorMessage class="appError" name="Country" />
                </div>
                <div class="appForm__group  appForm__group--half appForm__group--col">
                  <label for="Postal">{{$t('Postal')}}</label>
                  <Field id="Postal" name="Postal" type="Postal" class="appInput" v-model.trim="Postal" :placeholder="$t('Postal')"/>  
                  <ErrorMessage class="appError" name="Postal" />
                </div>
              </div>
              <div class="appForm__groupCheckbox groupCheckbox appCheckbox">
                <Field name="ship" id="ship" type="checkbox"  v-model="ship" />
                <label for="ship">{{$t('Ship')}}</label>
                <ErrorMessage class="appError" name="ship" />
              </div>
            </div>
             
            <div class="appForm__step">
              <h2 class="appTitle appTitle--left">
                {{$t('BillH1')}}
              </h2>
              <p class="appText">
                {{$t('Pleaseр2')}}
              </p>
              <div class="appCheckbox groupCheckbox full">
                <div> 
                  <Field name="delivery" id="FedEx" type="radio"  v-model="FedEx"/>
                  <label for="FedEx">FedEx</label>
                  <ErrorMessage class="appError" name="FedEx" />
                </div>
                <div>
                  <span class="m-r10">+32 EUR</span>
                  <span class="bold">Additional price</span>
                </div>
                <img class="groupCheckbox__img" src="../assets/img/FedEx.svg" alt="">
              </div>
              <div class="appCheckbox groupCheckbox full">
                <div> 
                  <Field name="delivery" id="DHL" type="radio"  v-model="DHL"/>
                  <label for="DHL">DHL</label>
                  <ErrorMessage class="appError" name="DHL" />
                </div>
                <div>
                  <span class="m-r10">+15 EUR</span>
                  <span class="bold">Additional price</span>
                </div>
                <img class="groupCheckbox__img" src="../assets/img/dhl.svg" alt="">
              </div>
            </div>      

            <!-- <div class="appForm__step">
              <h2 class="appTitle appTitle--left">
                {{$t('PaymentH1')}}
              </h2>
              <p class="appText">
                {{$t('Pleaseр2')}}
              </p>
              <div class="appCheckbox groupCheckbox full">
                <div> 
                  <Field name="Credit" id="Credit" type="checkbox"  v-model="Credit"/>
                  <label for="Credit">{{$t('Credit')}}</label>
                  <ErrorMessage class="appError" name="Credit" />
                </div>
                <img class="groupCheckbox__img" src="../assets/img/visa.svg" alt="">
              </div>
              <div class="appCheckbox groupCheckbox full">
                <div> 
                  <input name="PayPal" id="PayPal" type="checkbox"  v-model="paypal"/>
                  <label for="PayPal">{{$t('PayPal')}}</label>
                  <ErrorMessage class="appError" name="PayPal" />
                </div>
                <img class="groupCheckbox__img" src="../assets/img/PayPal.svg" alt="">
              </div>
              <div class="appCheckbox groupCheckbox full">
                <div> 
                  <Field name="GooglePay" id="GooglePay" type="checkbox"  v-model="GooglePay"/>
                  <label for="GooglePay">GooglePay</label>
                  <ErrorMessage class="appError" name="GooglePay" />
                </div>
                <img class="groupCheckbox__img" src="../assets/img/GooglePay.png" alt="">
              </div>
            </div>   -->
            <div class="appForm__step">
              <h2 class="appTitle appTitle--left">
                {{$t('Additional')}}
              </h2>
              <p class="appText">
                {{$t('Need')}}
              </p>
            <div class="appForm__group"> 
              <label for="Need">{{$t('Order')}}</label>
              <textarea name="Need" id="Need" type="text" class="appInput" v-model="Need" :placeholder="$t('Need')"/>
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
                  <Field name="Agree" id="Agree" type="checkbox"  v-model="Agree"/>
                  <label for="Agree">{{$t('Agree')}}</label>
                  <ErrorMessage class="appError" name="Agree" />
                </div>
              </div>
              <div class="appCheckbox groupCheckbox full">
                <div> 
                  <Field name="With" id="With" type="checkbox" v-model="With"/>
                  <label for="With">{{$t('With')}}</label>
                </div>
              </div>
                <ErrorMessage class="appError" name="With" />
            </div>  
            <!-- <button 
              class="appForm__btn appBtn appBtn--outline"
            >Complete order</button> -->
            <div class="paypal__wrapper" v-show="meta.valid" >
              <div ref="paypal"></div>
            </div>
            <div class="appForm__smalltext appText">
              <img src="../assets/img/garant.svg" width="26" height="28" alt="">
              <p class="bold">All your data are safe</p>
              <p class="regular">
                We are using the most advanced security to provide you the best experience ever.
              </p>            
            </div>
          </Form> 
        </div>
        <div class="payment__order order">
          <h2 class="appTitle appTitle--left order__title">Order Summary</h2>
          <p class="appText order__text">The price may vary depending on the delivery method and taxes of your city.</p>
          <div class="order__item itemSmall" v-for="item in cart.related_items" :key="item.id">
            <!-- <img 
              src="../assets/img/close.svg" 
              class="itemSmall__close"
              @click="deleteItem(item)"
            > -->
            <img src="../assets/img/order1.png" alt="" class="itemSmall__img">
            <div class="itemSmall__info">
              <h4 class="itemSmall__title">{{item.item.title}}</h4>
              <ul class="itemSmall__list">
                <li>Delivery: Europa</li>
                <li>Stock: 320 pcs</li>
              </ul>
              <div class="itemSmall__price">
                <span class="itemSmall__priceinfo">€ {{item.item.price}}</span>
                <div class="itemSmall__count">
                  <span>1pcs</span>
                  <span>|</span>
                  <span>Pcs</span>
                </div>
              </div>
            </div>
          </div>
          <div class="total__price price">
            <div class="price__info">
              <p><b>Total Order</b></p>
              <p>Guaranteed Readiness day: August 21, 2021</p>
            </div>
            <div class="price__count">
              {{cart.final_price}} EUR
            </div>
          </div>  
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapGetters} from "vuex"
import { Form, Field, ErrorMessage, useValidateForm  } from 'vee-validate';
import * as yup from 'yup'
import { paypalOrder, Order } from '@/api/shop'


export default {
  data() {
    return { 
      email: '',
      fname: '',
      lname: '',
      Phone: '',
      Address: '',
      Town: '',
      Country: '',
      Postal: '',
      Agree: false,
      With: false,
      paypal: false,
      GooglePay: false,
      Credit: false,
      need: false,
      ship: false,
      DHL: false,
      FedEx: false,
      Need: '',
      loaded: false,
      paidFor: false,
      loaded: false,
      paidFor: false,
      product: {
        price: 777999,
        description: "leg lamp from that one movie",
        img: "./assets/lamp.jpg"
      }
    }
  },
  mounted(){
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AbLwrgEaPeiIpwmFu6rP9rexynquY7H3KT8CrYV2bEejAfhK_q6o31viE4Zr2rtS2mRNe0DNpzvmj339";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
    this.product.price = this.cart.final_price > 0 ? this.cart.final_price : '200'
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;           
            try{       
              if(this.isLoggedIn){
                let cartId = this.$store.getters.cart.id
                await Order({
                  comment: '23312312321312312',
                  paypal_id: order.id,
                  cart: cartId,
                  status: 1
                })
                await this.$store.dispatch('loadCart')
                this.$router.push('/profile')
              }else{ 
                let cartItems = this.cart.related_items.map(item => ({
                  height: item.height,
                  width: item.width,
                  length: item.length,
                  bohrung: item.bohrung,
                  comment: '23312312321312312',
                  qty_item: 0,
                  total_price: item.total_price,
                  ausschnitt: item.ausschnitt,
                  item: item.item.id,
                  armierung: true,
                  ausschnitt: 0,
                  ausklinkung: 0,
                  polierte_kante: true
                }))
                let result = {
                  address: this.Address,
                  city: this.Town,
                  state: this.Country,
                  zip: this.Postal,
                  phone: this.Phone,
                  paypal_id: order.id,
                  email: order.payer.email_address,
                  first_name: order.payer.name.given_name,
                  last_name: order.payer.name.surname,
                  total_items: this.cart.total_items,
                  final_price: this.cart.final_price,
                  cart_items: cartItems,
                }
                let res = await paypalOrder(result)
                this.$store.dispatch('clearCart')
                this.$router.push({name: 'Thanks', params: {info: res.data.detail}})       
              }
            }catch(err){
              console.log(err)
            }
            console.log(order);
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    },
    completeOrder(){
      if(this.cart.related_items.length > 0){
        // this.$router.push({name: 'Paypal', params: {
          // address: this.Address,
          // city: this.Town,
          // state: this.Country,
          // zip: this.Postal,
          // phone: this.Phone
        // }})
      }else{
        alert('add product in cart')
      }
      
    },
    scrollTop(){
      let el = document.querySelector('body')
      el.scrollTo({
          top: el.scrollHeight,
          behavior: "smooth"
      })
    },
    deleteItem(item){
      this.$store.dispatch('deleteCartItem', {
        CIid: item.id, 
        Iid: item.item.id
      })
    }
  },
  computed: {
    ...mapGetters(['cart', 'isLoggedIn']),
    schema() {
      return yup.object({
        // fname: yup.string().required(),
        // lname: yup.string().required(),
        // email: yup.string().required().email(),
        Phone: yup.number().required(),
        Address: yup.string().required(),
        Town: yup.string().required(),
        Postal: yup.string().required(),
        Country: yup.string().required(),
        With: yup.boolean().oneOf([true], "Must Accept Privacy Policy"),
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