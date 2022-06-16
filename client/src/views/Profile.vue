<template>
  <main class="profile"> 
    <div class="profile__content content">
      <div class="content__body">
        <template v-if="orders?.length">
          <div class="history">       
            <div class="history__item itemSmall" v-for="item in orders" :key="item.id">
              <div class="itemSmall__info">           
                <h4 class="itemSmall__title">
                  <span 
                  v-for="(subitem, index) in item.cart"
                  :key="subitem.id"
                  >
                    {{subitem.product.name}}{{index !== item.cart.length - 1 ? ', ' : ''}}
                  </span>
                  </h4>
                <ul class="itemSmall__list">
                  <li>Заказ №: {{item.id}}</li>
                  <li>Дата: {{item?.updatedAt?.split('T')[0]}}</li>
                  <li>Статус: {{status[item.orderStatusId]}}</li>
                </ul>
                <div class="itemSmall__price">
                  <span class="itemSmall__priceinfo">{{item.price}} р.</span>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="historyEmpty">
            <p class="content__title">История заказов пуста</p>
            <p class="appText">Исправьте это, отправляйтесь в магазин</p>
            <router-link to="/tiles" class="appBtn">Начать покупки</router-link>
          </div>      
        </template>
      </div>
    </div>
  </main>
</template>

<script>
import {getOrders} from '@/api/shop'

export default {
  data: () => ({
    orders: [],
    status: {
      1: 'В обработке',
      2: 'Собирается',
      3: 'Отправлен',
      4: 'Доставлен',
      5: 'Отменен',
    }
  }),
  async mounted(){
    this.orders = await getOrders()
  },
}
</script>

<style lang="less">
@import '../assets/less/profile.less';

</style>