<template>
    <div class="max-w-6xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">                                                                                
        <canvas ref="canvas"  width="480" height="320" class="hidden"></canvas>
        <div class="col-span-1 relative" v-show="streaming">
            <video class="rounded" ref="yourVideo" style="border-radius:6px" width="480" height="320"></video>
            <div v-if="!$store.getters.isLoggedIn" class="absolute text-center left-0 right-0 bottom-0 text-white p-4 bg-purple" style="border-bottom-left-radius:6px;border-bottom-right-radius:6px">
                <h3 class="mb-2">It works! Now... join the fun?</h3>
                <nuxt-link to="/join" class="button is-small">Get Free Account</nuxt-link>
            </div>
        </div>
        <button v-show="!streaming" ref="yourFace" class="col-span-1 relative bg-purple-200 text-center rounded text-purple cursor-pointer hover:bg-yellow-200 content-center py-4" style="border-radius:6px" @click="startStream">
            <span class="text-6xl leading-snug -mt-2 block">+</span>Your Face Here
        </button>

        <div class="col-span-1 relative" v-for="worker in workers" :key="worker.username">
            <img :src="'https://remotefaces.s3.amazonaws.com/' + worker.image_url" :alt="worker.username" class="rounded" width="480" height="320"/>                     
            <span class="absolute block" style="background:green;left:10px;top:10px;width:14px;height:14px;border-radius:50%"></span>
        </div>
    </div>   
</template>
<script>
export default {       
    props: ['room_slug'], 
    data: function(){
        return { 
            streaming: false,
            workers: []
        }
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
                if(err.name == 'NotAllowedError'){
                    alert('Error. Your web browser is not letting remotefaces.com access your camera.')
                }else if(err.name == 'NotReadableError'){
                    alert('Error. Another application is currently using your webcam. Please stop that application and then try again.')
                }else{
                    alert(err);
                }        
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