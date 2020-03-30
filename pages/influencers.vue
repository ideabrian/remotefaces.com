<template>
    <div>
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40 relative z-10">
             <div id="header-background" style="opacity:0.2;background-image:url(https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60);"></div>

            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-3xl mx-auto">
                    Get Paid to Create Alongside Your Patrons
                </h1>               
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-purple-200 mx-auto mt-12">                    
                    Let your most dedicated fans financially support you. Thank them with something <em class="text-yellow">way freaking cooler than exclusive content</em>. Help them be who they want to be.
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
                    <li>Share the room with your fans.</li>
                    <li><em>Coming soon.</em> Your fans pay to join your room. Just like Patreon, but without the need to create exclusive content. You set whatever price you want, then we take a flat $3 fee and send the rest to you.</li>
                    <li>Create alongside your fans. Every minute we'll capture a 2-second GIF of everybody in the room. So you can all see each other getting stuff done.</li>
                    <li><em>Coming soon.</em> Update your status with what you're working on. For extra accountability, and also so everybody else knows what the hell you do with your day. Therefore leading to a deeper human connection, and deeper fanship.</li>
                    <li><em>Coming soon.</em> Click somebody's face to start a 45-second video call with them (if they don't have Do Not Disturb turned on). Calls automatically end after 45 seconds so nobody has to awkwardly hangup :)</li>
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
      title: 'Get Paid to Create Alongside Your Patrons',
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