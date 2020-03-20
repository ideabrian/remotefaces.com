<template>
    <div>    
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-4xl mx-auto">
                    Cowork with us.
                </h1>
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-white mx-auto mt-8">
                    Virtual coworking for remote teams, freelancers, and solopreneurs. Because it’s lonely out there, and a little human connection goes a long way.
                </h2> 

                <!-- <button class="button">Create a Room</button>
                <div>
                    Or join the free-for-all below.
                </div> -->
            </div>
        </header>

        <section class="mx-auto -mt-16 text-center container">                            
            <div class="max-w-6xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">                                                
                
                <div v-show="videoProgress == 'loading'" class="col-span-1 relative bg-purple-200 rounded" style="border-radius:6px">
                    <div class="absolute left-0 right-0 bottom-0 bg-purple" ref="progressBar"></div>
                </div> 
                <button v-show="videoProgress == 'blank'" ref="yourFace" class="col-span-1 relative bg-purple-200 text-center rounded text-purple cursor-pointer hover:bg-yellow-200 content-center" style="border-radius:6px" @click="startWorking">
                    <span class="text-6xl leading-snug -mt-2 block">+</span>Your Face Here
                </button>

                <nuxt-link :to="'/' + worker.username" class="col-span-1 relative" v-for="worker in workers" :key="worker.username">
                    <img :src="worker.image" :alt="worker.username" class="rounded"/>                     
                    <span class="absolute block" style="background:green;left:10px;top:10px;width:14px;height:14px;border-radius:50%"></span>
                </nuxt-link>
            </div>            
        </section>
        

        

        <section class="container mt-20">
            <div class="max-w-xl mx-auto">
                <h2 class="text-purple text-4xl"><span class="bg-yellow">CHANGELOG</span></h2>
                <div class="article">
                    <p>
                        <strong>March 20, 2020:</strong> Launch v1. A stupidly simple MVP that uses your computer’s camera to record a 2-second GIF of you every 3 minutes when you have recording turned on. This GIF is shared publicly on the home page. That's all there is to it for now. More coming soon.
                    </p>
                </div>
            </div>
        </section>

        <section class="container mt-20">
            <div class="max-w-xl mx-auto">
                <h2 class="text-purple text-4xl"><span class="bg-yellow">ROADMAP</span></h2>
                <div class="article">
                    <p>The following roadmap depends SOOOO MUCH on the type of feedback I get. Please <a href="mailto:patrick.lorenzut@gmail.com">email me</a> with some. That said, rough itinerary is as follows:</p>

                    <ol class="list-decimal">
                        <li>Profile page where you can say who you are, contact info, what you're working on.</li>
                        <li>Add a link to contact people via zoom/hangouts/skype/whatever.</li>
                        <li>Teams/rooms. So, for example, you could see only fellow <em>IndieHackers</em> coworkers, or fellow coworkers from your company. These could be both locked and unlocked, aka private or public.</li>        
                        <li>Create a cool prize for the X people to log Y hours.</li>                                        
                        <li>30 second live dance party every 30 minutes. Only for people who worked the past 30 minutes.</li>
                        <li>Stats about hours logged, just like GitHub. So you can look back and see how many hours you worked in the coworking space each day.</li>
                        <li>Do Not Disturb. To opt out of the live text chat.</li>                        
                        <li>“Talk to Someone” button that pairs you randomly with another user for a 3 minute video chat. You’ll never talk to that person again unless you both click “yeah, I’d like to talk to that person again” after the call is over. This could be used to shoot the shit, or to bounce an idea off someone rando.</li>
                        <li>Watch Me Work javascript plugin that you can add to your own website.</li>
                        <li>Face-detection AI to detect whether you’re at your computer or not.</li>
                        <li>Penis-detection AI to detect... well. Yeah. You all remember chat roulette.</li>
                        <li>Personality questions, like OkCupid does, so you can work with people you jive with.</li>
                        <li>Time tracking.</li>
                    </ol>

                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {        
    head: {
      title: 'Virtual Coworking for Remote Workers',
    },
    data: function(){
        return { 
            videoProgress: 'blank',
            videoProgressPercentage: 0,
            workers: [
                {
                    image: '/images/demo.gif',
                    username: 'lorenzut'
                }
            ]
        }
    },
    components: {
        
    },
    methods: {
        async updateProgressBar(){            
            this.videoProgressPercentage = this.videoProgressPercentage + 1
            this.$refs.progressBar.style.height = this.videoProgressPercentage + "%"

            if(this.videoProgressPercentage < 100){
                setTimeout(this.updateProgressBar, 100)
            }            
        },
        async startWorking(){
            this.videoProgress = 'loading'
            this.updateProgressBar()  
            if(this.$store.getters.isLoggedIn){
                //do this once every 3 minutes.
                var that = this                
                gifshot.createGIF({
                    'gifWidth': 480,
                    'gifHeight': 320,
                    'numFrames': 20,                    
                }, function(obj) {
                    if(!obj.error) { 
                        that.workers.unshift({
                            image: obj.image,
                            username: 'test'
                        })
                        that.videoProgress = 'finished'
                        that.$axios.post('/updateImage',{
                            photo: obj.image
                        }).then((result) => {
                            
                        }) 
                    }   
                });
            }else{
                $nuxt.$router.push('/join')
            }

            
        },        
    },
    mounted(){
        
    }
}
</script>