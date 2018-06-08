<template>
  <div>
<label for="email">Email:</label>
<input v-model="email" id="email" type="email">
<label for="password">Password:</label>
<input v-model="password" id="password" type="password">
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
