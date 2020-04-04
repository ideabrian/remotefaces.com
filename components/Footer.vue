<template>
    <div>        
        <footer class="text-center mt-64">
            <div class="container py-6">                    
                <p>Built by <a href="https://lorenzut.com" target="_blank" class="link">Patrick</a> and <a href="https://ozo.li/" target="_blank" class="link">Janis</a> |  <nuxt-link to="/terms">terms</nuxt-link> | <nuxt-link to="/privacy">privacy</nuxt-link></p>
            </div>
        </footer> 
        <script src='/js/gifshot.js'></script>
    </div>   
</template>

<script>
export default {
    data: function(){
        return {
            email: '',
            name: '',
            subscriptionSending: false,
            subscribed: false
        }
    },
    methods: {
        subscribeToNewsletter(){
            this.subscriptionSending = true
            this.$validator.validate('email').then((result) => {
                if (result) {
                    this.$axios.post('/newsletter/subscribe',{
                        email: this.email,
                        name: this.name
                    }).then((result) => {
                        if(result.data && result.data.success){
                            this.email = ''
                            this.subscribed = true
                        }else{
                            
                        }
                    }) 
                }
            })
        },
        setName(){
            this.name = 742
        }
    },
    mounted(){
        setTimeout(this.setName(), 1500);
    }
}
</script>