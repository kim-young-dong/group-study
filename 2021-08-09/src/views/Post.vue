<template>
  <div id="wrapper">
    <input type="text" placeholder="Title" class="title" v-model="title">
    <input type="text" placeholder="Author" class="author" v-model="author">
    <textarea class="content" name="" id="" cols="30" rows="10" placeholder="Content" 
    v-model="content">
    </textarea>
    <div class="post" @click="post" v-if="!$route.params.id">
      post
    </div>
    <div v-if="$route.params.id" class="edit">
      <div @click="edit">
        Edit
      </div>
      <div @click="del">
        Delete
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        title: '',
        author: '',
        content: '',
      }
    },
    methods: {
      post() {
        axios.post("https://api.t0dd.kr/v0/article", {
          title: this.title,
          author: this.author,
          content: this.content
        })
        .then ((res) => {
          this.$router.push('/')
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
      },
      edit() {
        let id = this.$route.params.id;
        axios.put(`https://api.t0dd.kr/v0/article/${id}`, {
          title: this.title,
          author: this.author,
          content: this.content
        })
        .then ((res) => {
          this.$router.push('/')
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
      },
      del() {
        let id = this.$route.params.id;
        axios.delete(`https://api.t0dd.kr/v0/article/${id}`)
        .then ((res) => {
          this.$router.push('/')
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })        
      }
    },
    created() {
      if(this.$route.params.id) {
        let id = this.$route.params.id;
        axios.get(`https://api.t0dd.kr/v0/article/${id}`)
        .then ((res) => {
          console.log(res);
          let data = res.data;
          this.title = data.title;
          this.author = data.author;
          this.content = data.content;
        })
        .catch(err => {
          console.log(err);
      })
      }
    }
  }
</script>

<style lang="scss" scoped>
#wrapper {
  width: 1000px;
  display: flex;
  flex-direction: column;
}
.title {
  margin-bottom: 20px;
  padding-left: 10px;
  height: 30px;
  background: #C8CEEA;  
  border-radius: 4px;
  box-shadow: inset 9.91px 9.91px 15px #B6BBD5, inset -9.91px -9.91px 15px #DAE1FF; 
  outline: none;
  border: none;  
}
.author {
  margin-bottom: 20px;
  padding-left: 10px;
  height: 30px;
  background: #C8CEEA;
  border-radius: 4px;
  box-shadow: inset 9.91px 9.91px 15px #B6BBD5, inset -9.91px -9.91px 15px #DAE1FF; 
  outline: none;
  border: none;    
}
.content { 
  margin-bottom: 30px;
  padding-top: 10px;
  padding-left: 10px;
  background: #C8CEEA;
  border-radius: 4px;
  box-shadow: inset 9.91px 9.91px 15px #B6BBD5, inset -9.91px -9.91px 15px #DAE1FF;
  outline: none;
  border: none; 
}
.post {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #C8CEEA;
  border-radius: 4px;
  box-shadow: 9.91px 9.91px 15px #B6BBD5, -9.91px -9.91px 15px #DAE1FF;  
}
.post:hover {
  box-shadow: inset 9.91px 9.91px 15px #B6BBD5, inset -9.91px -9.91px 15px #DAE1FF;
}
.edit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;  
}
.edit > div {
  width: 48%;
  text-align: center;
  line-height: 50px;
  background: #C8CEEA;
  border-radius: 4px;
  box-shadow: 9.91px 9.91px 15px #B6BBD5, -9.91px -9.91px 15px #DAE1FF;    
}
.edit > div:hover {
  box-shadow: inset 9.91px 9.91px 15px #B6BBD5, inset -9.91px -9.91px 15px #DAE1FF;
}
</style>