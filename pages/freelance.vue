<template>
    <div>    
        <header class="bg-purple-800 relative text-yellow pt-40 pb-32 md:pt-48 md:pb-40">
            <video autoplay loop muted class=" absolute top-0 left-0 bottom-0 right-0 opacity-50 w-full h-full object-cover">
                <source src="/videos/waiting.mp4" type="video/mp4">
                <img src="/images/patandandy.jpg" class="rounded"/>
            </video>
            <div class="container text-center relative">
                <h1 class="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-none text-yellow-gold max-w-6xl mx-auto">
                    Hire Me
                </h1>
                <h2 class="text-2xl lg:text-3xl leading-tight max-w-4xl text-white mx-auto mt-8 opacity-75">
                    I’m a full stack developer, <span class="underline" v-tooltip="'= Machine Learning'">ML</span> Engineer, <span class="underline" v-tooltip="'= pretty'">UI</span>/<span class="underline" v-tooltip="'= user-friendly'">UX</span> designer, copywriter, and <span class="underline" v-tooltip="'Conversion Rate Optimization. AKA changing stuff and then running split tests to see what works. Good for people who care about money.'">CRO</span> dude, amongst other things. A Patrick of all trades, Jack of none. My approximated hourly rate is $120/hr. But I work on a per-project fee, because hourly billing stresses me out.
                </h2>   
                <span class="button">Email Me</span>
                <p class="mx-auto text-center max-w-xl mt-3 leading-snug">Or read on to see if we’re a good fit.</p>
            </div>
             
        </header>
        
        <section class="py-10 bg-purple-800 text-white relative">
            <div class="container max-w-2xl">
                <h2 class="text-3xl">Hire me to <span class="font-bold">{{ jobs[jobIndex] }}</span>.</h2>
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

        <section class="outline" id="toc">
            <div class="container">
            <h2>WHY I’M ALMOST CERTAINLY THE WORST (but <em>maybe</em> the best) PERSON FOR THE JOB.</h2>
            
            <a class="toc-chapter" href="/#values">
                <div class="toc-chapter-number"><span>1</span></div>
                <div class="toc-chapter-title">
                those pesky values
                </div>
            </a>
            
            <a class="toc-chapter" href="/#ego">
                <div class="toc-chapter-number"><span>2</span></div>
                <div class="toc-chapter-title">
                help, i can’t find my ego
                </div>
            </a> 
            
            <a class="toc-chapter" href="/#skills">
                <div class="toc-chapter-number"><span>3</span></div>
                <div class="toc-chapter-title">
                mad skills for days
                </div>
            </a>        
            </div>
        </section>
        <section class="outline">
            <div class="container">
                <h2>IF I SEEM MORE CHARMING THAN ANNOYING...</h2>
                <a class="toc-chapter" href="/#contact">
                <div class="toc-chapter-number"><span>4</span></div>
                <div class="toc-chapter-title">
                    contact me
                </div>
                </a>          
            </div>
        </section>

        <section class="chapter" id="values">
            <header>      
            <h2>THOSE PESKY <span>VALUES</span></h2>
            </header>
            <article class="article"> 

            <p>I value ridiculous laughs, tomfoolery, ballyhoo, attempting to frown while skipping, existential crises, type 2 fun, eco-friendly glitter, naked bike rides, ultimate frisbee, almond butter, expertly-roasted ‘mallows, bunny ears, funkadelic tunes, shower thoughts, and stories of romance.</p>

            <p>Pity for my bank account I also value human rights, equity, inclusivity, the environment, future generations, human connection, physical health, mental health, minimalism, and slowness.</p>

            <p>And perhaps most damning is what I <i>don’t</i> value. I don’t value tech advancements for the sake of tech advancements. And I don’t value tech advancements for the principal sake of monetary advancements.</p>

            <p>To make matters worse, I have strong moral resolve, making the devilish angel on my shoulder a royal pain in my dick sometimes, yelling so loudly that I keel over in pain when I don’t do what I’m told.</p>

            <p>But with my as-so-called “obnoxious” values comes a wonderful side: if I’m  on your team, I will rock your fucking world. I will pour my heart, soul, and brain into every minute. I will spread the word. I will involve my community. I will stick my neck out for you. I will… [gasp]… think about you after hours.</p>

            <p>Here are more deets about specific values that may impact you.</p>

            <h3>minimalism</h3>
            <p>Minimalism, both digitally and physically, is wicked important to me. As is mobility. It’s the lifestyle that I need in order to be creatively expressive. I’ve tried the permanent desk thing. I’ve tried the permanent location thing. And - I’m not knocking that life for others - those things just don’t work for me.</p>

            <p>Because of that, it’s important that I don’t add any hardware to my life. I’ve got my 15” MacBook Pro, and I don’t want anything else. I mean, if you need me to carry around a Raspberry Pi or a Jetson TX2 (both things I’ve carried around before) or something similar in size, we can certainly talk about that. But if you need me to work on hardware that won’t fit into my backpack… I can’t. I just can’t. I’ll go freaking crazy, and everybody will lose. That said, I’m happy to fire up as many ec2 instances as you need!</p>

            <p>Minimalism spills into every design, block of code, piece of copy, and database schema that I create. It’s a huge net positive in both my personal and professional lives, a positive that will translate to you... but sometimes it might make me mildly annoying.</p>

            <a class="image-wrap" href="/img/shots/patrick-codes-at-the-beach.JPG">
                <img src="/img/shots/patrick-codes-at-the-beach.JPG" alt="Patrick Codes at the beach."/>
                <p>Without Instagram, where am I supposd to brag about my Digital Nomad lifestyle?</p>
            </a>

            <h3>slowness</h3>
            <p>Cal Newport doesn’t know me, but I’m his biggest fanboy. I strongly believe that people with non-robot brains must take precautionary measures in order to avoid the suction of the attention economy. Well, if they want to be efficient, anyway.</p>

            <p>I’m the fastest project-getter-doner I know… and it’s precisely because I go so slowly. After all, slow is smooth and smooth is fast, as once said somebody.</p>

            <p>I don’t have email on the greyscale phone that I leave at home more than half the time. I don’t have any social media accounts. I literally plan every single computer session with pencil and paper before opening my laptop lid. And my wifi is disabled when I don’t need it (which is most of the time, given the magic of local environments). Maybe I’m more susceptible to this technological distraction than most people? It’s certainly possible. But I think, really, that I’m only more aware of it.</p>

            <p>For most projects I spend <em>at least</em> as much time offline as I do online. Sometimes - though this might not be true for your project - I work offline for days at a time.</p>

            <p>I’m going to die way too soon to spend time pretending to be busy.</p>

            <h3>fastness</h3>
            <p>So as to sound as contradictory as possible, I’m faster than I am slow. I employ the above tactic to get shit done. But really, deep down, I’m all about speed. </p>

            <p>This means that I iterate. A lot.</p>

            <p>And iteration inherently means saying “I was wrong”. I’ve developed quite a fond relationship with being wrong, and I’ve learned that that truth will always bubble up in the long run, so better to admit you were wrong after 2 hours than after 12 years, right?</p>

            <p>Sunk cost bias is a real butthole. I try my best never to succumb to it. And I’ll hope the same from you. And I know that that will require a lot of…</p>


            <h3>communication</h3>
            <p>Communication is my new favorite thing. I didn’t use to be so great at this, gladly trading comfort now for pain later, but slowly I started to compile a mental spreadsheet of the times when I did and didn’t communicate fully. And, perhaps to nobody’s surprise, I started to accept that communication, almost always, regardless of how uncomfortable, is the long-term best play.</p>

            <p>So now I embrace it. Hooray vulnerable conversations! In fact I embrace it so hard that it’s sometimes hard to comprehend how pre-communicative-Patrick could have moved through this world.</p>

            </article>
        </section>

        <section class="chapter" id="ego">
            <header>      
            <h2>HELP, I CAN’T FIND MY <span>EGO</span></h2>
            </header>
            <article class="article">      
            <p>I believe that all websites, books, products, etc should have a clearly defined purpose (while staying open to iteration) before the build process starts. </p>

            <p>Why are we doing this? </p>
            
            <p>What are our values and goals? </p>
            
            <p>What and who are we trying to change? </p>
            
            <p>What would success look like for us?</p>
            
            <p>Attractive design and clean code is ubiquitous these days. But if you don’t take an emotional deep-dive to answer these questions… who cares? Sure you’ll have a pretty product. But will you have the <em>right</em> pretty product?</p>
            
            <p>When you start your project by asking and answering these questions, it quickly becomes clear that the “why” is most certainly <em>not</em> “to make a cool app” or “to build a pretty website”. So then, we realize that the code is but a means to an end. Whether we end up building something from scratch or pulling off a glorified open source duct-tape job… it makes no difference.</p>
            
            <p>Well, actually, it <em>does</em> make a difference. The duct-tape path, when available, wins every time. Because speed. The goal is the result, and any frivolous steps on that journey are a distraction… potentially a monumentally costly one.</p>
            
            <p>For example, Luxonis needed <a target="_blank" href="https://luxonis.com">a new website</a>. The “why” was to create a unified front for all of our projects (as they’d been spread out across 3 different websites before that) and to convey technological capability through polished copy and a polished design, so that when people found our Crowd Supply campaign they’d have zero seed of a doubt as to whether or not we could deliver on our promise.</p>
            
            <p>The purpose was not “to make a website”. Which was a relief, because I had to do this task using only spare hours found ‘neath the cracks between other projects. So rather than <em>actually</em> make a website, I just forked <a target="_blank" href="https://github.com/creativetimofficial/vue-argon-design-system">this</a>, made a few tweaks, and called it a day. And as a fun bonus, I got to learn <a target="_blank" href="https://cli.vuejs.org/guide/">Vue</a>!</p>
            
            <p>Not dissimilar was the Machine Learning work I did, which was based on the premade <a target="_blank" href="https://github.com/tensorflow/models/tree/master/research/deeplab">Deeplabv3+</a>, then trained with a premade dataset, then patched with code almost entirely found on either <a target="_blank" href="https://github.com/">GitHub</a> or <a target="_blank" href="https://stackoverflow.com/">Stack Overflow</a>.</p>
            
            <p>Sure I <em>could</em> make things from scratch. And for many many years I did. I took great pride in doing so, despising WordPress developers and laughing at people who needed frameworks like Bootstrap. I built <a target="_blank" href="https://pickmonitor.com">this</a>, <a target="_blank" href="https://dealcatcher.com">this</a>, and <a target="_blank" href="https://apps.apple.com/us/app/dealcatcher-coupons-deals-shopping-app/id534634276">this</a> entirely from scratch, for example, even building a custom MVC framework because I was so obsessed with the ego of my custom creations.</p>
            
            <p>Then, through life events such as divorce, failed businesses, therapy, and travel, my ego started to shrivel (but still lingers, obviously) and I realized I was being an idiot. Or more accurately, my static cling to customization was no more than a twisted, illogical attempt at feeling important.</p>
            
            <p>These days every one of my web projects starts with a framework like VueJS, <a target="_blank" href="https://laravel.com/">Laravel</a>, or <a target="_blank" href="https://jekyllrb.com/">Jekyll</a>. Every “custom” design is merely a retooling of something found on <a target="_blank" href="https://sketchrepo.com/">Sketch Repo</a>. Almost all chunks of code come from GitHub or from places like <a target="_blank" href="https://www.pyimagesearch.com/">pyimagesearch</a>.</p>
            
            <p>Of course most people use frameworks, so I’m not seeking a cookie for that, but with my allergic reaction to reinventing the wheel I reckon that I spend less than a quarter of the time on your average task than your average creator. AND the results I cobble together are cleaner, faster, prettier, and more secure. Because a GitHub repo built over 8 months - even if it only takes 30 minutes to install, is generally more polished than a solution custom-coded over two weeks.</p>
            
            <p>So if you’re looking to hire a developer who writes thousands of lines of code per day, pass on me. But if you’re looking to hire someone who gives zero shits about his code count - and instead funnels those shits into big picture results - I’m your guy.</p>
                
            </article>
        </section>

        <section class="chapter" id="skills">
            <header>      
            <h2>MAD <span>SKILLS</span> FOR DAYS</h2>
            </header>
            <article class="article"> 
            
            <p>I’m a generalist. More or less. And I’ve been told that that’s not in vogue these days. If you need a UX expert, they say, hire a UX expert. If you need an iOS app hire an iOS expert. Don’t hire somebody who is halfway good at lots of things. </p>

            <p>I, being of course heavily biased, disagree.</p>
            
            <p>Hire the person who understands your vision. Hire the person who can further your vision. Hire the person with the broad skillset that can tackle all the things you haven’t even thought about yet. Hire the person who can architect things because he understands how all the little components work, separately and together. ESPECIALLY if you’re on a smallish team, hire the person who can wear multiple hats, and can switch them without oversight.</p>
            
            <p>The exception to the above is if you’re working at a 15,000 employee company. But in that case… I honestly don’t want to work with you. So move along and everybody wins!</p>
            
            
            <h3>artificial intelligence</h3>
            <p>I spent the majority of my time at <a target="_blank" href="https://luxonis.com">Luxonis</a> doing Machine Learning Engineering and Computer Vision work. Sadly the bulk of that work was done under NDA for a third party, so I won’t be able to talk about what I did (which is pretty freaking cool, actually) or share any results until they issue a public press release sometime within the next couple of months.</p>
            
            <p>But I can talk in broad strokes.</p>
            
            <p>Essentially I got very good at object tracking and detection, semantic segmentation, and absurd debugging.</p>

            <p>I also learned how to do lots of completely useless things like:</p>

            <a class="image-wrap" href="/img/shots/useless-ml-contour.jpg">
                <img src="/img/shots/useless-ml-contour.jpg" alt="Patrick in Prague."/>
                <p>A photo from outside the Prague hostel I volunteered at in Aug 2018. Using my mad Machine Learning skills to turn it into this very very definitely useful contour drawing.</p>
            </a>

            <a class="image-wrap" href="/img/shots/probably-a-person.png">
                <img src="/img/shots/probably-a-person.png" alt="Probably a human."/>
                <p>Or look how I can show disbelievers that yes, I am in fact 91% likely to be a person!</p>
            </a>

            <a class="image-wrap" href="/img/shots/video-game-patrick.jpeg">
                <img src="/img/shots/video-game-patrick.jpeg" alt="Video game patrick."/>
                <p>I can also pretend to be the superstar of Ultime Friz, the video game.</p>
            </a>
            
            <h3>full-stack development</h3>
            
            <p>I made <a target="_blank" href="https://apps.apple.com/us/app/dealcatcher-coupons-deals-shopping-app/id534634276">this 4.7-star iOS App</a>, <a target="_blank" href="https://www.dealcatcher.com/">this Rails site</a>, <a target="_blank" href="https://www.pickmonitor.com/">this custom-MVC site</a>, <a target="_blank" href="https://luxonis.com/">this Vue site</a>, and too many <a target="_blank" href="https://laravel.com/">Laravel</a> sites to count. </p>
            
            <p>I’ve worked with <a target="_blank" href="https://flutter.dev/">Flutter</a>, <a target="_blank" href="https://wordpress.org/">WordPress</a>, and <a target="_blank" href="https://shopify.com">Shopify</a>. I’ve installed beautiful <a target="_blank" href="https://flarum.org">Flarum</a> forums like <a target="_blank" href="https://discuss.luxonis.com">this one</a>. I, of course, speak the much-hated <a target="_blank" href="https://jquery.com/">jQuery</a> (but haven’t used it in some time). I’ve done brief C and C++ firmware development. </p>
            
            <p>I use composer, and npm, and scss, and probably whatever else you use.</p>
            
            <p>The site that you’re looking at right now is running on Vue + Nuxt + Lumen.</p>
            
            <p>Do I have X years of experience with Y specific framework? I don’t know. Probably not. But if you’re judging a candidate based on whether they have experience with Vue versus whether they have experience with React… I not-so-humbly think you’re doing it wrong (unless you’re updating an existing React app, of course).</p>

            <a class="image-wrap" href="/img/shots/speed.png">
                <img src="/img/shots/speed.png" alt="Zoom zoom."/>
                <p>Oh, and also, I do things the right way, for the right reasons. My code is clean AF, and the things I make are crisp AF. As just one silly example, here’s the Page Speed for this site on my very first check, before a single optimization. Swear to Zeus.</p>
            </a>
            
            <h3>ui/ux design</h3>
            
            <p>I have a good eye for design, many have said. Usually I just rip stuff from <a target="_blank" href="https://sketchrepo.com/">Sketch Repo</a> and then mold it to my needs using, as you might imagine, <a target="_blank" href="https://www.sketch.com/">Sketch</a>. But sometimes I design stuff from scratch. Whatever works.</p>
            
            <p>And as for UX: back during my DealCatcher days I read literally every single <a target="_blank" href="https://www.nngroup.com">Nielsen Norman Group</a> blog post. So consider me qualified 🤷‍♂️</p>
            
            <h3 id="portfolio">a little portfolio action</h3>

            <p>Here are some screenshots from websites I’ve made over the years. All but one is - or was at one point - an actual live website…. not just a mockup.</p>

            <a class="image-wrap" href="/img/designs/showuply-4.jpg">
                <img src="/img/designs/showuply-4-browser.jpg" alt="Showuply"/>
            </a>
            <a class="image-wrap" href="/img/designs/showuply-2.JPG">
                <img src="/img/designs/showuply-2-browser.png" alt="Showuply"/>
            </a>
            
            <a class="image-wrap" href="/img/designs/showuply.JPG">
                <img src="/img/designs/showuply-browser.png" alt="Showuply"/>
                <p>I've been an all-or-nothing person most of my life. It's mostly gone away in the past couple of years, as I've figured out who I am and what I want (not an easy task). But prior to that, I would make grand plans and have trouble following through. So I made this community to help people like me (there are a bunch of us) not quit when things got boring, or when we were feeling like imposters, or whatevs.</p>
            </a>

            <a class="image-wrap" href="/img/designs/feedhero.png">
                <img src="/img/designs/feedhero-browser.png" alt="Feed Hero"/>
                <p>I made this pretty sophisticated Twitter Relationship Manager tool to seriously encourage authentic Twitter relationships. And I got about 35 people to pay for it and use it. But over time, I (and many of my users) started to realize that the best way to have authentic relationships was actually to skip Twitter altogether.</p>
            </a>

            <a class="image-wrap" href="/img/designs/safecars.png">
                <img src="/img/designs/safecars-browser.png" alt="Safe Cars"/>
                <p>My (now ex) wife got in a bad car accident, and when she went to get a new car we couldn't find a single service that let you search for used cars by safety AND price at the same time. So I compiled the data from a few different sources and made the site myself. We went with a 2009 Subaru Forester FWIW.</p>
            </a>
            
            <a class="image-wrap" href="/img/designs/noncents-1.jpg">
                <img src="/img/designs/noncents-1-browser.jpg" alt="Noncents"/>
            </a>
            <a class="image-wrap" href="/img/designs/noncents-2.png">
                <img src="/img/designs/noncents-2-browser.png" alt="Noncents"/>
                <p>I got into this crypto phase for... about two months... and then I realized that I didn’t care at all, so this website went bye bye.</p>
            </a>
            <a class="image-wrap" href="/img/designs/justfreakingpublish.jpg">
                <img src="/img/designs/justfreakingpublish-browser.jpg" alt="Just Freaking Publish"/>
                <p>I quite like accountability tools/communties/ideas. Discipline is overrated.</p>
            </a>

            <a class="image-wrap" href="/img/designs/commute-guardian.jpg">
                <img src="/img/designs/commute-guardian-browser.jpg" alt="Commute Guardian"/>
                <p>Made at and for Luxonis. This one is still publicly live.</p>
            </a>

            <a class="image-wrap" href="/img/designs/beeminder.jpg">
                <img src="/img/designs/beeminder-browser.jpg" alt="Beeminder"/>
                <p>A mockup I made for my friends at Beeminder. Because I really love their product but could never get past the 1990s web design. This is the only of these design screenshots that was snapped from Sketch... all the rest were taken from live websites (though most on my local server).</p>
            </a>

            <h3>loads of other things</h3>
            <ol start="1"><li>Automation. Tedious tasks are not my friend, so I’m happy to spend time eliminating them, streamlining my life. Like that time I wrote screen scrapers for every different sport to get scores for Pick Monitor. Or that time I wrote a script to automatically sync my <a target="_blank" href="https://ia.net/writer">iA Writer</a> folder with my WordPress database so my writing application <i>was</i> my CMS.
            </li><li>Email marketing. I have significant experience with MailChimp, SendGrid, ConvertKit, Drip, Intercom, Drift, and probably others that I’m forgetting right now.
            </li><li>Copywriting. I write words okay sometimes.
            </li><li>SEO. I basically spent a year of my life, whilst <a target="_blank" href="https://dealcatcher.com">here</a>, doing nothing but optimizing internet stuff for The Googs. I would not recommend others follow in my footsteps.
            </li><li>Conversion Rate Optimization. Peep Laja and Lincoln Murphy used to be a mainstay on my computer screen. I have a lot of experience with Google Analytics split tests, and event tracking, and such. So basically I can tell you if a red button or a green button will get clicked more. Yay me.
            </li></ol>


            <h3>but wait there’s more</h3>
            <p>I learn things at a higher rate than I forget things. Most days. So the above list of mad skills promises to only expand.</p>

            </article>
        </section>

        <section class="chapter" id="contact">
            <header>      
            <h2>CONTACT ME</h2>
            </header>
            <article class="article"> 
            <p>Email me at <a href="mailto:patrick.lorenzut@gmail.com">patrick.lorenzut@gmail.com</a>.</p>
            <p>I’m based in Portland, OR and am happy to work on-site if you’re here, too. Though note that I’ll be traveling Nov 1 - Mar 1 every year for the foreseeable future.</p>

            <a class="image-wrap" href="/img/shots/patrick-in-nepal.JPG">
                <img src="/img/shots/patrick-in-nepal.JPG" alt="Patrick in Nepal"/>
                <p>Solo-hiking the 3 Passes loop in Nepal. Dec, 2017</p>
            </a>
            </article>
        </section>
    </div>
</template>

<script>  


  export default {
    data: function () {
      return {
        jobIndex: 0,
        jobs: [
          "build your MVP",
          "rewrite your copy",
          "make more monies",
          "design your UI",
          "design your UX",
          "automate your workflow",
          "add AI to your business",          
          "get more conversions",
          "make your users giggle",          
        ]
      };
    },
    methods:{
      rotateJobs(){
        if(this.jobIndex == (this.jobs.length - 1)){
          this.jobIndex = 0
        }
        else{
          this.jobIndex += 1
        }
      }
    },
    head: {
      title: 'Mental Health for Tech Workers',
    },
    mounted(){
      setInterval(this.rotateJobs, 1000);
    }
  }
</script>