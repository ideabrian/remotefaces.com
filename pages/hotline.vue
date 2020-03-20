<template>
    <div>    
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40 -mb-40">
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-6xl mx-auto">
                    <!--Join The Bleeding Heart Solopreneur Club-->
                    Imposter Hotline
                </h1>
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-white mx-auto mt-8">
                    Are you trying to do good and feeling like a fraud? Like you’re not enough? Like the thing you’re making doesn’t matter? Fuck that. Text me, 24 hours a day, and we’ll talk it out. Because we need you to be your most awesome self in the fight against the dystopian future!
                </h2>   
                <div class="text-xl mt-10 md:text-2xl lg:text-3xl font-bold text-pink">
                    <span class="py-3 px-6 md:py-5 md:px-10 bg-white inline-block">+1 (503) 809-2496</span>
                </div>
                <p class="mx-auto text-center max-w-xl mt-3 leading-snug"><!--SMS or WhatsApp.<br/>-->100% anonymous. 0% spam.<br/>This is my actual phone number --- don’t be a dick.</p>
            </div>
        </header>

        
    </div>
</template>

<script>
import Talk from '~/components/Talk.vue';
export default {        
    head: {
      title: 'Mental Health for Tech Workers',
    },
    data: function(){
        return { 
            listenerOnline: false
        }
    },
    components: {
        Talk
    },
    methods: {
        async joinTalk(roomName){
            this.$refs.talkDiv.roomName = roomName            
            await this.$refs.talkDiv.joinTalk()   
            this.$refs.talkDiv.setRoomInitialized()         
            this.$refs.talkDiv.waitForListener()            
        },
        async talk(){
            try {
                //create room
                this.$axios.post('/talks').then((result) => {
                    if(result.data && !result.data.noListenerAvailable){
                        this.joinTalk(result.data)
                    }else{
                        if(this.$store.getters.isLoggedIn){
                            $nuxt.$router.push('/offline')
                        }else{
                            $nuxt.$router.push('/join')
                        }
                    }
                }) 
            } catch (e) {
                console.log(e)
            }
            
        },
        isAListenerAvailable(){
            this.$axios.get('/listener').then((result) => {
                if(result.data && result.data.id){
                    this.listenerOnline = true
                }
            })
        }     
    },
    mounted(){
        this.isAListenerAvailable()
    }
}
</script>