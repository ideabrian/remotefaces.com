<template>
    <div>
        <header class="pt-40 pb-20">
            <div class="container text-center article max-w-lg">
                

                <p v-if="slug && !$store.getters.isLoggedIn" class="text-2xl">Awesome. You’ll automatically join the room <code class="bg-black bg-yellow">{{ slug }}</code> when you <nuxt-link to="/login">login</nuxt-link> or <nuxt-link to="/join">sign up</nuxt-link>.</p>

            </div>
        </header>

        
    </div>
</template>
<script>
export default {   
    data: function(){
        return { 
           token: null,
           slug: null
        }
    },
    methods: {             
        async joinRoom(){
            try {
                await this.$axios.post('/rooms/join',{
                    slug: this.slug,
                    token: this.token
                }).then((result) => {
                    $nuxt.$router.push('/' + this.slug)
                }) 
            } catch (e) {
                if(e.response && e.response.data.warning){
                    $nuxt.$router.push('/' + this.slug)
                }
                //TODO handle other cases like where token is invalid
            }
        }
    },
    mounted(){
        this.token = this.$route.params.token
        this.slug = this.$route.params.slug
        if(this.$store.getters.isLoggedIn){
            this.joinRoom()
        }else{
            this.$cookie.set('join-room', this.slug + '-' + this.token, 1);            
        }
    }
}
</script>