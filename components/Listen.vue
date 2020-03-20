<template>
    <div v-if="$store.getters.isListener">
        <div class="bg-teal text-white py-4 text-center" :class="{'bg-pink' : $store.getters.isAvailableToListen && waitingRoom}">
            <div class="container">
                <template v-if="$store.getters.isAvailableToListen && waitingRoom">
                    <button class="button" @click.prevent="answerRoom">Answer Call</button>
                </template>
                <template v-else>
                    <button class="button is-small md:mr-4" :class="{'opacity-25' : !$store.getters.isAvailableToListen}" @click.prevent="changeAvailability(true)">Yes, I’m available to listen.</button>
                    <button class="button is-small" :class="{'opacity-25' : $store.getters.isAvailableToListen}"  @click.prevent="changeAvailability(false)">No, I’m not available.</button>
                </template>
            </div>
        </div>
        <Talk ref="talkDiv"/>        
    </div>
</template>


<script>
import Talk from '~/components/Talk.vue';
export default {
    data: function(){
        return {
            waitingRoom: false,
            originalPageTitle: ''
        }
    },
    components: {
        Talk
    },
    methods: {
        async answerRoom(){
            this.changeAvailability(false)
            this.$refs.talkDiv.roomName = this.waitingRoom            
            this.$axios.post('/talks/' + this.$refs.talkDiv.roomName + '/claim')
            this.$refs.talkDiv.callSecondsLeft = this.$refs.talkDiv.callSecondsLeft + 5
            await this.$refs.talkDiv.joinTalk()
            this.waitingRoom = false
            this.$refs.talkDiv.callStatus = 'talking'
            this.$refs.talkDiv.startTalkTimer()
        },
        changeTab(newTab){
            this.activeTab = newTab
        },
        async checkForRoom(){
            //don't check for calls while already on call, or while unavailable
            if(this.$store.getters.isAvailableToListen && !this.$refs.talkDiv.callStatus){
                try {
                    await this.$axios.get('/talks/getLatestUnanswered').then((result) => {
                        if(result.data.daily_room_name){
                            this.waitingRoom = result.data.daily_room_name;
                            
                            this.beepBoop(100, 100, 300); 
                            setTimeout(this.beepBoop(100, 200, 300), 300);
                            setTimeout(this.beepBoop(100, 300, 300), 600);
                        }else{
                            this.waitingRoom = false
                        }
                    }) 
                } catch (e) {
                    console.log(e)
                }
            }
        },
        async changeAvailability(availability){
            try {
                await this.$axios.post('/users/' + this.$store.getters.memberProfile.id + '/updateAvailability', {available: availability}).then((result) => {
                    this.$store.dispatch('updateUserAvailability', availability)
                }) 
            } catch (e) {
                console.log(e)
            }
        },
        updatePageTitle(){
            if(this.waitingRoom){
                if(document.title == 'INCOMING CALL!!!'){
                    document.title = ' / '
                }   
                else{
                    document.title = 'INCOMING CALL!!!'
                }
            }else{
                document.title = this.originalPageTitle
            }
            setTimeout(this.updatePageTitle, 1000)
        },
        beepBoop(vol, freq, duration){
            let a = new AudioContext()
            let v = a.createOscillator()
            let u = a.createGain()
            v.connect(u)
            v.frequency.value=freq
            v.type="square"
            u.connect(a.destination)
            u.gain.value=vol*0.01
            v.start(a.currentTime)
            v.stop(a.currentTime+duration*0.001)
        }
    },
    mounted(){
        setInterval(this.checkForRoom, 1000);
        
        this.originalPageTitle = document.title
        this.updatePageTitle()        
    }
}
</script>