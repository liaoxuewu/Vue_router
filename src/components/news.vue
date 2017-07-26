<template>
    <ul>
      <li v-for="(news,index) in news" :key="index">{{news}}</li>
    </ul>
</template>
<script>
  export default {
    data () {
      return {
        news : ['news01','news02','news03']
      }
    }
  }
</script>
<style>

</style>
