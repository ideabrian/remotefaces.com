<template>
  <div>
      <div class="fixed top-0 left-0 right-0 bottom-0 z-50" v-show="callStatus">
        
        <template v-show="callStatus == 'talking'">
            <div class="text-center bg-purple text-yellow absolute left-0 top-0 right-0 py-3">This call ends in {{ callSecondsLeft }} seconds.</div>
            <iframe ref="talkFrame" class="w-full h-full" allow="microphone; camera; autoplay"/>
        </template>

        <div class="absolute left-0 right-0 bottom-0 top-0 bg-teal py-20 lg:py-40" v-show="callStatus == 'initializing'">            
            <div class="container text-center max-w-2xl">
                <h1 class="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-none text-yellow">Setting up your talk.<br/>Hang tight!</h1>
            </div>
        </div>
        
        <div class="absolute left-0 right-0 bottom-0 top-0 bg-yellow py-20 lg:py-40" v-show="callStatus == 'waiting_for_listener'">
            <div class="container text-center max-w-2xl">

                <h1 class="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-none text-purple">
                    <template v-if="waitingForListener >= 50">
                        Pairing you with a listener.
                    </template>
                    <template v-else-if="waitingForListener >= 35">
                        Feel free to pick your nose while you wait... we’re not recording this.
                    </template>
                    <template v-else-if="waitingForListener >= 20">
                        Okay, stop picking your nose now. That’s gross.
                    </template>
                    <template v-else>
                        You’ve been so patient! You shall be rewarded with good listenage.
                    </template>
                </h1>
                <h2 class="mt-4">This process can take up to 60 seconds (but usually much less).</h2>

                <h3 class="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-none text-pink mt-20">{{ waitingForListener }}</h3>

                <button class="button mt-10" @click="tiredOfWaiting">I’m tired of waiting.</button>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import DailyIframe from '@daily-co/daily-js';
export default {
    data: function(){
        return {
            callFrame: null,
            callSecondsLeft: 180,
            roomName: '',
            waitingForListener: 0,
            callStatus: null //waiting_for_listener, initializing, talking
        }
    },
    methods: {  
        async tiredOfWaiting(){
            //todo send event tracking this.
            this.destroy()
        },   
        async createFrame(){
            this.callFrame = DailyIframe.wrap(this.$refs.talkFrame);
        },
        async joinTalk() {
            this.callStatus = 'initializing'
            await this.createFrame()

            let participants;
            try {                
                participants = await this.callFrame.join({
                    url: 'https://fhs.daily.co/' + this.roomName,
                    showLeaveButton: true
                });                
                this.handleExit()
            } catch (e) {
                console.error('ERROR while joining meeting', e);
                return;
            }
        },
        setRoomInitialized(){
            this.$axios.post('/talks/' + this.roomName + '/initialize')
        },
        waitForListener(){
            this.waitingForListener = 60
            this.callStatus = 'waiting_for_listener'
            this.startListenerTimer()
            this.callFrame.on('participant-joined',  (evt) => { 
                this.waitingForListener = 0
                this.callStatus = 'talking'
                this.startTalkTimer()
            })
        },
        async startListenerTimer(){
            if(this.waitingForListener > 0){
                this.waitingForListener = this.waitingForListener - 1
                setTimeout(this.startListenerTimer, 1000)
            }else if(this.callStatus == 'waiting_for_listener'){
                //we blew it! Nobody answered
                await this.destroy()
                $nuxt.$router.push('/sorry')
            }
        },
        async startTalkTimer(){
            if(this.callStatus && this.callStatus == 'talking'){
                this.callSecondsLeft = this.callSecondsLeft - 1
                if(this.callSecondsLeft > 0){
                    setTimeout(this.startTalkTimer, 1000)
                }else{
                    await this.destroy()
                    $nuxt.$router.push('/end')
                }
            }
        },
        async handleExit(){
            this.callFrame.on('left-meeting',  (evt) => { 
                this.destroy();
                $nuxt.$router.push('/end')
            })
        },
        async destroy(){
            this.callStatus = null
            await this.callFrame.leave()            
            this.deleteRoom()
        },
        deleteRoom(){
            if(this.roomName){
                this.$axios.delete('/talks/' + this.roomName + '/destroy')
            }
        }
    },    
    async mounted(){

    }
    
}
</script>