<template>
  <div class="login">
    <h1>Login</h1>
    <form>
      <br><h1> response: {{response}}</h1>
      <br><h1> status: {{status}}</h1>
    </form>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      status:'',
      response:''
    }
  },
  mounted() {
    fetch('http://localhost:8000/users/logout/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({}),
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
  }
  
}
</script>

<style scoped>
.red{
  background-color: red;
}
</style>