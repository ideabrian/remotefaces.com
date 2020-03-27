<template>
    <div>    
        <header class="bg-purple text-yellow pt-40 pb-12 md:pt-48 ">
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-4xl mx-auto">
                    My Rooms
                </h1>
            </div>
        </header>
        <section class="mx-auto mt-16 text-center container">                            
            <div class="max-w-6xl mx-auto mb-4 grid grid-cols-1 lg:grid-cols-2 gap-6"> 
                <nuxt-link to="/rooms/new" class="col-span-1 relative bg-purple-200 hover:bg-purple text-purple hover:text-white py-4" style="border-radius:6px">
                    Create a New Room
                </nuxt-link>
                <nuxt-link v-for="room in rooms" :key="room.id" :to="'/' + room.slug" class="col-span-1 relative bg-yellow-200 py-4 hover:bg-purple text-purple hover:text-white font-bold" style="border-radius:6px">
                    {{ room.name }}
                </nuxt-link>
            </div>
        </section>

    </div>
</template>

<script>
export default {  
    middleware: 'member',
    data: function(){
        return { 
            rooms: []
        }
    }, 
    head: {
      title: 'My Rooms',
    },
    components: {

    },
    methods: {
        async getRooms(){
            try{
                await this.$axios.get('/rooms').then((result) => {
                    this.rooms = result.data
                })
            } catch (e) {
                this.error = e.response.data.message
            }
        }
    },
    mounted(){
        this.getRooms()
    }
}
</script>