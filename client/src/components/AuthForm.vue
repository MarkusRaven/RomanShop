<template>
  <GDialog 
    v-model="value" 
    max-width="500" 
    :persistent="loading"
  >
    <div class="appModal">
      <header class="appModal__header">
        <button 
          class="appBtn appBtn--text"  
          :class="formType !== 'login' ? 'appBtn--unactive' : null"
          @click="formType = 'login'"
        >Authorization</button>
        <button 
          class="appBtn appBtn--text" 
          :class="formType !== 'registration' ? 'appBtn--unactive' : null"
          @click="formType = 'registration'"
        >Registration</button>
      </header>
      <div class="appModal__body">
        <div class="registration" v-if="formType == 'registration'">
          <p 
            class="appText text-center" 
            :class="classSuccess"
            v-if="$route.params.message"
          >
            {{$route.params.message}}
          </p>
          <Form class="appForm" @submit="Registration()" :validation-schema="schemaRegistration"> 
            <div class="appForm__group">  
              <label for="emailAuth">E-mail</label>
              <Field name="emailAuth" id="emailAuth" type="text" class="appInput" v-model.trim="emailAuth" placeholder="Enter your e-mail"/>
              <ErrorMessage class="appError" name="emailAuth" />
            </div>
            <div class="appForm__group"> 
              <label for="password">Password</label>
              <Field name="password" id="password" type="password" class="appInput" v-model.trim="password" placeholder="Enter your password"  autocomplete="on"/>
              <ErrorMessage class="appError" name="password" />
            </div>
            <div class="appForm__group"> 
              <label for="passwordConfirm">Password Confirmation</label>
              <Field name="passwordConfirm" id="passwordConfirm" type="password" class="appInput" v-model.trim="passwordConfirm" placeholder="Enter your password again"  autocomplete="on"/>
              <ErrorMessage class="appError" name="passwordConfirm" /> 
            </div>
            <div class="appError">
              {{errors}}
            </div>
            <Spinner v-if="loading" class="mt-5"/>
            <button v-else class="appBtn appBtn--small appBtn--outline appModal__btn">REGISTER</button>
          </Form>
        </div>
        <div class="login" v-if="formType == 'login'">
          <p class="appText text-center success" :class="classSuccess"
          v-if="$route.params.message"
          >
            {{$route.params.message}}
          </p>
          <Form class="appForm" @submit="Login()"
            :validation-schema="schemaLogin"> 
            <div class="appForm__group">  
              <label for="emailAuth">E-mail</label>
              <Field name="emailAuth" id="emailAuth" type="text" class="appInput" v-model.trim="emailAuth" placeholder="Enter your e-mail"/>
              <ErrorMessage class="appError" name="emailAuth" />
            </div>
            <div class="appForm__group"> 
              <label for="password">Password</label>
              <Field name="password" id="password" type="password" class="appInput" v-model.trim="password" placeholder="Enter your password" autocomplete="on"/>
              <ErrorMessage class="appError" name="password" />
            </div>
            <div class="appError">
              {{errors}}
            </div>
            <Spinner v-if="loading"/>
            <button v-else class="appBtn appBtn--small appBtn--outline appModal__btn">Login</button>
          </Form>
        </div>
      </div>
    </div>
  </GDialog>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup'
import "gitart-vue-dialog/dist/style.css";
import { GDialog } from "gitart-vue-dialog";
import Spinner from "./ui/Spinner.vue"

export default {
  name: 'AuthForm',
  props: {
    formType: {
      type: String,
      default: 'login',
      validator: (value) => {
        return ['login', 'registration'].indexOf(value) !== -1
      }
    }
  },
  components: {
    GDialog,
    Form,
    Field,
    ErrorMessage,
    Spinner
  },
  data: () => ({
    emailAuth: '',
    password: '',
    passwordConfirm: '',
    errors: '',
    loading: false
  }),
  methods: {
    async Registration(){
      this.loading = true
      let data = {
        email: this.emailAuth,
        password: this.password,
      }
      this.errors = ''
      try{
        await this.$store.dispatch('register', data)
        this.value = false
        this.$router.push('/')
      }catch (err) {
        err && (this.errors = err)
      }
      this.loading = false
    },
    async Login(){
      this.loading = true
      let data = {
        email: this.emailAuth,
        password: this.password,
      }
      this.errors = ''
      try{
        await this.$store.dispatch('login', data)
        await this.$store.dispatch('loadCart')
        this.value = false
        this.$router.push('/profile')
      }catch (err) {
        if(err.response){
          this.errors = err.response.data
        }
      }
      this.loading = false
    }
  },
  computed: {
    schemaRegistration() {
      return yup.object({
        emailAuth: yup.string().required('email обязательное поле').email('введите верный email'),
        password: yup.string().required('пароль обязательное поле'),
        passwordConfirm: yup.string().required('пароль обязательное поле').test('password-confirm', 'пароли не совпадают', value => value === this.password),
      });
    },
    classSuccess(){
      return this.$route.params.check == 'success' ? 'success' : 'error'
    },
    schemaLogin() {
      return yup.object({
        emailAuth: yup.string().required('email обязательное поле').email('введите верный email'),
        password: yup.string().required('пароль обязательное поле'),
      });
    },
    value: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      },
    },
  }
}
</script>

<style>

</style>