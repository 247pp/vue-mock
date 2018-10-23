<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      data: null,
      switch1: false,
      tab0: true,
      tab1: true,
      tab2: true
    }
  },
  mounted () {
    this.$axios.get('/api/data').then(res => {
      console.log(res)
    })
    this.$axios.get('/api/obj').then(res => {
      this.data = res.data;
      console.log(this.data)
    })
  },
  methods: {
    change (status) {
        this.$Message.info('开关状态：' + status);
    },
    handleTabRemove (name) {
        this['tab' + name] = false
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
