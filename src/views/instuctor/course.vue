<template>
  <div class="login">
    <h1>Course</h1>
    <form @submit.prevent="course">
      name: <input type="text" v-model="name" autocomplete="name"><br>
      description: <input type="text" v-model="description" autocomplete="description"><br>
      category: <input type="text" v-model="category" autocomplete="category"><br>
      dont touch media: <input type="text" v-model="media" autocomplete="media"><br>
      dont touch thumbnail: <input type="text" v-model="thumbnail" autocomplete="thumbnail"><br>

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
      /////////////////
      // GET DATA
      /////////////////
      lesson:'',
      courseSearch:'',
      currentCourse:'',
      currentCourseId:'',
      allCourse:'',
      /////////////////
      // POST DATA
      /////////////////
      name:'',
      description:'',
      category:'',
      media:null,
      thumbnail:null,
      /////////////////
      // PUT DATA
      /////////////////
      id:'',
      /////////////////
      // RESONSE DATA
      /////////////////
      response:'',
      status:''
    }
  },
  methods: {
    courseAdd(){
        fetch('http://localhost:8000/course/Course/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(
              {
                    "name": this.name,
                    "description": this.description,
                    "category": this.category,
                    "media": this.media,
                    "thumbnail": this.thumbnail
                }),
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
                  this.status=data.status
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
                  this.status=data.status
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
                    this.status=data.status
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