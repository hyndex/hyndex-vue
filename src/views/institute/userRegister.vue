<template>
  <div class="login">
    <h1>user Register need to include the token</h1>
    <form @submit.prevent="register">
      name: <input type="text" v-model="name" autocomplete="name"><br>
      phone: <input type="text" v-model="phone" autocomplete="phone"><br>
      email: <input type="text" v-model="email" autocomplete="email"><br>
      address: <input type="text" v-model="address" autocomplete="address"><br>
      username: <input type="text" v-model="username" autocomplete="username"><br>
      password: <input type="password" v-model="password" autocomplete="current-password"><br>

      <button>register</button>
      <br><h1> response: {{response}}</h1>
      <br><h1> status: {{status}}</h1>
    </form>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: '',
      phone: '',
      email: '',
      address: '',
      username:'',
      password:'',
      log:'',
      response:'',
      status:''
    }
  },
  methods: {
    register() {
      this.log=this.username

      fetch('http://localhost:8000/users/profile/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
              {
                "user": {
                    "username": this.username,
                    "password": this.password,
                    "email": this.email
                },
                "name": this.name,
                "phone": this.phone,
                "address": this.address,
                "status": "created",
                "image": null
            }
            ),
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(async (data) => {
                if (data.status < 300){

                  this.response=await data.json()
                  this.status=data.status
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