<template>
    <main class="DeinSteinDesign">
    <div class="DeinSteinDesign__wrapper">
      <div class="breadcrumbs">
        <router-link to="home" class="breadcrumbs__link appText">Home</router-link>
        <span>/</span>
        <a class="breadcrumbs__active">Tiles</a>
      </div>
      <section class="shop">
        <h1 class="appTitle--left appTitle">
          All our tiles
        </h1>
        <p class="shop__text appText">
          At DeinSteinDesign, we pride ourselves on helping customers find the perfect tile for their bathrooms. With our inspiring assortment, you will create the bathroom of your dreams.
        </p>
        <div class="shop__row">
          <div class="shop__sidebar sidebar">
            <AppFilter @filterItems="UpdateItems($event)" :Tiles="true"/>           
          </div>
          <div class="shop__items">
            <shop-item v-for="item in shopItems" :key="item.id" :itemInfo="item" :tile="true"></shop-item>
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
  components: {
    AppFilter,
    'shop-item': ShopItem
  },
  data: () => ({
    shopItems: [],
  }),
  async mounted(){
    this.shopItems = await getItems({is_tile: 'true'});
  },
  methods: {
    UpdateItems(result){
      this.shopItems = result
    } 
  }
}
</script>

<style lang="less">
@import '../assets/less/shop.less';

</style>