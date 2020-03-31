<template>
    <div>   
        <header class="bg-purple text-yellow pt-40 lg:pt-56 pb-32 md:pt-48 md:pb-40 -mb-40">            
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-2xl mx-auto">
                    Create. Together.
                </h1>               
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-white mx-auto mt-8">                    
                    <em>Remote Faces</em> is a <span class="text-yellow">virtual coworking platform</span> for online creators who dig human connection. <span class="text-purple-200 text-xl lg:text-2xl block mt-2 opacity-50">#loneliness &nbsp; #mentalhealth &nbsp; #accountability</span>
                </h2> 
                <div class="mt-40 max-w-md md:max-w-6xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black"> 
                    <nuxt-link to="/influencers" class="col-span-1 relative bg-purple-200 py-6 px-10 text-xl hover:bg-yellow-200" style="border-radius:6px">
                        <span class="bg-yellow block mb-4">Cowork with Your Audience</span>
                        <h3 class="font-bold mb-4 text-purple text-2xl">For <span class="underline" v-tooltip="'Yeah, I know, I hate this word too.'">"Influencers"</span></h3>                        
                        <p>Get intimate with your followers by creating alongside them. And get paid doing it.</p>
                    </nuxt-link> 
                    <nuxt-link to="/teams" class="col-span-1 relative bg-purple-200 py-6 px-10 text-xl hover:bg-yellow-200" style="border-radius:6px">
                        <span class="bg-yellow block mb-4">Cowork with Your Team</span>
                        <h3 class="font-bold mb-4 text-purple text-2xl">For Remote Teams</h3>
                        <p>Trade in loneliness for camaraderie... and the chance to see your boss pick their nose.</p>
                    </nuxt-link> 
                    <nuxt-link to="/communities" class="col-span-1 relative bg-purple-200 py-6 px-10 text-xl hover:bg-yellow-200" style="border-radius:6px">
                        <span class="bg-yellow block mb-4">Cowork with Your Peers</span>
                        <h3 class="font-bold mb-4 text-purple text-2xl">For Communities</h3>
                        <p>Creating is hard when twitter is always a click away. So... add some accountability to your life.</p>
                    </nuxt-link> 
                </div>

                <div class="mt-56 mb-20">
                    Nothing to see here. Choose an option above!
                    <div class="mt-4 text-3xl text-white font-bold">;)</div>
                </div>

            </div>
        </header>  
        <section class="py-20 -mb-40 bg-yellow-200 hidden">
            <div class="max-w-xl mx-auto container">    

                <p class="mb-20"><em>Remote Faces was an idea that <a class="link" href="https://lorenzut.com" target="_blank">this guy</a> had on March 20th. It's coming along nicely, but please keep in mind that it's only {{ days_old }} days old. Or in other words: please <a href="https://www.pbh2.com/wordpress/wp-content/uploads/2013/07/Bear-GIFS-dancing.gif" target="_blank">bear</a> with me! And if you’d like to do more than just <a href="https://www.pbh2.com/wordpress/wp-content/uploads/2013/07/Bear-GIFS-dancing.gif" target="_blank">bear</a> with me, please please please <a href="https://calendly.com/lorenzut/30min" target="_blank" class="link">setup a 30 minute call with me</a>. You can also follow progress below!</em></p>

                <h2 class="text-purple text-4xl mb-4"><span class="bg-yellow">CHANGELOG</span></h2>
                <div class="article">
                    <p>
                        <strong>March 20, 2020:</strong> Launch v1. A stupidly simple MVP that uses your computer’s camera to take a still photo of you every 10 seconds and shares it publicly on the home page. That's all there is to it for now. More coming soon.
                    </p>
                    <p>
                        <strong>March 23, 2020:</strong> Add Rooms. Any user can create a room. For now all rooms are private, so one can only gain accesss to a room via a special invite link that room members have access to. The only public room is the one you see right here on the home page.
                    </p>
                    <p>
                        <strong>March 24, 2020:</strong> Properly display whether people are online or not, and whether they are in this specific room or not. Any given user can only be in one room at any time. Because this is supposed to halfway mimmick real life.
                    </p>
                    <p>
                        <strong>March 25, 2020:</strong> Create animated gif with <a href="https://github.com/yahoo/gifshot" target="_blank">gifshot</a> if supported. Keep using still images as fallback if gif not supported. Also at least temporarily switch to saving every 60 seconds instead of every 10 seconds, as the gifs are significantly larger. Along with the gif I'm continuing to save still images, as they'll be used at the end of sessions to stitch together a gif recap of your face.
                    </p>
                </div>
                
                <h2 class="text-purple text-4xl mt-20 mb-4"><span class="bg-yellow">ROADMAP</span></h2>
                <div class="article">
                    <p>The following roadmap depends SOOOO MUCH on the type of feedback I get. Please <a href="mailto:patrick@lorenzut.com">email me</a> with some. That said, rough itinerary is as follows:</p>

                    <ol class="list-decimal">                        

                        <li>Add sessions. Rooms (already exist) are places where people can hang out all the time and cowork or co-study or whatever. Sessions are more specific events WITHIN a room with a targeted focus and duration. At the end of each session is a 10 minute group video hangout where peeps can just chill.</li>
                        <li>Add session questions. If set by the session creator (it'll be optional) each participant will be required to answer the question before starting the session. This'll be awesome for accountability. eg I can ask "what do you hope to accomplish in the next 90 minutes?"</li>
                        <li>Add https://meet.jit.si support for post-session hangouts.</li>
                        <li>Create session recap. A 10-second animated GIF of each participant's face over the course of the session.</li>
                        <li>Add room settings. Some things I want to allow the room owner to define are:
                            <ul class="ml-8 list-disc">
                                <li>Who can create sessions? Anybody, owner only, admin only.</li>
                                <li>Can room members message each other?</li>
                            </ul>
                        </li>
                        <li>Start charging money. Not sure what that looks like yet. But, since I'm not going to sell data, and since I want to make this my full-time gig... I have to figure out a way.</li>
                        <li>Add status while inside a room, so other people can see what you're working on. This should help with accountability. And should also help the place feel more alive as the majoriy of pictures taken will be pretty similar.</li>
                        <li>Add a notes section to top of room where room owners can add links to slack/zoom/hangouts/skype/whatever.</li>                                                
                        <li>Add map so people can see where everyone else is.</li>
                        <li>Translate into Spanish. Get my girlfriend to translate into German. And then slowly add other translations as people offer.</li>
                        <li>Stats about hours logged, just like GitHub. So you can look back and see how many hours you worked, how many hours you practiced piano, etc.</li>                        
                        <li>Watch Me Work javascript plugin that you can add to your own website.</li>
                        <li>Face-detection AI to detect whether you’re at your computer or not.</li>
                        <li>Emotion-detection AI. Not sure how well this will work, but might be really cool to be able to see, for example, that you get really stressed every time you're working on a specific type of task. Before implementing this I want to make sure my privacy policy is decked out. Note to anybody reading this: I WILL NEVER SELL YOUR DATA.</li>
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
      title: 'Virtual Coworking for Online Creators',
    },
    computed: {
        days_old: function(){
            var now = new Date();
            var start = new Date('March 20, 2020');
            var difference = now - start;
            var days_old = (difference / (1000*60*60*24)).toFixed(5)
            return days_old
        }
    },    
    components: {
        RoomWorkers
    },    
    //this.$gtag('event', 'your_event', { /* track something awesome */})
}
</script>