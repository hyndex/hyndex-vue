<template>
  <div class="login">
    <h1>user Register need to include the token</h1>
    search: <input type="text" v-model="courseSearch" autocomplete="courseSearch"><br>
      <button @click="courseFetch">register</button>
      <br><h1> response: {{response}}</h1>
      <br><h1> status: {{status}}</h1>
    

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      lesson:'',
      courseSearch:'',
      currentCourse:'',
      currentCourseId:'',
      allCourse:'',
      response:'',
      status:''
    }
  },
  methods: {
    courseFetch(){
        fetch('http://localhost:8000/course/?search='+this.courseSearch+'/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(async (data) => {
                if (data.status < 300){
                  this.courseSearch=await data.json()
                }
                
            })
    },
    courseLessonFetch(){
        fetch('http://localhost:8000/course/'+currentCourseId+'/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        })
            .then(async (data) => {
                if (data.status < 300){
                  this.currentCourse=await data.json()
                }
                
            })
    },
      
  },
  mounted() { // life-cycle hooks
        fetch('http://localhost:8000/course/Course/', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    "Content-type": "application/json",
                    'Accept': 'application/json',
                }
            })
                .then(async (data) => {
                    if (data.status < 300){
                    this.allCourse=await data.json()
                    }
                    
                })
    },
  
}
</script>

<style scoped>
.red{
  background-color: red;
}
</style>