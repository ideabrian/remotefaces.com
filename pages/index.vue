<template>
    <div>    
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-4xl mx-auto">
                    Human Connection <br class="hidden md:block"/>While You Work From Home
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
                
                
                <canvas ref="canvas"  width="480" height="320" class="hidden"></canvas>

                <div class="col-span-1 relative" v-show="streaming">
                    <video class="rounded" ref="yourVideo" style="border-radius:6px" width="480" height="320"></video>
                    <div v-if="!$store.getters.isLoggedIn" class="absolute text-center left-0 right-0 bottom-0 text-white p-4 bg-purple" style="border-bottom-left-radius:6px;border-bottom-right-radius:6px">
                        <h3 class="mb-2">It works! Now... join the fun?</h3>
                        <nuxt-link to="/join" class="button is-small">Get Free Account</nuxt-link>
                    </div>
                </div>
                <button v-show="!streaming" ref="yourFace" class="col-span-1 relative bg-purple-200 text-center rounded text-purple cursor-pointer hover:bg-yellow-200 content-center" style="border-radius:6px" @click="startStream">
                    <span class="text-6xl leading-snug -mt-2 block">+</span>Your Face Here
                </button>

                <div class="col-span-1 relative" v-for="worker in workers" :key="worker.username">
                    <img :src="'https://remotefaces.s3.amazonaws.com/' + worker.image_url" :alt="worker.username" class="rounded" width="480" height="320"/>                     
                    <span class="absolute block" style="background:green;left:10px;top:10px;width:14px;height:14px;border-radius:50%"></span>
                </div>
            </div>            
        </section>
        

        

        <section class="container mt-20">
            <div class="max-w-xl mx-auto">
                <h2 class="text-purple text-4xl"><span class="bg-yellow">CHANGELOG</span></h2>
                <div class="article">
                    <p>
                        <strong>March 20, 2020:</strong> Launch v1. A stupidly simple MVP that uses your computer’s camera to take a still photo of you every 10 seconds and shares it publicly on the home page. That's all there is to it for now. More coming soon.
                    </p>
                </div>
            </div>
        </section>

        <section class="container mt-20">
            <div class="max-w-xl mx-auto">
                <h2 class="text-purple text-4xl"><span class="bg-yellow">ROADMAP</span></h2>
                <div class="article">
                    <p>The following roadmap depends SOOOO MUCH on the type of feedback I get. Please <a href="mailto:patrick@lorenzut.com">email me</a> with some. That said, rough itinerary is as follows:</p>

                    <ol class="list-decimal">                        
                        <li>Profile page where you can say who you are, contact info, what you're working on.</li>
                        <li>Add a link to contact people via zoom/hangouts/skype/whatever.</li>
                        <li>Add video support for browsers that support it. Keep still image as fallback.</li>
                        <li>Teams/rooms. So, for example, you could see only fellow <em>IndieHackers</em> coworkers, or fellow coworkers from your company. These could be both locked and unlocked, aka private or public.</li>        
                        <li>Create a cool prize for the X people to log Y hours.</li>                                                                
                        <li>30 second live dance party every 30 minutes. Only for people who worked the past 30 minutes.</li>
                        <li>Stats about hours logged, just like GitHub. So you can look back and see how many hours you worked in the coworking space each day.</li>
                        <li>Do Not Disturb. To opt out of the live text chat.</li>                        
                        <li>“Talk to Someone” button that pairs you randomly with another user for a 3 minute video chat. You’ll never talk to that person again unless you both click “yeah, I’d like to talk to that person again” after the call is over. This could be used to shoot the shit, or to bounce an idea off someone rando.</li>
                        <li>At the end of each day create an animated GIF from all still images taken while at work that day.</li>
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
            streaming: false,
            workers: []
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
        async takePicture() {
            var canvas = this.$refs.canvas
            var video = this.$refs.yourVideo
            var context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, 480, 320);
            var data = canvas.toDataURL('image/jpeg');
            this.$axios.post('/updateImage',{
                photo: data
            }).then((result) => {
                if(result && result.data){
                    this.workers = result.data
                    setTimeout(this.takePicture, 10000)
                }
            })
        },
        async startStream(){
            
            var video = this.$refs.yourVideo

            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function(err) {
                console.log("An error occurred: " + err);
            });

            var that = this
            video.addEventListener('canplay', function(ev){
                if (!that.streaming) {
                    that.streaming = true;                    
                    if(that.$store.getters.isLoggedIn){
                        setTimeout(that.takePicture, 1000)
                    }
                }
            }, false);
            
        },        
        async getWorkers(){
            if(!this.streaming){
                this.$axios.get('/getWorkers').then((result) => {
                    this.workers = result.data
                })
                setTimeout(this.getWorkers, 5000)
            }
        }
    },
    mounted(){
        this.getWorkers()
    }
}
</script>