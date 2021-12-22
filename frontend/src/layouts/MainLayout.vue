<template>
  <div>
    <header>
      <nav class="mainnav">
        <router-link to="/" class="mainnav__logo">
          <svg width="158" height="111" id="logosite">
            <use xlink:href="../assets/img/DeinSteinLogo.svg#logo"></use>
          </svg>
        </router-link>
        <div class="mainnav__wrapper">
          <ul class="mainnav__list">
            <li class="mainnav__item">
              <router-link to="/" class="mainnav__link">Home</router-link>
            </li>
            <li class="mainnav__item">
              <router-link to="/DeinSteinDesign" class="mainnav__link">DeinSteinDesign</router-link>
            </li>
            <li class="mainnav__item">
              <router-link to="/Tiles" class="mainnav__link">Tiles</router-link>
            </li>
            <li class="mainnav__item">
              <app-select 
                :items="items" 
                @select="setLocale($event)" 
                :selected="lang"             
              />
            </li>
          </ul>
          <div class="mainnav__search search">
            <div class="search__icon">
              <svg width="14" height="14" >
                <use xlink:href="../assets/icon/search.svg#search"></use>
              </svg>
            </div>
            <input type="text" placeholder="What are you looking for?">
          </div>
          <div class="mainnav__icon icon">
            <a @click="onOpen()"> 
              <svg width="24" height="24">
                <use xlink:href="../assets/icon/user.svg#user"></use>
              </svg>
            </a>
            <router-link to="/cart">
              <svg width="24" height="24">
                <use xlink:href="../assets/icon/basket.svg#basket"></use>
              </svg>
              <div class="icon__counter">{{totalItems}}</div> 
            </router-link>
          </div>
        </div>
      </nav>
    </header>
    <!-- main -->
    <router-view />
    <!-- footer -->
    <footer class="mainfooter">
        <div class="mainfooter__wrapper">
          <router-link to="/" class="mainfooter__logo">
            <svg width="158" height="111">
              <use xlink:href="#logosite"></use>
            </svg>
          </router-link>
          <ul class="mainfooter__list">
            <li class="mainfooter__listitem">
              <a href="" class="mainfooter__link">Navigation</a>
              <ul class="mainfooter__sublist">
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Home</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">DeinSteinDesign</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">KITCHEN</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Mehr</a>
                </li>
              </ul>
            </li>
            <li class="mainfooter__listitem">
              <a href="" class="mainfooter__link">Connections</a>
              <ul class="mainfooter__sublist">
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Facebook</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Twitter</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">KITCHEN</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Mehr</a>
                </li>
              </ul>
            </li>
            <li class="mainfooter__listitem">
              <a href="" class="mainfooter__link">Account</a>
              <ul class="mainfooter__sublist">
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Your account</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Returns Centre</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">100 % purchase protection</a>
                </li>
                <li class="mainfooter__subitem">
                  <a href="" class="mainfooter__sublink">Help</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mainfooter__politic">
          <p class="mainfooter__politicText">Copyright © 2021 DeinSteinDesign. All rights reserved.</p>
          <div class="mainfooter__politicWrap">
            <span class="mainfooter__politicText">Impressum</span>
            <span class="mainfooter__politicText">Datenschutzerklärung</span>
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
    }),
    watch: {
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