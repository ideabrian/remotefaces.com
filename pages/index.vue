<template>
    <div>   
        <header class="pt-40 pb-24 md:pt-48">            
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-purple max-w-3xl mx-auto">
                    <span class="bg-yellow-o7">Turn Your Audience into a Coworking Community</span>
                </h1> 
            </div>
        </header> 

         <section class="mx-auto mb-24 text-center container">
            <div class="max-w-md md:max-w-3xl mx-auto relative">
                <div class=" mb-4 grid md:grid-cols-2 gap-6">
                    <div class="col-span-1 relative worker online"><img src="https://remotefaces.s3.amazonaws.com/9-20200404223255.gif" alt="lorenzut" class="rounded" width="480" height="320"> <span class="absolute right-0 top-0 py-2 px-2 text-center"><span class="py-1 px-2 worker-username">lorenzut</span></span>
                        <!----><span class="absolute online-dot"></span>
                        <div class="worker-status py-2 px-3 text-sm absolute inline-block">Creating booger cam.</div>
                    </div>
                    <div class="col-span-1 relative worker"><img src="https://remotefaces.s3.amazonaws.com/51-20200407193308.gif" alt="janisozolins" class="rounded" width="480" height="320"> <span class="absolute right-0 top-0 py-2 px-2 text-center"><span class="py-1 px-2 worker-username">janisozolins</span></span>
                        <!----><span class="absolute online-status">37m ago</span>
                        <div class="worker-status py-2 px-3 text-sm absolute inline-block">searching for people who might be interested in us ☺️</div>
                    </div>                    
                </div>
                <span  id="working-together-text" class="font-hand">the RF co-founders working side-by-side <br/>while being 5,000 miles apart.</span>
            </div>
        </section>        

        <section class="container">            
            <div class="max-w-xl mx-auto">

                <div class="article text-xl">

                    <p class="text-2xl"><em>Turn my audience into a coworking community? Uhhhh... why the hell would I want to do that?</em></p>                   

                    <p>Fair question. Here are three answers:</p>

                    <h2>Answer #1: <span class="bg-yellow-o7">Stop creating exclusive content.</span></h2>

                    <p>Are you an online creator with fans? If so, <strong>hell yeah</strong>! That means you’ve already done the hard part. You’re already at a point where millions of people dream of being.</p>

                    <p>Now all that’s left to do is help those fans (because helping people is awesome), and get paid to do it (otherwise you’ll have to go get a real job).</p>                    

                    <div v-if="reason1">   

                        <p>This should be the easy part. This should be the point where you bask in the metaphorical sun while drinking metaphorical martinis, or whatever the cool kids drink these days. I mean, you already have people who love you. And you’re creative as fuck. </p>
                    
                        <p>So... </p>

                        <p>Ugh.</p>                     

                        <p>Sometimes connecting the dots is really hard. Yes, you have fans. Yes, your fans have money. And yes, your fans WANT to support you with some of that money. But you don’t know what the heck you’re supposed to sell them. So you can’t connect the dots.</p>

                        <p>That’s where Patreon came to the rescue. Patreon made it so that online creators no longer had to create courses, ebooks, or software products in order to get paid. All they had to was either:</p>

                        <ol class="list-decimal">
                            <li>Hide <strong>X%</strong> of their existing work behind a paywall, or </li>
                            <li>Create <strong>Y%</strong> more content to use as "exclusive content".</li>                            
                        </ol>

                        <p>Both are epic improvements over 10 years ago. But both are still imperfect. Because... what if you don't WANT to pick and choose which of your content should be free and which should be paid? What if you don't WANT to strategically withhold value and creativity from some of your work so you can use it as a carrot?</p>

                        <p>What if, instead, you want to have a FAR BIGGER IMPACT on your fans <em>without</em> doing all of the above? <em>Without</em> "selling out" and altering your creative process?</p>

                        <p>That's where Remote Faces comes in.</p>

                        <p>With Remote Faces you <strong>keep doing what you're already doing</strong>. Keep writing blog posts. Keep editing YouTube videos. Keep recording podcasts.</p>

                        <p>The only change? Let your fans be next to you while you do it.</p>

                        <p></p>
                        
                        <p><span class="link" @click="reason1 = false">Collapse this section.</span></p>
                    </div>
                    <p v-if="!reason1"><span class="link" @click="reason1 = true">Expand this section.</span></p>

                    <h2>Answer #2: <span class="bg-yellow-o7">Get paid to help the shit out of your biggest supporters.</span></h2>

                    <p>It’s human nature to want to help others.</p>

                    <p>Well, for most humans anyway 🤔.</p>

                    <div v-if="reason2">                        

                        <p>It makes us feel all warm and fuzzy inside. It makes us feel important. It's the reason many millenials have everything they've ever dreamed about but are still miserable (because they're working 50 hours a week helping giant companies make shit that nobody needs or really even wants).</p>

                        <p>Helping makes us happy.</p>

                        <p>So... which sounds more helpful to you?</p>

                        <ol class="list-decimal">
                            <li>Catch a fish for a hungry human.</li>
                            <li>Teach a hungry human how to fish.</li>
                        </ol>

                        <p>Trick question, because the answer is actually: <strong>inspire a human to fish</strong>.</p>

                        <p>There are 6 million YouTube videos teaching me how to fish. Cool. Done. These days knowledge is not the problem. Doing the work is.</p>

                        <p>We’re offering you the chance to inspire the fuck out of the people who like you.</p>
                        <p>We're offering you the chance to motivate others with your mere presence. Which might sound super narcisstic... but we ALL have idols. And we're ALL the object to someone else's idol. So why not make magic?</p>                        

                        <p>And sure, also make a few bucks. But that’s almost secondary.</p>
                        
                        <p><span class="link" @click="reason2 = false">Collapse this section.</span></p>
                    </div>
                    <p v-if="!reason2"><span class="link" @click="reason2 = true">Expand this section.</span></p>

                    <h2>Answer #3: <span class="bg-yellow-o7">Make it easy for your fans to fall in love with you... and each other.</span></h2>

                    <p>We all know that you’re a real human. In theory. I mean, we see you on your YouTube channel. We see your thumnail at the top of every blog post your write.</p>
                        
                    <p>But still, there’s something really cold and impersonal about seeing edited recordings of people.</p>

                    <div v-if="reason3">

                        <p>Remote Faces gives people a behind-the-scenes look at you. It's a place where <strong>it’s okay to let people see you pick your nose</strong>. It’s a place where you can be raw, and unfiltered, and unpolished.</p>

                        <p>And I have a hunch that this unpolished side of you will make you wildly more popular. We all fall in love so easily with the girl or boy next door. Precisely because they’re NOT untouchably perfect.</p>

                        <p>With Remote Faces, you too can be imperfect! You too can be the girl or boy next door!</p>

                        <p>But wait there's more.</p>

                        <p><del>With just 3 easy payments</del> &larr; oh sorry, wrong page.</p>

                        <p>There is more, though.</p>

                        <p>It's not just about your fans seeing you more intimately. It's about you seeing them.</p>

                        <p>When you see your fans you're able to better create things that they want. #marketresearch</p>

                        <p>And when you see your fans... your fans feel seen by you. Logic bomb!</p>

                        <p>Back to business for a quick second. What do you think I’ll give you more money for?</p>
                        <ol class="list-decimal">
                            <li>Being seen by you. And maybe getting an occasional personal note from you.</li>
                            <li>1 extra blog post every month.</li>
                        </ol>

                        <p>Yeah.</p>

                        
                        <p><span class="link" @click="reason3 = false">Collapse this section.</span></p>
                    </div>
                    <p v-if="!reason3"><span class="link" @click="reason3 = true">Expand this section.</span></p>
                    
                    
                    
                    

                    <h2><span class="bg-yellow-o7">To Summarize</span></h2>

                    <p>You’re a busy creator with fans who want more of you. But... you have so much on your freakin' plate that you don’t have <em>time</em> to give more. At least not in the current model where giving more means creating exclusive content.</p>

                    <p>So your fans remain fans. Not patrons. 😕</p>

                    <p>This is where we come in.</p>

                    <h3 id="You get…">With Remote Faces you get…</h3>

                    <p class="text-xl">✅ …to work side-by-side with your patrons (live)<br/>
                    ✅ …accountability through leading by example<br/>
                    ✅ …to feel connected while working alone<br/>                    
                    ✅ …to see your patrons succeeding (live)<br/>
                    ✅ …to engage with your patrons and encourage them<br/>
                    ✅ …to keep your patrons updated with what you’re up to<br/>
                    ✅ …recurring monthly revenue<br/>                    
                    ✅ …all of this while NOT doing more work (true story)</p>

                    <h3 id="Your patrons get…">And your patrons get…</h3>

                    <p class="text-xl">✅ …motivation from being next to you while you do your work<br/>
                    ✅ …sense of belonging to a likeminded community<br/>
                    ✅ …feeling connected while working alone<br/>
                    ✅ …a behind-the-scenes look at how you show up and work<br/>
                    ✅ …direct live support from you (optional, if you have the time)</p>


                </div>

            </div>

            
            <div class="mt-40 max-w-xl mx-auto text-center"> 
                <nuxt-link to="/new" class="button is-purple">Create Your Community</nuxt-link>
                <p class="mt-2 opacity-75">it takes less than 15 seconds :)</p>
            </div>

            <div class="mt-40 max-w-xl mx-auto" id="contact">  
                <h2 class="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-none">
                    FAQ
                </h2>              
                <div class="article mt-10 text-xl">
                    <div v-for="(question, index) in questions" :key="question.id">
                        <h4><span class="cursor-pointer hover:underline" @click="questions[index].visible = !questions[index].visible"><i class="text-sm mr-1 fa fa-chevron-down"></i> {{ question.question }}</span></h4>
                        <p style="margin-top: -1em;" v-if="questions[index].visible" v-html="question.answer"></p>
                    </div>
                </div>
            </div>

            <div class="mt-40 max-w-xl mx-auto" id="contact">  
                <h2 class="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-none">
                    Say Hi
                </h2>              
                <div class="article mt-10 text-xl">
                    <p>We started this project {{ days_old }} days ago and are building in lean fashion. Which means that feedback from people like you will wildly shape the future of Remote Faces.</p>
                    <p>So if you have an idea, or a concern, or just want to say "sup", send an email to Patrick and/or Janis. Seriously, we want to hear from you.</p>
                    <p>
                        <span v-html="patrickEmail"></span><br/>
                        <span v-html="janisEmail"></span>
                    </p>
                      
                    <p>And if you’d like to follow along with twice-per-month updates? Drop your email here. No spam ever. Unsubscribe anytime.</p>
                </div>          
                <form class="form relative" v-if="!subscribed">
                    <input class="input" type="email" v-validate="'required|email'" name="email" v-model="email"  placeholder="alex@doe.com"/>
                    <input class="input hidden" type="text" name="name" v-model="name" required/>
                    <button class="button is-small newsletter-button" @click.prevent="subscribeToNewsletter" native-type="submit" :disabled="subscriptionSending">Go</button>
                </form>
                <div v-else class="article">
                    <p>Thanks :)</p>
                    <p>Now, last step, could you please click the confirmation link in the email that our robot just sent you? In a twist of irony, this is done to prevent robots from signing up. 🤷‍♀️</p>
                </div>
            </div>

            <div class="mt-64 pt-64 mb-64 text-center">
                <p>Okay bye.</p>
            </div>

        </section>         


    </div>
</template>

<script>
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
    data: function(){
        return {
            patrickEmail: '<a class="link" href="mailto:patrick@lorenzut.com" target="_blank">patrick@lorenzut.com</a>',
            janisEmail: '<a class="link" href="mailto:janisozo@me.com" target="_blank">janisozo@me.com</a>',
            email: '',
            name: '',
            subscriptionSending: false,
            subscribed: false,
            reason1: false,
            reason2: false,
            reason3: false,
            questions: [
                {
                    visible: false,
                    question: 'What’s it cost?',
                    answer: 'You never pay a cent out of pocket. Instead, when your fans pay you to join your coworking space, we take a 12% cut of that payment.'
                },
                {
                    visible: false,
                    question: 'What’s your favorite color?',
                    answer: 'Hmmm, it’s not such a black and white answer for me 😂🤦‍♂️. It could be orange, purple, or green depending on context. Email Janis to find out his favorite color.'
                },
                {
                    visible: false,
                    question: 'How’s it work?',
                    answer: 'Okay, here are the boring deets:<br/><br/>1. You create a coworking space.<br/>2. You tell people about it.<br/>3. People pay you to join.<br/>4. Your camera captures an animated GIF of you every minute while you work. Same is true for everybody working alongside you.<br/>5. You and your coworkers update what you’re working on.<br/>6. Send positive vibes, field questions, and offer encouragement IF YOU WANT TO. Engagement is awesome, but sometimes you just want to put your head down and crank out work. That’s why engagement with your coworkers is built to be 100% optional.'
                },
                {
                    visible: false,
                    question: 'Can I use a custom domain?',
                    answer: 'Yes.'
                },
                 {
                    visible: false,
                    question: 'What if I want to offer this to my fans for free?',
                    answer: 'Then set the price to <strong>$0</strong>. That was easy.'
                },
                //  {
                //     visible: false,
                //     question: '?',
                //     answer: ''
                // },
                //  {
                //     visible: false,
                //     question: '?',
                //     answer: ''
                // },
                //  {
                //     visible: false,
                //     question: '?',
                //     answer: ''
                // },

            ]
        }
    },
    methods: {

        subscribeToNewsletter(){
            this.subscriptionSending = true
            this.$validator.validate('email').then((result) => {
                if (result) {
                    this.$axios.post('/newsletter/subscribe',{
                        email: this.email,
                        name: this.name
                    }).then((result) => {
                        if(result.data && result.data.success){
                            this.email = ''
                            this.subscribed = true

                        }else{
                            
                        }
                    }) 
                }
            })
        },
        setName(){
            this.name = 742
        }
    },
    mounted(){
        setTimeout(this.setName(), 1500);
    } 
    //this.$gtag('event', 'your_event', { /* track something awesome */})
}
</script>