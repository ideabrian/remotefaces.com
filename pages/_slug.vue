<template>
    <div>    
        <template v-if="error">
            <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
                <div class="container text-center">
                    <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-4xl mx-auto">
                        {{ error }}
                    </h1>
                </div>
            </header>
        </template>
        <template v-else-if="room">
            <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
                <div class="container text-center">
                    <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-4xl mx-auto">
                        {{ room.name }}
                    </h1>

                    <div v-if="$store.getters.isLoggedIn">
                        <div class="text-white text-purple-300 mt-8 mb-2 text-sm">Invite link:</div>
                        <span class="bg-yellow-200 py-2 px-4 text-purple">https://remotefaces.com/rooms/{{ room.slug }}/{{ room.token }}{{ $store.getters.memberProfile.id }}</span>
                    </div>
                </div>
            </header>

            <section class="mx-auto -mt-16 text-center container">                            
                <RoomWorkers ref="roomWorkersCom" :room_id="room.id"/>                     
            </section>
        </template>
    </div>
</template>

<script>
import RoomWorkers from '~/components/RoomWorkers.vue'
export default {        
    head: {
      title: 'Digital Togetherness for Internet Humans',
    },
    data: function(){
        return { 
            room: null,
            error: null
        }
    },
    components: {
        RoomWorkers
    },
    methods: {             
        async getRoom(){
            try{
                await this.$axios.get('/rooms/' + this.$route.params.slug).then((result) => {
                    this.room = result.data
                })
            } catch (e) {
                this.error = e.response.data.message
            }
        }
    },
    mounted(){
        this.getRoom()
    }
}
</script>