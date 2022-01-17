<template>
  <div id="wrapper">
    <div class="post" @click="$router.push('/post')">
      post
    </div>
    <div class="container">
      <div v-for="line in lineCount" :key="line" class="row">
        <Article v-for="article in articles.filter((article, ind) => {
            return line - (ind % lineCount) == 1
          })" :key="article.id" class="article" :article="article"/>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Article from '../components/Article.vue'
  export default {
    created() {
      axios.get("https://api.t0dd.kr/v0/articles")
      .then ((res) => {
        this.articles = res.data.articles;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    },
    data() {
      return {
        articles: [],
        lineCount: 3
      }
    },
    components: {
      Article,
    }
  }
</script>

<style lang="scss" scoped>
#wrapper {
  width: 1000px;
}
.post {
  margin-bottom: 20px;
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
.container {
  min-width: 300px;
  display: flex;
  justify-content: space-between;
}
.row {
  display: flex;
  flex-flow: column;
}

</style>