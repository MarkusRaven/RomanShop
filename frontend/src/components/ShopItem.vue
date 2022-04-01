<template>
  <div class="shop__item shopitem">
    <div class="shopitem__link">
      <img src="../assets/img/shop1.png" alt="">
    </div>  
    <div class="shopitem__header">
      <h4 class="shopitem__title">{{itemInfo.title}}</h4>
      <p class="appBtn appBtn--outline shopitem__stock" v-if="tile">Stock: 320 pcs</p>
    </div> 
    <p class="shopitem__text appText">{{description}}</p>
    <div class="shopitem__footer">
      <div class="shopitem__pricewrapper" v-if="tile">
        <span class="shopitem__priceinfo">Price per m²</span>
        <span class="shopitem__price">€ {{itemInfo.price}}</span>
      </div>
      <button 
        type="button" 
        class="shopitem__btn appBtn appBtn--outline"
        @click="addHandler()"
      >{{ tile ? 'ADD TO CART' : 'STEIN EDITOR'}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemInfo: {
      type: Object,
      default: {}
    },
    tile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    description(){
      return this.itemInfo.description.substring(0, 100) + '...'
    }
  },
  methods: {
    addHandler(){
      if(this.tile){
        const item = {
          height: 500,
          width: 1000,
          height: 500,
          length: 200,
          bohrung: 3,
          ausschnitt: 5,
          ausklinkung: 0,
          armierung: true,
          polierte_kante: true,
          comment: '23312312321312312',
          qty_item: 0,
          total_price: this.itemInfo.price,
          item: this.itemInfo.id,
        }
        this.$store.dispatch('addToCart', item)
        this.$router.push('/cart')
      }else{
        this.$router.push({name: 'Editor', params: {id: this.itemInfo.id}})
      }
    }
  }
}
</script>

<style>

</style>