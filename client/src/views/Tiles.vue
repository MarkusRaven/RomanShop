<template>
    <main class="DeinSteinDesign">
    <div class="DeinSteinDesign__wrapper">
      <section class="shop">
          <div class="toolbar">
            <button 
              v-for="type in filter"
              :key="type.id"
              class="appBtn appBtn--small"
              :class="type.id !== typeId && 'appBtn--outline'"
              @click="filterForType(type.id)"
            >{{type.name}}</button>
          </div>
          <div class="shop__items">
            <shop-item v-for="item in shopItems" :key="item.id" :itemInfo="item" :tile="true"></shop-item>
          </div>
      </section>
    </div>
  </main>
</template>

<script>
import {getItems, getItemsType, getFilter} from '@/api/shop'
import AppFilter from "@/components/Filter"
import ShopItem from "@/components/ShopItem"

export default {
  components: {
    AppFilter,
    'shop-item': ShopItem
  },
  data: () => ({
    shopItems: [],
    filter: [],
    typeId: 0
  }),
  async mounted(){
    this.shopItems = await getItems();
    this.filter = await getFilter();
  },
  methods: {
    UpdateItems(result){
      this.shopItems = result
    },
    async filterForType(id){
      this.typeId = id
      this.shopItems = await getItemsType(id)
    }
  }
}
</script>

<style lang="less">
@import '../assets/less/shop.less';

</style>