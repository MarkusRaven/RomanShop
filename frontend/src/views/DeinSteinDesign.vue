<template>
  <main class="DeinSteinDesign">
    <div class="DeinSteinDesign__wrapper">
      <div class="breadcrumbs">
        <router-link to="home" class="breadcrumbs__link appText">{{$t('home')}}</router-link>
        <span>/</span>
        <a class="breadcrumbs__active">{{$t('deinsteindesign')}}</a>
      </div>
      <section class="shop">
        <h1 class="appTitle appTitle--left">
          {{$t('HeadingH1')}}
        </h1>
        <p class="shop__text appText">
          {{$t('Subtitle')}}
        </p>
        <div class="shop__row">
          <div class="shop__sidebar sidebar">
            <AppFilter @filterItems="UpdateItems($event)"/>
          </div>
          <div class="shop__items">
            <shop-item v-for="item in shopItems" :key="item.id" :itemInfo="item" :tile="false"></shop-item>
          </div>
        </div>
      </section>
    </div>
    
  </main>
</template>

<script>

import {getItems} from '@/api/shop'
import AppFilter from "@/components/Filter"
import ShopItem from "@/components/ShopItem"

export default {
  name: 'Home',
  components: {
    AppFilter,
    'shop-item': ShopItem
  },
  data: () => ({
    shopItems: [],
  }),
  async mounted(){
    this.shopItems = await getItems()
    
  },
  methods: {
    UpdateItems(result){
      this.shopItems = result
    } 
  },
  
  
  
}
</script>

<style lang="less">
@import '../assets/less/shop.less';

</style>

