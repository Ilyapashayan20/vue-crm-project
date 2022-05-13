<template>
  <ul :class="{open: value}" class="sidenav open app-sidenav"   > 
      <li v-for="link in  links" :key='link'>
        <router-link active-class="active" :to="link.url" exact class="waves-effect waves-orange pointer">{{ link.title }}</router-link>
      </li>
   
    </ul>
</template>

<script>
export default {
  props:['value'],
  data(){
    return{
      links:[
        {title:'Счет',url : '/'},
        {title:'История',url : '/history'},
        {title:'Планирование',url : '/planning'},
        {title:'Новая запись',url : '/record'},
        {title:'Категории',url : '/categories'},
      ]
    }
  }  
}
</script>


<style >

.active{
  background-color: rgba(128, 128, 128, 0.266);
}

</style>
