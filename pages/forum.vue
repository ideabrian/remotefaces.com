<template>
  <div>
    <header class="pt-56 pb-40 bg-purple text-yellow text-center">
        <div class="container">
            <h1 class="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-none">The Feelings Forum</h1>
            <h2 class="text-xl lg:text-2xl text-white leading-tight max-w-3xl mx-auto mt-4">
                A safe space for tech workers to dump their hearts out. To build empathy. To feel human. To be together. Share your feelings below. Or start a conversation with someone who makes you feel.
            </h2>            
        </div>
    </header>
    <section class="relative max-w-5xl mx-auto -mt-12">        
        <form>
            <div class="relative max-w-xl mx-auto">
                <textarea v-model="story" v-validate="'required'" name="story" class="textarea resize-none" style="min-height: 200px" placeholder="Unload a feeling. Ask a question. Share an insight. Or smile with your words."></textarea>
                <button class="button is-small is-purple rounded absolute" style="right: 0.5em; bottom: 0.5em" @click.prevent="submitStory">submit</button>
            </div>
            <p class="mx-auto max-w-lg mt-2 opacity-50 leading-snug text-purple text-center" style="font-size:0.88em">Add one or more hashtags to sort your feelings. Or don’t.</p>
        </form> 
        <img src="/images/anon.png" alt="Posts are 100% anonymous until agreed otherwise." class="hidden lg:block absolute left-0" style="top:1em;" width="194"/>  
    </section>
    <section class="container mt-20 max-w-3xl">        
        <ul id="tag-nav" class="text-center">
            <li v-for="(value, name) in tags" :key="name">
                <button @click="toggleTag(name)" :class="{active: value}"><em class="mr-1">#</em>{{ name }}</button>
            </li>
        </ul>
        <template v-if="posts">
            <div class="post" v-for="post in posts" :key="post.id" :id="'post-' + post.id">
                <div class="grid grid-cols-6 gap-2">
                    <div class="col-span-6 md:col-span-1 mt-2 text-center post-left">
                        <img src="https://randomuser.me/api/portraits/women/5.jpg" class="mask" alt="fake photo" />                        
                    </div>
                    <div class="col-span-6 md:col-span-5">
                        <div class="post-author mask">
                            <h3>Author Name</h3>
                        </div>
                        <div class="post-body article">{{ post.content }}</div>
                        <i class="fa fa-reply mt-2 opacity-25 hover:opacity-100 text-purple cursor-pointer"></i>
                    </div>
                </div>                        
            </div> 
        </template>     
    </section>
  </div>  
</template>

<script>
export default {
    data: function(){
        return {
            story: '',
            posts: false,
            tags: {
                accountability: false,
                anxiety: false,
                burnout: false,
                depression: false,
                giggles: false,
                imposter_syndrome: false,
                loneliness: false,
                perfectionism: false,
                shiny_object_syndrome: false
            }
        }
    },
    methods: {
        toggleTag(tagName){
            this.tags[tagName] = !this.tags[tagName]
        },
        submitStory(){
            this.$validator.validate('story').then((result) => {
                if (result) {                    
                    if(this.$store.getters.isLoggedIn){
                        this.$axios.post('/posts',{
                            content: this.story
                        }).then((result) => {
                           
                        }) 
                    }else{
                        this.$cookie.set('story', this.story, 10);
                        $nuxt.$router.push('/join')
                    }
                }
            })
        },
        loadPosts(){
            this.$axios.get('/posts').then((result) => {
                if(result.data){
                    this.posts = result.data
                }                
            }) 
        },
    },
    head: {
      title: 'The Feelings Forum',
    },
    mounted(){
        this.loadPosts()
    }
}
</script>