<template>
    <form @submit.prevent="submitHandler" class="card auth-card">
  <div class="card-content">
    <span class="card-title">Домашняя бухгалтерия</span>
    <div class="input-field">
      <input
          id="email"
          type="text"
          v-model.trim="email"
          required
          
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
          required
      >
      <label for="password">Пароль</label>
      <small class="helper-text invalid">Password</small>
    </div>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
         
      >
        Войти
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Нет аккаунта?
      <router-link to="/register">Зарегистрироваться</router-link>
    </p>
  </div>
    </form>

</template>
<script>



export default {
  name: 'login',
  data(){
    return{
      email:'',
      password:''

    }
  },

  methods:{
   
    async submitHandler(){
      const formData ={
        email: this.email,
        password: this.password
      }
       try{
           await this.$store.dispatch('login', formData)
           this.$router.push('/')
       } catch (e){}
    }
  }
}
</script>

