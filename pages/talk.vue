<template>
    <div>    
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold">
                    Talk to Someone.<br/>Change the World.
                </h1>
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-white mx-auto mt-8">
                    Talk to real humans about real human things, <nuxt-link to="/about#pricing" class="text-yellow underline hover:text-white">starting at $30 per month</nuxt-link>.  -->
                    <!-- A mental health space for do-gooder tech workers who want more from life than a killer paycheck. Because this is your life, and you're free to spend it helping others. -->
                    A mental health space for tech workers. Because talking to computers is cool, but talking to humans is… human.
                    <!-- Because talking to computers is cool, but talking to humans is… human. -->
                </h2>                
            </div>
        </header>

        <section class="mx-auto -mt-16 container text-center">                            
            <div class="max-w-2xl mx-auto mb-4">                
                 <video autoplay loop muted>
                    <source src="/videos/waiting.mp4" type="video/mp4">
                    <img src="/images/patandandy.jpg" class="rounded"/>
                </video> 
            </div>
            <div class="relative">
                <button class="button bg-purple" @click.prevent="talk">Talk to This Human for 3 Minutes</button>
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
    </div>
</template>