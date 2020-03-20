<template>
    <div>    
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-4xl mx-auto">
                    Let’s Work Together
                </h1>
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-white mx-auto mt-8">
                    Virtual coworking for remote workers, freelancers, and solopreneurs. Because it’s lonely out there, and a little human connection goes a long way.
                </h2> 
            </div>
        </header>

        <section class="mx-auto -mt-16 text-center">                            
            <div class="max-w-6xl mx-auto mb-4 grid grid-cols-3 gap-6">                
                <button class="col-span-1 relative bg-purple-200 text-center rounded text-purple cursor-pointer hover:bg-yellow-200 content-center" style="border-radius:6px" @click="startWorking">
                    <span class="text-6xl leading-snug -mt-2 block">+</span>Your Face Here
                </button>
                <div class="col-span-1 relative">
                    <video class="rounded" style="border-radius:6px" autoplay loop muted>
                        <source src="/videos/waiting.mp4" type="video/mp4">
                        <img src="/images/patandandy.jpg" class="rounded"/>
                    </video> 
                    <div class="absolute" style="background:green;left:10px;top:10px;width:14px;height:14px;border-radius:50%"></div>
                </div>
                <div class="col-span-1 relative">
                    <video class="rounded" style="border-radius:6px" autoplay loop muted>
                        <source src="/videos/waiting.mp4" type="video/mp4">
                        <img src="/images/patandandy.jpg" class="rounded"/>
                    </video> 
                    <div class="absolute" style="background:green;left:10px;top:10px;width:14px;height:14px;border-radius:50%"></div>
                </div>
                <div class="col-span-1 relative">
                    <video class="rounded" style="border-radius:6px" autoplay loop muted>
                        <source src="/videos/waiting.mp4" type="video/mp4">
                        <img src="/images/patandandy.jpg" class="rounded"/>
                    </video> 
                    <div class="absolute" style="background:green;left:10px;top:10px;width:14px;height:14px;border-radius:50%"></div>
                </div>
                <div class="col-span-1 relative">
                    <video class="rounded" style="border-radius:6px" autoplay loop muted>
                        <source src="/videos/waiting.mp4" type="video/mp4">
                        <img src="/images/patandandy.jpg" class="rounded"/>
                    </video> 
                    <div class="absolute" style="background:green;left:10px;top:10px;width:14px;height:14px;border-radius:50%"></div>
                </div>
                <div class="col-span-1 relative">
                    <video class="rounded" style="border-radius:6px" autoplay loop muted>
                        <source src="/videos/waiting.mp4" type="video/mp4">
                        <img src="/images/patandandy.jpg" class="rounded"/>
                    </video> 
                    <div class="absolute" style="background:green;left:10px;top:10px;width:14px;height:14px;border-radius:50%"></div>
                </div>
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
                        <li>Add profile page where you can say who you are, contact info, what you're working on, etc.</li>
                        <li>Stats about hours logged, just like GitHub. So you can look back and see how many hours you worked in the coworking space each day.</li>
                        <li>Live text chat. Click any online person and instantly live chat with them.</li>
                        <li>Do Not Disturb. To opt out of the live text chat.</li>
                        <li>Live video chat. Same as text chat, but a video call.</li>
                        <li>Teams/rooms. So, for example, you could see only fellow <em>IndieHackers</em> coworkers, or fellow coworkers from your company. These could be both locked and unlocked, aka private or public.</li>
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
import Talk from '~/components/Talk.vue';
export default {        
    head: {
      title: 'Virtual Coworking for Remote Workers',
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
        async startWorking(){
            console.log('start working')
            gifshot.createGIF({}, function(obj) {
                if(!obj.error) {
                    var image = obj.image,
                    animatedImage = document.createElement('img');
                    animatedImage.src = image;
                    document.body.appendChild(animatedImage);
                }   
            });
        },
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