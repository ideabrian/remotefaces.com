<template>
  <div>        
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <button class="button is-info">Talk to Someone</button>
          <br/><br/><br/>
          <ul>
            <li><nuxt-link to="/"># perfectionism</nuxt-link></li>
            <li><nuxt-link to="/"># relationships</nuxt-link></li>
            <li><nuxt-link to="/"># shiny-objects</nuxt-link></li>
            <li><nuxt-link to="/"># meaningful-work</nuxt-link></li>
            <li><nuxt-link to="/"># divorce</nuxt-link></li>
            <li><nuxt-link to="/"># anxiety</nuxt-link></li>
            <li><nuxt-link to="/"># accountability</nuxt-link></li>
            <li><nuxt-link to="/"># imposter-syndrome</nuxt-link></li>
            <li>more</li>
          </ul>
        </div>
        <div class="column is-8">
          <form>
            <textarea v-model="newPostContent" class="border-width-2"></textarea>
            <button type="submit" native-type="submit" v-on:click.prevent="submitPost">Submit</button>
          </form>

          <h2>Posts</h2>
          <div v-for="post in posts" :key="post.id">
            {{ post.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      newPostContent: '',
      posts: false
    }
  },
  methods: {
    async submitPost(){
      try {
        await this.$axios.post('/posts', {
          content: this.newPostContent
        }).then((result) => {
          this.posts.push(result.data)
          this.newPostContent = ''
        }) 
      } catch (e) {
        console.log(e)
      }
    },
    async getPosts(){
      try{
        await this.$axios.get('/posts').then((result) => {
          this.posts = result.data
        }) 
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted(){
    this.getPosts()
  }
}
</script>