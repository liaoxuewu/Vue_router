<template>
    <div>
      <ul>
        <li v-for="(msg,index) in messages" :key="index">
          <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
          </li>
      </ul>
      <router-view></router-view>
    </div>
</template>
<script>
  export  default {
    data () {
      return {
        messages: []
      }
    },
    created () {
      setTimeout(()=>{
        this.messages = [
          {title:'message01',id: 1},
          {title:'message02',id: 2},
          {title:'message03',id: 3},
          {title:'message04',id: 4},
          {title:'message05',id: 5},
        ]
      },1000)
    }
  }
</script>
<style>

</style>
