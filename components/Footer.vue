<template>
    <div>        
        <footer class="text-center mt-40">

            <div class="bg-purple-200 text-purple">
                <div class="container py-8">
                    <div class="grid grid-cols-2 gap-12">
                        <div class="col-span-2 md:col-span-1 p-4">
                            <h3 class="font-bold text-2xl mb-2">100% for COVID-19.</h3>
                            <div class="max-w-md mx-auto">
                                <p class="mb-2">100% of profits (if any) from now until at least May 1 will be donated to charities fighting COVID-19. <br class="hidden xl:block"/>I will reassess on May 1.</p>                        
                            </div>
                        </div>
                        <template v-if="!$store.getters.isLoggedIn">
                            <div v-if="subscribed" class="col-span-2 md:col-span-1 p-4">
                                <h3 class="font-bold text-2xl mb-2 text-teal">One last thing...</h3>
                                <div class="max-w-md mx-auto">
                                    <p class="mb-2">Thanks for subscribing! Please click the confirmation link in the email I just sent you (please check your spam folder). Your subscription <strong>will not be complete</strong> until you do so.</p>
                                </div>
                            </div>
                            <div v-else class="col-span-2 md:col-span-1 bg-purple-100 p-6 rounded">                            
                                <div class="max-w-md mx-auto text-left">
                                    <p class="mb-3"><strong>Join the newsletter</strong> for occassional updates. No spam ever. Unsubscribe anytime.</p>
                                    <form class="form relative">
                                        <input class="input" type="email" v-validate="'required|email'" name="email" v-model="email"  placeholder="alex@doe.com"/>
                                        <input class="input hidden" type="text" name="name" v-model="name" required/>
                                        <button class="button is-small newsletter-button" @click.prevent="subscribeToNewsletter" native-type="submit" :disabled="subscriptionSending">Go</button>
                                    </form>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="col-span-2 md:col-span-1 p-4">
                                <h3 class="font-bold text-2xl mb-2">Sorry for the mess!</h3>
                                <div class="max-w-md mx-auto">
                                    <p class="mb-2">In lean-starup fashion, I launched this thing within 8 hours of getting the idea, so... it’s a hectic work in progress right now. Please hang in there with me! Updates are being developed like mad.</p>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>

            <div class="bg-purple" id="footer-bottom">
                <div class="container py-6">                    
                    <p>Built by <a href="https://lorenzut.com" target="_blank">Patrick</a> in Portland, OR, USA.  <nuxt-link to="/terms">terms</nuxt-link> | <nuxt-link to="/privacy">privacy</nuxt-link> | <a href="mailto:patrick@lorenzut.com" >email me</a>.</p>
                </div>
            </div>
        </footer> 
        <script src="/js/gifshot.js"></script>
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