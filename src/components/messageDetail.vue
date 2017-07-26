<template>
    <div>
    {{detail}}
    </div>
</template>
<script>
  export default {
    data () {
      return {
        detail: ''
      }
    },
    methods: {
      showDetail (id) {
        setTimeout(()=>{
          this.detail = `消息id为${id}消息详情为xxx${Date.now()}`
        },1000)
      }
    },
    created () {
      //得到请求参数
      const id = this.$route.params.id
      this.showDetail(id);
    },
    watch: {
      '$route': function (to,from) {
        this.showDetail(to.params.id);
      }
    }
  }
</script>
<style>

</style>
