<template>
    <div>    
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-4xl mx-auto">
                    Human Connection <br class="hidden md:block"/>While We Work From Home
                </h1>
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-white mx-auto mt-8">
                    Virtual coworking for remote teams and online communities. Because (most of the time) it’s wonderful to be around other humans. Also, there’s dancing.
                </h2> 

                <nuxt-link class="button" to="/rooms/new">Create a Room</nuxt-link>
                <nuxt-link class="button" to="/demo">View/Join Demo</nuxt-link>
            </div>
        </header>

        <section class="container mt-20">
            <div class="max-w-xl mx-auto">
                <h2 class="text-purple text-4xl"><span class="bg-yellow">CHANGELOG</span></h2>
                <div class="article">
                    <p>
                        <strong>March 20, 2020:</strong> Launch v1. A stupidly simple MVP that uses your computer’s camera to take a still photo of you every 10 seconds and shares it publicly on the home page. That's all there is to it for now. More coming soon.
                    </p>
                    <p>
                        <strong>March 23, 2020:</strong> Add Rooms. Any user can create a room. For now all rooms are private, so one can only gain accesss to a room via a special invite link that room members have access to. The only public room is the one you see right here on the home page.
                    </p>
                    <p>
                        <strong>March 24, 2020:</strong> Properly display whether people are online or not, and whether they are in this specific room or not. Any given can only be in one room at any time. Because this is trying to mimic working in an office, at a coffee shop, or at a library. You can only be in one of those places at a time.
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
                        <li>Add status, so other people can see what you're working on. This should help with accountability. And should also help the place feel more alive as the majoriy of pictures taken will be pretty similar.</li>
                        <li>Add a notes section to top of room where room owners can add links to slack/zoom/hangouts/skype/whatever.</li>
                        <li>Add video support for browsers that support it. Keep still image as fallback.</li>        
                        <li>Add map so people can see where everyone else is working from.</li>
                        <li>Translate into Spanish.</li>
                        <li>Add https://meet.jit.si support.</li>
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
    //this.$gtag('event', 'your_event', { /* track something awesome */})
}
</script>