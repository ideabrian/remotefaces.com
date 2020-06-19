<template>
    <div>   
        <header class="bg-purple text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
            <div class="container text-center">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-4xl mx-auto">                    
                    Human Connection <br class="hidden md:block"/>For Remote Workers
                </h1>
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-3xl text-white mx-auto mt-8">                    
                    Virtual coworking for remote teams, online communities, and solopreneurs. Trade in your loneliness for connection, accountability... and occasional nose-picking.                    
                </h2> 

                <nuxt-link class="button" to="/new">Create a Room</nuxt-link>
                <p class="leading-snug">or join the people below doing... <br class="hidden md:block"/>whatever they're doing</p>
            </div>
        </header>

        <section class="mx-auto -mt-16 text-center container">
            <div class="max-w-md md:max-w-6xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div class="col-span-1 relative worker" :class="{'online' : worker.online}" v-for="worker in workers" :key="worker.username">
                    <img :src="worker.image" :alt="worker.username" class="rounded" width="480" height="320"> 
                    <span class="absolute right-0 top-0 py-2 px-2 text-center"><span class="py-1 px-2 worker-username">{{ worker.username }}</span></span>
                    <span v-if="worker.online" class="absolute online-dot"></span>
                    <div v-if="worker.status" class="worker-status py-2 px-3 text-sm absolute inline-block">{{ worker.status }}</div>
                </div>
            </div>
        </section>        

        <section class="container">            
            <div class="max-w-xl mx-auto">

                <div class="mb-40 mt-40 text-center"> 
                    <nuxt-link to="/new" class="button is-purple">Create Your Community</nuxt-link>
                    <p class="mt-2 opacity-75">it takes less than 15 seconds :)</p>
                </div>

                <div class="article text-xl">

                    <p class="text-2xl"><em>Virtual coworking? Uhhh... why the hell would anyone ever want to do that?</em></p>                   

                    <p>No clue. This website is mostly just a portfolio piece for <a href="https://lorenzut.com">My Freelancing Services</a>. So I'm not that invested in whether you use it or not.</p>

<!--                     
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
                    ✅ …direct live support from you (optional, if you have the time)</p> -->


                </div>

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
                    <p>Have an idea, or a concern, or just want to say "sup"? Send me an email. Seriously, I want to hear from you.</p>
                    <p>
                        <span v-html="patrickEmail"></span><br/>
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
            workers: [
                {
                    username: 'lorenzut',
                    image: 'https://remotefaces.s3.amazonaws.com/9-20200404223255.gif',
                    online: true
                },
                {
                    username: 'pliao39',
                    image: 'https://remotefaces.s3.amazonaws.com/35-20200328191601.gif',
                    online: true
                },
                {
                    username: 'janisozolins',
                    image: 'https://remotefaces.s3.amazonaws.com/51-20200411140407.gif',
                    online: true
                },
                {
                    username: 'shuan',
                    image: 'https://remotefaces.s3.amazonaws.com/47-20200407153020.gif',
                    online: true
                },
                {
                    username: 'jack',
                    image: 'https://remotefaces.s3.amazonaws.com/46-20200408090718.gif',
                    online: true
                },
                {
                    username: 'adrian2020',
                    image: 'https://remotefaces.s3.amazonaws.com/43-20200401100913.gif',
                },
                {
                    username: 'jason',
                    image: 'https://remotefaces.s3.amazonaws.com/50-20200403155441.gif',
                },
                {
                    username: 'gabriele',
                    image: 'https://remotefaces.s3.amazonaws.com/49-20200401150012.gif',
                }
                
            ],
            patrickEmail: '<a class="link" href="mailto:patrick@lorenzut.com" target="_blank">patrick@lorenzut.com</a>',
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
                    answer: 'Nothing.'
                },
                {
                    visible: false,
                    question: 'What’s your favorite color?',
                    answer: 'Hmmm, it’s not such a black and white answer for me 😂🤦‍♂️. It could be orange, purple, or green depending on context.'
                },
                {
                    visible: false,
                    question: 'How’s it work?',
                    answer: 'Okay, here are the boring deets:<br/><br/>1. You create a coworking space.<br/>2. You tell people about it.<br/>3. Your camera captures an animated GIF of you every minute while you work. Same is true for everybody working alongside you.<br/>4. You and your coworkers update what you’re working on.<br/>5. Profit. At least emotionally.'
                },
                {
                    visible: false,
                    question: 'Can I use a custom domain?',
                    answer: 'Yes.'
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