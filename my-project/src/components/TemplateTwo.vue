<template>
  <div>
    template two
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'TemplateTwo.vue',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  div{background-color: #ccc}
</style>
