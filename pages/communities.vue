<template>
    <div>
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40 z-10 relative">
            <div id="header-background" style="opacity:0.1;background-image:url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60);"></div>
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-3xl mx-auto">
                    <!-- Virtual Co<span v-html="useCases[useCaseIndex]"></span> <br/>for Online Communities -->
                    Create Accountability With Your Community
                </h1>               
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-4xl text-purple-200 mx-auto mt-12">                    
                    It’s hard to stay focused in this internet age. So we built a place for you and your community to create. Together. Because human connection increases accountability according to a buzzfeed article I read one time.
                </h2> 

                <nuxt-link to="/rooms/new" class="button">Get Started</nuxt-link>
                <p class="leading-snug">or read on</p>
                                    
            </div>
        </header>

        <section class="mx-auto -mt-16 text-center container z-20 relative">                            
            <RoomWorkers ref="roomWorkersCom" :room_id="'1'"/>                     
        </section>

        <section class="container max-w-xl mt-56 mb-56">
            <h2 class="font-bold text-2xl mb-4">Here’s how it works.</h2>
            <div class="article">
                <ol class="list-decimal">
                    <li><nuxt-link to="/rooms/new">Create a room.</nuxt-link></li>
                    <li>Invite your community to your room.</li>
                    <li>Do work alongside the peeps in your community. Every minute we'll capture a 2-second GIF of everybody on your team. So you can all see each other getting stuff done.</li>
                    <li><em>Coming soon.</em> Update your status with what you're working on. For extra accountability, and also so everybody else knows what the hell you do with your day. Therefore leading to a deeper human connection..</li>
                    <li><em>Coming soon.</em> Click somebody's face to start a 45-second video call with them (if they don't have Do Not Disturb turned on).</li>
                    <li>That’s it.</li>
                </ol>
            </div>
        </section>


        <section class="container max-w-3xl mt-40 hidden">
            <h1 class="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-none text-purple max-w-2xl mx-auto text-center">
                <span v-html="useCases[useCaseIndex]"></span><br/>With Your Followers
            </h1>
        </section>
    </div>
</template>
<script>
import RoomWorkers from '~/components/RoomWorkers.vue';
export default{
    head: {
      title: 'Create Accountability With Your Community',
    },
    components: {
        RoomWorkers
    },
    data: function () {
        return {
            useCaseIndex: 0,
            useCases: [
                'working',
                'studying',
                'practicing',
                'writing',
                'learning'                
            ]
        };
    }, 
    methods:{
        rotateUseCases(){
            if(this.useCaseIndex == (this.useCases.length - 1)){
                this.useCaseIndex = 0
            }
            else{
                this.useCaseIndex += 1
            }
        }
    },
    mounted(){
        setInterval(this.rotateUseCases, 1000);
    }
}
</script>