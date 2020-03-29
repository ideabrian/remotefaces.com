<template>
    <div>    
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-4xl mx-auto">
                    <!-- Human Connection <br class="hidden md:block"/>While We Work From Home -->
                    <!-- Accountability Through Human Connection -->
                    <!-- We Help Communities <br class="hidden md:block"/>Study Together -->
                    <!-- Fitness Sessions for Your Online Community -->
                    <!-- A Place for Communities <br class="hidden md:block"/>to Study Together -->
                    <!-- <span v-html="useCases[useCaseIndex]"></span><br/>With Your People -->
                    Human Connection <br class="hidden md:block"/>For Remote Workers
                </h1>
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-white mx-auto mt-8">                    
                    <!-- Virtual co-working, co-studying, and co-exercising. Because togetherness is cooler than loneliness. And getting stuff done is cooler than slacking off. -->
                    Virtual coworking for remote teams, online communities, and solopreneurs. Trade in your loneliness for connection, accountability... and occasional nose-picking.
                    <!-- A place for you and your community to do stuff. Together. Because human connection increases accountability and happiness at the same time. It's science, I think. -->
                </h2> 

                <nuxt-link class="button" to="/rooms/new">Create a Room</nuxt-link>
                <p class="leading-snug">or join the people below doing... <br class="hidden md:block"/>whatever they're doing</p>
            </div>
        </header>


        <section class="mx-auto -mt-16 text-center container">
            <RoomWorkers ref="roomWorkersCom" :room_id="1"/>
        </section>
<!-- 
        <section class="mt-40">
            <div class="container max-w-3xl">
                <h2 class="text-4xl font-bold leading-snug">How’s it work?</h2>
                <p>Pre-requisitie definitions.</p>
                <p>Room = the place that your audience members can access 24/7. eg Awesome Sauce Music Collective</p>
                <p>Sessions = the individual sessions WITHIN a room where you do things together for a set period of time. eg Practice Guitar for 60 Minutes</p>
                <p>Okay now let's dive in.</p>
                <p></p>
            </div>
        </section>

        <section class="mt-40">
            <div class="container max-w-6xl">
                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-1">
                        <h2 class="text-4xl font-bold leading-snug">Get to know the people who care about you.</h2>
                        <p>You can’t fake connection. </p>
                    </div>
                    <div class="col-span-1">
                        <span style="font-family: 'Gloria Hallelujah', cursive;">try it</span>
                    </div>
                </div>                
            </div>
        </section>
        <section class="mt-40">
            <div class="container max-w-6xl">
                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-1">
                        <h2 class="text-4xl font-bold leading-snug">without giving them a headache.</h2>
                        <p>You can’t fake connection. </p>
                    </div>
                    <div class="col-span-1">
                        <span style="font-family: 'Gloria Hallelujah', cursive;">try it</span>
                    </div>
                </div>                
            </div>
        </section> -->
<!-- 

        <section class="mt-40">
            <div class="max-w-2xl mx-auto container">
                <h2 class="text-purple text-4xl leading-tight">The first platform to focus on producitivty <strong>AND</strong> mental health.*</h2>
                <span class="bg-yellow">* That might not actually be true, but it sounds cool 😁</span>
                <div class="article mt-4">
                    <p>I built Remote Faces because I get lonely really easily. When I'm lonely I get the blues, and when I get the blues I stare at my screen instead of doing real work. Which makes me feel like shit about myself, thereby furthering my depressed procrastination.</p>
                    <p>I'm passionate about mental health even more than I am about productivity and accountability, and I’m <em>especially</em> interested in where all of these things intersect. I believe that mental health is more important than productivity just like I believe that people are more important than profit. And at the same time, I think it's a mistake to be so binary in our thinking. Why can't we want and obtain multiple things at the same time?</p>
                    <p>If you’ve tried all the productivity apps and they didn’t wondrously morph you into a productivity superhero... well I’m pretty inclined to think that the answer to all of our tech-related anxiety and procrastination problems ISN'T more tech... but instead is MORE HUMAN CONNECTION.</p>
                    <p>Of course, technically speaking, Remote Faces <em>is</em> tech. But there's a big difference between tech that tries to facilitate human connection and tech that tries to automate it.</p>
                </div>
            </div>
        </section> -->
<!-- 
        <section class="mt-40">
            <div class="max-w-2xl mx-auto container">
                <h2 class="text-purple text-4xl leading-tight">Put a camera on yourself and watch your focus skyrocket.</h2>
                <div class="article mt-4">
                    <p>I’ll write this section tomorrow</p>
                </div>
            </div>
        </section>

        <section class="mt-40">
            <div class="max-w-2xl mx-auto container">
                <h2 class="text-purple text-4xl leading-tight">But before you start working... what do you plan on accomplishing?</h2>
                <div class="article mt-4">
                    <p>I’ll write this section tomorrow</p>
                </div>
            </div>
        </section>

        <section class="mt-40">
            <div class="max-w-2xl mx-auto container">
                <h2 class="text-purple text-4xl leading-tight">Get creepy insights... into yourself.</h2>
                <div class="article mt-4">
                    <p>I’ll write this section tomorrow</p>
                </div>
            </div>
        </section>

        <section class="mt-40 bg-purple-800 py-20 text-white">
            <div class="max-w-5xl mx-auto container">
                <h2 class="text-purple text-4xl leading-tight">Your Daily Recap</h2>
                <div class="mt-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="col-span-1">
                            <img src="https://remotefaces.s3.amazonaws.com/1-20200326190052.gif" alt="lorenzut Daily Recap"/>
                        </div>
                        <div class="col-span-1">
                            <ul>
                                <li class="p-2 mb-2 bg-yellow text-purple"><span class="opacity-50">2h 18m</span> (uncategorized)</li>
                                <li class="p-2 mb-2 bg-yellow text-purple"><span class="opacity-50">45m</span> Add GIF support with still image fallback.</li>                                
                                <li class="p-2 mb-2 bg-yellow text-purple"><span class="opacity-50">2h 18m</span> Talk with</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section> -->

        <section class="mt-40 py-20 -mb-40 bg-yellow-200">
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
    head: {
      title: 'Digital Togetherness for Internet Humans',
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
    components: {
        RoomWorkers
    },
    mounted(){
      setInterval(this.rotateUseCases, 1000);
    }
    //this.$gtag('event', 'your_event', { /* track something awesome */})
}
</script>