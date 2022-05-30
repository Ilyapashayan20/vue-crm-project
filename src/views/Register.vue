<template>
  <form @submit.prevent="submitHandler()" class="card auth-card">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
             v-model.trim="password"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            class="validate"
             v-model.trim="name"
        >
        <label for="name">Имя</label>
        <small class="helper-text invalid">Name</small>
      </div>
      <p>
        <label>
          <input @click="checkbox = !checkbox" type="checkbox"  />
          <span  id="ckb">С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <a href="/">Войти!</a>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return{
      email: '',
      password: '',
      name : '',
      checkbox: false
    }
  },
  methods: {
    
    async submitHandler(){
      const formData ={
        email: this.email,
        password:this.password,
        name: this.name
      }
    if(this.checkbox){
       try{
       await this.$store.dispatch('register', formData)
       this.$router.push('/')
    }catch (e){}    
    } else{
      document.getElementById('ckb').classList.add('ckb-active')
      
    }
  }
  }
}
</script>

<style scoped>
.ckb-active{
  color: red;
  font-size: 16px;
}


</style>
