<template>
  <div class="article" @click="$router.push(`/edit/${article._id}`)">
    <div class="title">
      {{ article.title }}
    </div>
    <div class="author">
      {{ article.author }}
    </div>
    <div class="content">
      {{ article.content }}
    </div>
    <div class="likes">
      <div id="like">
        like: {{ article.like }}
      </div>
      <div id="hate">
        hate: {{ article.dislike }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article'],
}
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 300px;
  margin-bottom: 15px;
  padding: 15px;
  box-sizing: border-box;
  background: #C8CEEA;
  border-radius: 4px;
  box-shadow: 9.91px 9.91px 15px #B6BBD5, -9.91px -9.91px 15px #DAE1FF;
}
.title {
  flex-grow: 2;
  font-size: 24px;
}
.author {
  flex-grow: 1;
  font-size: 16px;
  text-align: right;
}
.content {
  flex-grow: 10;
  font-size: 14px;
}
.likes {
  font-size: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#like, #hate {
  box-sizing: border-box;
  padding: 2px 10px;
  height: 100%;
  background: #C8CEEA;
  border-radius: 10px;
  box-shadow: 9.91px 9.91px 15px #B6BBD5, -9.91px -9.91px 15px #DAE1FF;
}
</style>
