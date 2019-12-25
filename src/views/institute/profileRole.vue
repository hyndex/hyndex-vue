<template>
  <div class="login">
    <h1>user Register need to include the token</h1>
    <form @submit.prevent="register">
      name: <input type="text" v-model="role" autocomplete="role"><br>
      phone: <input type="text" v-model="group" autocomplete="group"><br>
      email: <input type="text" v-model="user" autocomplete="user"><br><!-- @change="userFetch" -->
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
      role: '',
      user: '',
      group: '',
      group: '',
      log:'',
      usersearch:'',
      userConfirm:'',
      groupsearch:'',
      groupConfirm:'',
      response:'',
      status:''
    }
  },
  methods: {
    userFetch(){
        fetch('http://localhost:8000/users/?search='+this.usersearch+'/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(async (data) => {
                if (data.status < 300){
                  this.userConfirm=await data.json()
                }
                
            })
    },
    groupFetch(){
        fetch('http://localhost:8000/group/?search='+this.groupsearch+'/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(async (data) => {
                if (data.status < 300){
                  this.groupConfirm=await data.json()
                }
                
            })
    },
    register() {
        this.log=this.username
        fetch('http://localhost:8000/users/profileRole/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
              {
               
                "role": null,
                "user": null,
                "group": null,
                "created_by": null,
                "updated_by": null
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