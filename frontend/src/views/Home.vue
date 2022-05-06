<template>
  <main class="home">
     <div class="intro__wrapper">
        <div class="intro">
          <section class="intro__info">
            <h1 class="intro__title">Greate Good</h1>
            <p class="intro__text appText">Одежда для твоих сладких ножек</p>
            <router-link to="/Tiles">
              <button class="appBtn intro__btn appBtn--meduim">Каталог</button>
            </router-link>
          </section>
        </div>
      </div>
      <div class="bg-grey createnow">
        <div class="createnow__content">
          <div class="createnow__wrapper">
            <section class="createnow__info">
              <h2 class="appTitle createnow__title">Мы Greate Good - магазин расположенный в Уфе</h2>
              <p class="createnow__text appText">Наша специализация – привозить из разных стран лимитированные коллекции крупных брендов . У нас можно приобрести Air Jordan,Nike, Off-White</p>
              <router-link to="/Tiles">
                <button class="createnow__btn appBtn appBtn--outline">Каталог</button>
              </router-link>
            </section>
          </div>
        </div> 
        <div class="createnow__img"></div> 
      </div>
      <section class="recommend">
        <h2 class="appTitle">
          Кроссовки для тебя
        </h2>
        <div class="shop__items">
          <shop-item v-for="item in shopItems" :key="item.id" :itemInfo="item"></shop-item>
        </div>
      </section>
  </main>
</template>

<script>

import ShopItem from "@/components/ShopItem"
import {getItems} from '@/api/shop'

export default {
  name: 'Home',
  components: {
    'shop-item': ShopItem
  },
  data: () =>({
    arr: [],
    shopItems: [],
  }),
  async mounted(){
    this.shopItems = (await getItems()).slice(0, 6)
  },
  methods: {
   
  },
}
</script>
<style lang="less">
@import '../assets/less/home.less';
@import '../assets/less/shop.less';

</style>