<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <loader v-if='loading' />

    <div v-else class="row">  
      <HomeBill
       
        :rates='currency.rates'
       />
      <HomeCurrency
       />
    </div>
  </div>
</template>

<script>
import HomeBill from '../components/HomeBill.vue'
import HomeCurrency from '../components/HomeCurrency.vue'
export default {
  name: 'home',
  data(){
    return{
      loading:true,
      currency: null
    }
  },
 async  mounted(){
   this.currency = await this.$store.dispatch('fetchCurrency')
   console.log(this.currency);
   this.loading = false
  },
  components:{HomeBill,HomeCurrency},
  methods:{
    refresh(){
      this.loading = true
      setTimeout(() => {
         this.loading = false
      }, 1000);
     
    }
  }
}
</script>
