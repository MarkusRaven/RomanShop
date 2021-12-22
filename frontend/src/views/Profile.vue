<template>
  <main class="profile"> 
    <div class="profile__row">
      <div class="profile__sitebar">
        <button class="appBtn appBtn--meduim full" @click="tab = 1" :class="tab == 1 ? '' : 'appBtn--outline'">
          Order history
        </button>
        <button class="appBtn appBtn--meduim full" @click="tab = 2" :class="tab == 2 ? '' : 'appBtn--outline'">
          Personal data
        </button>
        <button class="appBtn appBtn--meduim full" @click="tab = 3" :class="tab == 3 ? '' : 'appBtn--outline'">
          support
        </button>
        <button class="appBtn appBtn--meduim full" @click="logout()" :class="tab == 4 ? '' : 'appBtn--outline'">
          Go out
        </button>
      </div>
      <div class="profile__content content" v-if="tab == 1">
        <header class="content__header">
          Order history
        </header>
        <div class="content__body">
          <template v-if="orders.length">
          <div class="history">       
            <div class="history__item itemSmall" v-for="item in orders" :key="item.id">
              <img src="../assets/img/order1.png" alt="" class="itemSmall__img">
              <div class="itemSmall__info">
                
                <h4 class="itemSmall__title">
                  <span 
                  v-for="subitem in item.cart.related_items"
                  :key="subitem.id"
                  >
                    {{subitem.item.title}},
                  </span>
                  </h4>
                <ul class="itemSmall__list">
                  <li>Order №: {{item.id}}</li>
                  <li>date: {{item.updated.split('T')[0]}}</li>
                </ul>
                <div class="itemSmall__price">
                  <span class="itemSmall__priceinfo">€ {{item.cart.final_price}}</span>
                </div>
              </div>
            </div>
          </div>
          </template>
          <template v-else>
            <div class="historyEmpty">
              <p class="content__title">You don't have any orders at the moment</p>
              <p class="appText">Fix it by simply ordering a stone!</p>
              <router-link to="/tiles" class="appBtn">START SHOPPING</router-link>
            </div>      
          </template>
        </div>
      </div>
      <div class="profile__content content" v-if="tab == 2">
        <header class="content__header">
          Personal data
        </header>
        <div class="content__body">
          <Form 
            class="appform profileForm"
            @submit="saveChange()"
            :validation-schema="schema"
          >
            <div class="appForm__billingWrap">
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="fname">First name</label>
                  <Field v-model="first_name" name="first_name" id="first_name" type="text" class="appInput" placeholder="Enter the full name"/>
                  <ErrorMessage class="appError" name="first_name" />
              </div>
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="lname">Last name</label>
                  <Field v-model="last_name" name="last_name" id="last_name" type="text" class="appInput" placeholder="Enter the last name"/>
                  <ErrorMessage class="appError" name="last_name" />
              </div>
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="email">E-mail</label>
                  <Field v-model="email" name="email" id="email" type="email" class="appInput" placeholder="example@mail.com"/>
                  <ErrorMessage class="appError" name="email" />
              </div>
              <div class="appForm__group appForm__group--col appForm__group--3"> 
                  <label for="Telephone">Telephone</label>
                  <Field v-model="phone" name="phone" id="phone" type="phone" class="appInput" placeholder=""/>
                  <ErrorMessage class="appError" name="phone" />
              </div>
              <!-- <div class="appForm__group appForm__group--col appForm__group--3"> 
                  <label for="fname">Date of birth</label>
                  <input name="date" id="date" type="date" class="appInput" placeholder="01.01.1000"/>
              </div> -->
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="password">Password</label>
                  <input name="password" id="password" type="password" class="appInput" placeholder="********"/>
                  <button class="appLink">Change Password</button>
              </div>
            </div>
            <div class="appError" v-for="(error, index) in errors" :key="index">
              <div class="" v-for="(err, index1) in error" :key="index1">
                {{ err }}
              </div>
            </div>
            <button class="appBtn appBtn--meduim profileForm__btn" type="submit">SAVE CHANGES</button>
          </Form>
        </div>
      </div>
      <div class="profile__content content" v-if="tab == 3">
        <header class="content__header">
          Support
        </header>
        <div class="content__body">
          <form class="appform profileForm">
            <div class="appForm__billingWrap">
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                <label for="question">Ask a question</label>
                <textarea name="question" id="question" type="text" class="appInput" placeholder="Ask the question in a detailed form (preferably in more detail)..." v-model="help"></textarea>
                <p class="appText profileForm__notise">The answer will be sent to the post office*</p>
              </div>
            </div>
            <div class="appForm__billingWrap">
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="email">E-mail</label>
                  <input name="email" id="email" type="email" class="appInput" placeholder="example@mail.com" v-model="email">
              </div>
            </div>
            <div class="appError" v-for="(error, index) in errors" :key="index">
              {{index}}:
              <div class="" v-for="(err, index1) in error" :key="index1">
                {{ err }}
              </div>
            </div>
            <button class="appBtn appBtn--meduim profileForm__btnSend" @click.prevent="sendHelp">SEND</button>
          </form>
        </div>
      </div>    
    </div>
  </main>
</template>

<script>
import {mapGetters} from "vuex"
import {getOrders, support} from '@/api/shop'
import { Form, Field, ErrorMessage, useValidateForm  } from 'vee-validate';
import * as yup from 'yup'

export default {
  data: () => ({
    tab: 1,
    orders: [],
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    errors: '',
    help: ''
  }),
  async mounted(){
    this.orders = await getOrders()
    this.first_name = this.user.first_name
    this.last_name = this.user.last_name
    this.email = this.user.email
    this.phone = this.user.phone
    console.log(this.user)
  },
  methods: {
    async logout(){
      await this.$store.dispatch('logout')
      await this.$store.dispatch('loadCart')
      this.$router.push('/')
    },
    async saveChange(){
      this.errors = []
      try{
        await this.$store.dispatch('userUpd', {
          id: this.user.id,
          fields: {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone,
          },
        })
        alert('success')
      }catch(err){
        if(err.response){
          this.errors = err.response.data
        }
      }
    },
    async sendHelp(){
      this.errors = []
      try{
        await support({
          subject: this.help,
          message: this.help,
          email: this.email
        })
        alert('success')
      }catch(err){
        if(err.response){
          this.errors = err.response.data
        }
      }
      
    }
  },
  computed: {
    ...mapGetters(['cart', 'user']), 
    schema() {
      return yup.object({
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        email: yup.string().required().email(),
        phone: yup.number().required(),
      });
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
}
</script>

<style lang="less">
@import '../assets/less/profile.less';

</style>