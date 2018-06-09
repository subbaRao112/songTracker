<template>
  <div>
    <h1>Register</h1>
<label for="email">Email:</label>
<input v-model="email" id="email" type="email">
<label for="password">Password:</label>
<input v-model="password" id="password" type="password">
<button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    async register(){
      const response =await AuthenticationService.register(
        {
          email:this.email,
          password:this.password
        })
        console.log(response.data)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
