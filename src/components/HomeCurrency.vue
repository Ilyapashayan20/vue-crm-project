<template>
  <div class="col s12 m6 l8">
        <div class="card orange darken-3 bill-card">
          <div class="card-content white-text">
            <div class="card-header">
              <span class="card-title">Курс валют</span>
            </div>
            <table>
              <thead>
              <tr>
                <th>Валюта</th>
                <th>Курс</th>
                <th>Дата</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>RUB</td>
                <td>72.98</td>
                <td>{{getFormat()}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</template>

<script>
import {format} from 'date-fns'
export default {
  data(){
    return{
      date:new Date(),
      format
    }
  },
  methods:{
         getFormat () {
      return this.format(this.date, 'yyyy MMM dd ')
    } 
}
}
</script>

<style>

</style>
