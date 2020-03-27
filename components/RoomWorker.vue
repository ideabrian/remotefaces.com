<template>
    <div class="col-span-1 relative worker" :class="{'online' : isOnline}">
        <img :src="image" :alt="worker.username" class="rounded" width="480" height="320"/>                     
        
        <span class="absolute left-0 right-0 bottom-0 py-1 px-2 text-center"><span class="bg-yellow py-1 px-2">{{ worker.username }}</span></span>
        
        <!-- <span class="absolute online-dot" v-if="isOnline"></span>
        <span class="absolute online-status" v-else>{{ ago }} ago</span> -->
    </div>    
</template>
<script>
export default {
    props: ['worker', 'room_id'],
    data: function(){
        return {
            ago: ''
        }
    },
    computed: {
        image: function(){            
            return this.worker.file.amazon_url
        },
        isOnline: function() {

            return true; //todo put the below back

            var now = new Date()
            var last_update = new Date(this.worker.updated_at.replace(' ','T') + '+00:00')
            // console.log(now)
            // console.log(last_update)
            // console.log('---')
            var difference = Math.floor((now.getTime() - last_update.getTime()) / 1000)
            this.ago = difference

            if(difference <= 60){
                this.ago = difference + 's'
            }else if(difference <= 3600){
                this.ago = Math.floor(difference / 60) + 'm'
            }
            else if(difference <= 259200){ //three days
                this.ago = Math.floor(difference / 3600) + 'h'
            }else{
                this.ago = Math.floor(difference / 86400) + 'd'
            }

            if(difference > 120){ //pageview in last 120 seconds
                return false
            }else{
                return true
            }
        },
    }
}
</script>