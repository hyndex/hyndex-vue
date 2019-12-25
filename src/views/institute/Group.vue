<template>
  <div class="login">
    <h1>group need to include the token</h1>
    <form @submit.prevent="register">
      name: <input type="text" v-model="name" autocomplete="name"><br>
      phone: <input type="text" v-model="description" autocomplete="description"><br>
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
      description: ''
    }
  },
  methods: {
    register() {
      this.log=this.username

      fetch('http://localhost:8000/users/group/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
              {
                "name": this.name,
                "description": this.description,
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