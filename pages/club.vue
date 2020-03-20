<template>
    <div>    
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-6xl mx-auto">
                    The Headless Chicken <br/>Solopreneur Club
                </h1>
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-white mx-auto mt-8">
                    If you're a solopreneur whose heart is so soft and puffy that have a hard time doing anything that makes money without feeling like a soul sucker... then there are at least two of us!
                </h2>   
                <div class="text-xl mt-10 md:text-2xl lg:text-3xl font-bold text-pink">
                    <span class="py-3 px-6 md:py-5 md:px-10 bg-white inline-block">+1 (503) 809-2496</span>
                </div>
                <p class="mx-auto text-center max-w-xl mt-3 leading-snug">SMS or WhatsApp.<br/>100% anonymous. 0% spam.<br/>This is my actual phone number --- don’t be a dick.</p>
            </div>
        </header>

        <section class="mx-auto -mt-16 container text-center hidden">                            
            <!-- <div class="max-w-2xl mx-auto mb-4">                
                 <video autoplay loop muted>
                    <source src="/videos/waiting.mp4" type="video/mp4">
                    <img src="/images/patandandy.jpg" class="rounded"/>
                </video> 
            </div> -->
            <div class="relative">
                <button class="button bg-purple" @click.prevent="talk">24/7 Text Hotline</button>
                <div v-if="listenerOnline" class="mt-1 text-teal-700">
                    Online Now
                </div>
                <div v-else-if="$store.getters.isLoggedIn" class="mt-1 text-pink opacity-75">
                    Offline - Start a Conversation
                </div>
            </div>

            <div class="max-w-lg mx-auto mt-10 opacity-75 text-purple article text-left">
                <p>Click the button and you’ll start a video chat with the human pictured above --- a fellow tech worker who has a passion for the vulnerable side of life.</p>
                <p>The call will pause after 3 minutes and will only continue if you BOTH click 'extend'. Because we understand that you won’t vibe with everyone, and we understand how awkward it is to excuse yourself from a call!</p>
                <p>Talk about <em>almost</em> anything you want, from your boss to your love life, from your perfectionism to your weekend plans.</p>
                <!-- <p>And if you like listening, <nuxt-link to="/listen">check this out</nuxt-link>.</p> -->
                <!-- <p>Or check out the <nuxt-link to="/forum">feelings forum</nuxt-link> if a voice call isn’t what you’re looking for right now.</p> -->
            </div>
        </section>
        

        <section class="bg-yellow py-20">
            <section class="container">
                <div class="max-w-2xl text-center mx-auto article">
                    <h3 class="mb-10">
                        <em class="text-3xl block">"We cannot solve our problems with the same thinking we used when we created them."</em>
                        <span>- Albert Einstein</span>
                    </h3>
                </div>
                <div class="max-w-xl mx-auto article">
                    <p>Unabated capitalism and an overreliance on technology is what got us into this mess. And as great as it would be, it seems unlikely that those same things will get us back out. Maybe a Fortune 100 company will altruistically create an Aritifical Intelligence robot that completely eliminates our thirst for authentic human connection... but we’re not going to sit around waiting for that to happen.</p>
                    <p>It’s for this reason that FHS is an ultra low-tech solution, despite being founded by a former UI Designer, Full-Stack Developer, and Machine Learning Engineer. The lack of "sophistication" is on purpose.</p>
                    
                    <p>And it’s for this reason that FHS gives away 50% of its profits (though, disclaimer, we don't have any profits yet) to POC-, woman-, and trans-led organizations working to bring diversity and equity to tech. One day we might pivot to nonprofit and give away 100% of profits, but for now 50% seems like a healthy balance. If you have thoughts on this I'd love to hear them!</p>
                               
                </div>
            </section>
        </section>

        <section class="container mt-20">
            <div class="max-w-xl mx-auto article">
                <h2>To Care is Human</h2>
                <p>We’re not broken for being unable to conform to the capitalist machine, without question, without existential fear. We’re not broken because absurd paychecks are unable to buy out our feeling that something’s missing. We’re not broken for wondering why we’re here and what the hell we’re doing. We’re not broken for wanting help and wanting to matter.</p>
                
                <p>We’re just being human.</p>            
            </div>
        </section>

        <section class="container mt-20">
            <div class="max-w-xl mx-auto article">
                <h2>To Feel is Human</h2>
                <p>There’s nothing surprising about the massive propensity for tech workers to suffer from imposter syndrome, or shiny object syndrome, or anxiety, or loneliness, or depression, or accountability problems, or burnout.</p>
                
                <p>We're just being human.</p>            
            </div>
        </section>


             <!-- <section class="container mt-20">
            <div class="max-w-xl mx-auto article">
                <h2>A Human Approach to Mental Health, and to Connection</h2>
                <p>Remember that time you downloaded a habit tracking app and you immediately started doing the things you'd been putting off for years? Yeah, me neither. Nor do I remember ___. Because there are some problems that we just can't fix with software.</p>
                <p>And trust me, this PAINS me. As a software devloper with a flower pedal for a heart, believe that I've tried this more times than I can count. And it doesn't work.</p>
            
            </div>
        </section> -->

<!--
        <section><h2>You're Not Alone</h2></section>


        <section>
            <h2>Because Your Shame Isn't Helping Anybody</h2>
            <p></p>
        </section>

        <section>
            <h2>A Human Approach to Mental Health</h2>
            <p>Remember that time you downloaded a habit tracking app and you immediately started doing the things you'd been putting off for years? Yeah, me neither. Nor do I remember ___. Because there are some problems that we just can't fix with software.</p>
            <p>And trust me, this PAINS me. As a software devloper with a flower pedal for a heart, believe that I've tried this more times than I can count. And it doesn't work.</p>
            <p>Because talking to computers is cool, but talking to humans is… human.</p>
        </section>

        <section class="container py-20">
            <div class="max-w-2xl mx-auto article">
                <h2>
                    Full Stack Mental Health. 24/7.
                </h2>
                <p>From serious to silly, from peer-to-peer support to licensed therapy*, from text messages to in-person meetups, we are the support that YOU need. Exactly how and when you need it.</p>
                <p>We’re the first platform to combine licensed therapy and peer-to-peer support in a single platform.</p>
            </div>
        </section>


        <section>
            Reclaim Your Human Side
        </section>


        <section class="container py-20">
            <div class="max-w-2xl mx-auto article">
                <p>A horribly unaddicting community.</p>
                <p>Built on 1-to-1 connections.</p>
            </div>
        </section>


        <section class="container py-20">
            <div class="max-w-2xl mx-auto article">
                <p>Help yourself. Help each other. Help the world.</p>
                <p>You have existential crises because you're not doing enough. Because you don't matter enough. Because you're not having an impact. And boy oh girl do I get it.</p>
            </div>
        </section>

        <section class="container py-20">
            <div class="max-w-2xl mx-auto article">
                <h2>This Isn't A Line Item</h2>
                <p>If you're looking for a way to justify the cost of this membership... I doubt you'll find it. This isn't a place to help you with your sales funnel, or your salary negotiation, or your marketing strategy. You will not have a measurable ROI.</p>
                <p>Instead, this is a place to help you look deep inside yourself and see what you like and what you don't like, what you want to keep and what you want to change, who you are versus who you are being. This is a place to build connections with others who think similar thoughts, to challenge yourself to be who you know you can be, to help others make the impact that you know they're capable of. And if that's not worth a coffee a day to you... then we're just not right for each other and that’s cool.</p>
            </div>
        </section>

        <section class="container py-20 ">
            <div class="max-w-2xl mx-auto article">
                <h2>A Human Approach to Accountability</h2>

                <p>"You just have to show up consistently" is the most cliched advice that influencers give. Because it's the thing we solopreneurs and freelancers are so epicly bad at. Things get tough and we hide. This is not laziness. It's fear. It's depression, or anxiety, or imposter syndrome, or shame, or perfectionism, or any of a number of things. I suffer these things just as badly as anybody else I've ever met, and I've also managed to fight through them. If you join FHS I promise the same will be true for you. <a href="" class="link">Ask me how.</a></p>
            </div>
        </section>

        <Talk ref="talkDiv"/> -->
    </div>
</template>

<script>
import Talk from '~/components/Talk.vue';
export default {        
    head: {
      title: 'Mental Health for Tech Workers',
    },
    data: function(){
        return { 
            listenerOnline: false
        }
    },
    components: {
        Talk
    },
    methods: {
        async joinTalk(roomName){
            this.$refs.talkDiv.roomName = roomName            
            await this.$refs.talkDiv.joinTalk()   
            this.$refs.talkDiv.setRoomInitialized()         
            this.$refs.talkDiv.waitForListener()            
        },
        async talk(){
            try {
                //create room
                this.$axios.post('/talks').then((result) => {
                    if(result.data && !result.data.noListenerAvailable){
                        this.joinTalk(result.data)
                    }else{
                        if(this.$store.getters.isLoggedIn){
                            $nuxt.$router.push('/offline')
                        }else{
                            $nuxt.$router.push('/join')
                        }
                    }
                }) 
            } catch (e) {
                console.log(e)
            }
            
        },
        isAListenerAvailable(){
            this.$axios.get('/listener').then((result) => {
                if(result.data && result.data.id){
                    this.listenerOnline = true
                }
            })
        }     
    },
    mounted(){
        this.isAListenerAvailable()
    }
}
</script>