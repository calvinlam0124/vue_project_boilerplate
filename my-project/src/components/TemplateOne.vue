<template>
  <div>
    template one
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'TemplateOne.vue',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
div{background-color: #eee}
</style>
