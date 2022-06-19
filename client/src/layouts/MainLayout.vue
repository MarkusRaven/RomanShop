<template>
  <div>
    <header>
      <nav class="mainnav">
        <div 
          class="mainnav__mobileMenu mobileMenu"
        >
          <router-link to="/" class="mobileMenu__logo">
            <img src="../assets/img/logo.jpg" alt="">
          </router-link>
          <img 
            class="mobileMenu__menu" 
            src="../assets/img/burger.png"
            @click="menu = !menu"
          >
        </div>
        <div 
          class="mainnav__wrapper" 
          :class="menu && 'mainnav__open'"
        >
          <ul class="mainnav__list">
            <router-link to="/" class="mainnav__logo">
              <img src="../assets/img/logo.jpg" alt="">
            </router-link>
            <li class="mainnav__item">
              <router-link to="/" class="mainnav__link">Главная</router-link>
            </li>
            <li class="mainnav__item">
              <router-link to="/Tiles" class="mainnav__link">Каталог</router-link>
            </li>
          </ul>
          <div class="mainnav__icon icon">
            <a @click="onOpen()"> 
              <img src="../assets/img/user.png" alt="" width="30">
            </a>
            <router-link to="/cart">
              <img src="../assets/img/cart.png" alt="" width="30">
              <div class="icon__counter">{{totalItems}}</div> 
            </router-link>
            <a href="https://vk.com/diana_gn">
              <img src="../assets/img/vk.png" alt="" width="30">
            </a>
            <a href="https://vk.com/away.php?to=https%3A%2F%2Finstagram.com%2Fcrea_tegood%3Figshid%3DYmMyMTA2M2Y%3D&cc_key=">
              <img src="../assets/img/inst.png" alt="" width="30">
            </a>
          </div>
          <button 
            class="appBtn appBtn--small mainnav__logout" 
            @click="logout()"
            v-if="isLoggedIn"
          >
            Выйти
          </button>
        </div>
      </nav>
    </header>
    <!-- main -->
    <router-view />
    <!-- footer -->
    <footer class="mainfooter">
        <div class="mainfooter__politic">
          <p class="mainfooter__politicText">Copyright © 2021 CREATE GOOD. Все права защищены</p>
          <div class="mainfooter__politicWrap">
            <span class="mainfooter__politicText">+7 (937) 362-70-24</span>
            <span class="mainfooter__politicText">Уфа,ул.Островского 16/1</span>
          </div>
        </div>
    </footer>
    <auth-form v-model="show" :formType="formType"></auth-form>
  </div>
</template>

<script>
import AppSelect from '../components/ui/AppSelect.vue'
import {mapGetters} from "vuex"
import AuthForm from "@/components/AuthForm"


  export default {
    data: () => ({
      items: [{name: 'de'}, {name: 'ru'}, {name: 'eng'}],
      lang: {name: 'ru'},
      show: false,
      formType: 'login', 
      menu: false
    }),
    watch: {
      "$route.path"() {
        this.menu = false
      },
      "$route.params"(value) {
        if(value.login){
          this.show = true
          this.formType = 'login'
        }
        if(value.registration){
          this.show = true 
          this.formType = 'registration'
        }
      }
    },
    methods: {
      setLocale(event){
        this.lang = event
        this.$i18n.locale = event.name
      },
      onOpen() {
        this.isLoggedIn ? 
          this.$router.push('/profile')
        :
          this.show = true
      },
      async logout(){
        await this.$store.dispatch('logout')
        await this.$store.dispatch('loadCart')
        this.$router.push('/')
      },
    },
    components: {
      AppSelect,
      AuthForm,
    },
    computed: {
      ...mapGetters(['isLoggedIn', 'totalItems']),
    }
  }
</script>

<style lang="less" >

</style>