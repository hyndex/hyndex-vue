<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      username: <input type="text" v-model="username" autocomplete="username"><br>
      password: <input type="password" v-model="password" autocomplete="current-password"><br>
      <button>login</button>
      <br><h1> token: {{ $store.state.token }}</h1>
    </form>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      username:'',
      password:'',
      status:'',
      response:''
    }
  },
  methods: {
    login() {
      this.log=this.username

      fetch('http://localhost:8000/users/login/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
              {
                "username": this.username,
                "password": this.password
            }),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(async (data) => {
                if (data.status < 300){

                  let { token } = await data.json();
                  this.$store.commit('setToken', token);
                  //this.status=data.status
                }
                
            })
    },   
  },
  
}
</script>

<style scoped>
.red{
  background-color: red;
}
</style>