<template>
    <div class="col-span-1 relative worker" :class="{'online' : isOnline}">
        <img :src="image" :alt="worker.username" class="rounded" width="480" height="320"/>                     
        
        <span class="absolute left-0 right-0 bottom-0 py-1 px-2 text-center"><span class="bg-yellow py-1 px-2">{{ worker.username }}</span></span>
        
        <span class="absolute online-dot"></span>
    </div>    
</template>
<script>
export default {
    props: ['worker', 'room_id'],
    computed: {
        image: function(){            
            return this.worker.file.amazon_url
        },
        isOnline: function() {

            var now = new Date()
            var now_utc =  Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
            var last_update = new Date(this.worker.updated_at)
            var difference = now_utc - last_update

            if(difference > (1000 * 66)){ //pageview in last 66 seconds?
                return false
            }else{
                return true
            }
        },
    }
}
</script>