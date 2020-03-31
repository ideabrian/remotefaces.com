<template>
    <div>
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40 z-10 relative">
            <div id="header-background" style="opacity:0.1;background-image:url(https://images.unsplash.com/photo-1475506631979-72412c606f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60);"></div>
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-3xl mx-auto">
                    Human Connection <br class="hidden md:block"/>for Remote Teams
                </h1>               
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-purple-200 mx-auto mt-12">                    
                   <!-- Are you working remotely? Or remotely working? Well, either way, inject a little office antics back into your life. -->
                   Most likely this tool won’t 400x your productivity. But I bet it’ll make you smile. Need to justify the cost of smiles to accounting? Just say "employee retention".
                </h2> 

                <nuxt-link to="/rooms/new" class="button">Create an Office</nuxt-link>
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
                    <li>Invite your coworkers to your room.</li>
                    <li>Do work alongside your coworkers. Every minute we'll capture a 2-second GIF of everybody on your team. So you can all see each other getting stuff done.</li>
                    <li><em>Coming soon.</em> Update your status with what you're working on. For extra accountability, and also so everybody else knows what the hell you do with your day. Therefore leading to a deeper human connection, and a chance that you'll have something halfway interesting to talk about at your next company retreat.</li>
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
      title: 'Creative Togetherness for Remote Teams',
    },
    components: {
        RoomWorkers
    },
    data: function () {
        return {
            useCaseIndex: 0,
            useCases: [
                'Study Spanish',
                'Work Remotely',
                'Practice Ukulele',
                'Write Words',
                'Cook Dinner',
                'Do Homework',
                'Practice Yoga',
                'Hit the Treadmill'
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