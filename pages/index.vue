<template>
    <div>    
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-4xl mx-auto">
                    Human Connection <br class="hidden md:block"/>While We Work From Home
                </h1>
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-white mx-auto mt-8">
                    Virtual coworking for remote teams, freelancers, and solopreneurs. Because (most of the time) it’s wonderful to be around other humans. Also, there’s dancing.
                </h2> 

                <nuxt-link class="button" to="/rooms/new">Create a Room</nuxt-link>
                <div>
                    Or join the free-for-all below.
                </div>
            </div>
        </header>

        <section class="mx-auto -mt-16 text-center container">                            
            <RoomWorkers ref="roomWorkersCom" :room_slug="'test'"/>                     
        </section>
        

        <section class="container mt-20">
            <div class="max-w-xl mx-auto">
                <h2 class="text-purple text-4xl"><span class="bg-yellow">CHANGELOG</span></h2>
                <div class="article">
                    <p>
                        <strong>March 20, 2020:</strong> Launch v1. A stupidly simple MVP that uses your computer’s camera to take a still photo of you every 10 seconds and shares it publicly on the home page. That's all there is to it for now. More coming soon.
                    </p>
                </div>
            </div>
        </section>

        <section class="container mt-20">
            <div class="max-w-xl mx-auto">
                <h2 class="text-purple text-4xl"><span class="bg-yellow">ROADMAP</span></h2>
                <div class="article">
                    <p>The following roadmap depends SOOOO MUCH on the type of feedback I get. Please <a href="mailto:patrick@lorenzut.com">email me</a> with some. That said, rough itinerary is as follows:</p>

                    <ol class="list-decimal">                        
                        <li>Profile page where you can say who you are, contact info, what you're working on.</li>
                        <li>Add a link to contact people via zoom/hangouts/skype/whatever.</li>
                        <li>Add video support for browsers that support it. Keep still image as fallback.</li>
                        <li>Teams/rooms. So, for example, you could see only fellow <em>IndieHackers</em> coworkers, or fellow coworkers from your company. These could be both locked and unlocked, aka private or public.</li>        
                        <li>Create a cool prize for the X people to log Y hours.</li>                                                                
                        <li>30 second live dance party every 30 minutes. Only for people who worked the past 30 minutes.</li>
                        <li>Stats about hours logged, just like GitHub. So you can look back and see how many hours you worked in the coworking space each day.</li>
                        <li>Do Not Disturb. To opt out of the live text chat.</li>                        
                        <li>“Talk to Someone” button that pairs you randomly with another user for a 3 minute video chat. You’ll never talk to that person again unless you both click “yeah, I’d like to talk to that person again” after the call is over. This could be used to shoot the shit, or to bounce an idea off someone rando.</li>
                        <li>At the end of each day create an animated GIF from all still images taken while at work that day.</li>
                        <li>Watch Me Work javascript plugin that you can add to your own website.</li>
                        <li>Face-detection AI to detect whether you’re at your computer or not.</li>
                        <li>Penis-detection AI to detect... well. Yeah. You all remember chat roulette.</li>
                        <li>Personality questions, like OkCupid does, so you can work with people you jive with.</li>
                        <li>Time tracking.</li>
                    </ol>

                </div>
            </div>
        </section>

    </div>
</template>

<script>
import RoomWorkers from '~/components/RoomWorkers.vue';
export default {        
    head: {
      title: 'Virtual Coworking for Remote Workers',
    },
    components: {
        RoomWorkers
    }
}
</script>