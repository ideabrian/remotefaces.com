<template>
  <div>        

     <header class="pt-40 lg:pt-56 pb-40 bg-yellow text-purple">
        <div class="container text-center">
            <h1 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">Tech is the future.<br/>Which means <span class="bg-purple text-white">WE</span> are the future.<br/>Ahhh crap... no pressure.</h1>
            <h2 class="mt-10 text-lg sm:text-xl md:text-xl lg:text-2xl leading-tight mx-auto max-w-3xl">Nobody wants to talk about mental health. But nobody wants to live in a dystopian society where we’re ruled by robots, either. So… come hang out with us and let’s work toward something better. Together.</h2>
        </div>
    </header>


    <section class="container max-w-2xl py-20 article">
      <h2>The Backstory</h2>

      <p><span class="bg-yellow-200">As told by co-founder Patrick Lorenzut</span></p>

      <p>I used to be a Machine Learning Engineer. Frankly, the immense capabilities in that field scare the crap out of me. And the future, if it remains in the hands of powerful people with chips on their shoulders who feel like they have things to prove and trophies to earn… the future is very, very scary IMO. I firmly believe that the most important thing that humanity needs to do right now is increase empathy and equity in tech. So that these immense capabilities are developed with good intentions.</p>

      <p>I know what it’s like to be a privileged white guy who feels slighted despite having every advantage. I know what it’s like to feel like I have to choose between paying my bills and doing something meaningful. I know what it’s like to not only hate my unsatisfying job, but also to hate myself for not being able to be happy. For feeling absolutely broken for not being content living in this system that was basically built for people just like me. And on a personal level, I know what it’s like to be married to the wrong person, to be living in the wrong city, to have friends that don’t know who I am.</p>
      
      <p>I figured out a path out of all of that; a path out of doing things just because everyone else is doing them, a path out of competing for the biggest bank account, etc.. And a path into vulnerability, communication, and openness (with others and with myself), and I’d love nothing more than to help others do the same.</p>
          
      <p>My hypothesis, frankly, is that fulfilled people who feel heard and appreciated and important are way less likely to F*#$ up the world. And of course, what a wonderful treat it will be to help people individually as well!</p>

      <p>As it turns out, people in tech wield a LOT of power. So let’s focus that power toward good! Together!</p>
    </section>

    <section class="mx-auto py-20 hidden" id="pricing">
        <div class="container text-center">
            <div class="grid grid-cols-3 gap-8 xl:gap-12">
              <div class="span-cols-1 pricing-block">
                <h2>Lurker</h2>
                <h3>Free</h3>
                <ul class="text-left mt-4 mx-auto max-w-xs block">
                  <li><i class="text-sm fa fa-check text-teal"></i> Unlimited calls. Kind of.
                    <span>
                      Remember Chat Roulette? So do we. Which is why lurkers are only able to have video calls with FHS team members. Because we can’t expose our members to the possibility of hugely inappropriate behavior. Because of this, there will often be a queue to talk, and talking won't be available on our nights and weekends while we’re AFK.
                    </span>
                  </li>
                  <!-- <li><i class="text-sm fa fa-check text-teal"></i> Anonymously read feelings that others are sharing.</li> -->
                </ul>     
              </div>
              <div class="span-cols-1 pricing-block">
                <h2>Member</h2>
                <h3>$20/mo</h3>
                <ul class="text-left mt-4 mx-auto max-w-xs block">
                  <li><i class="text-sm fa fa-check text-teal"></i> Truly unlimited calls.
                    <span>
                      You can talk to other members! Which means that you have someone to talk to even while the FHS team is sleeping.
                    </span>
                  </li>
                  <li><i class="text-sm fa fa-check text-teal"></i> Make friends.
                    <span>Turn video calls into IRL relationships. </span>
                  </li>
                  <!-- <li><i class="text-sm fa fa-check text-teal"></i> Share your feelings.</li> -->
                  <li><i class="text-sm fa fa-check text-teal"></i> Come to in-person events.</li>
                  <li><i class="text-sm fa fa-check text-teal"></i> Support this project and let me keep working full-time on it.</li>
                </ul>
                <nuxt-link to="/join" class="button is-small is-purple mt-8">request to join</nuxt-link>
                <p class="opacity-50 text-purple mt-2 leading-snug">There’s a short application process in order to keep this place emotionally safe.</p>
              </div>
              <div class="span-cols-1 pricing-block">
                <h2>Licensed Therapy</h2>
                <h3>from $180/mo</h3>
                <p class="mt-16 opacity-50 text-xl md:text-3xl text-purple">Coming Fall 2020</p>
              </div>
            </div>
        </div>
    </section>
<!-- 
    <section class="mx-auto max-w-2xl py-20" id="faq">
        <div class="container">
          <div v-for="(question, index) in questions" :key="index">
            <h3 class="font-bold mb-2">
              <span class="link" @click="toggleFAQ(index)">{{ question.question }}</span>
            </h3>
            <div v-html="question.answer" class="faq-answer mb-10 hidden article" :class="{open: question.isOpen}"></div>
          </div>
        </div>
    </section> -->
  
  </div>
</template>

<script>  


  export default {   
    data: function(){
      return {
        questions: [
          {
            question: 'Why did you build FHS?',
            answer: this.$store.state.todo,
            isOpen: false
          },
          {
            question: 'Who’s it for?',
            answer: this.$store.state.todo,
            isOpen: false
          },          
          {
            question: 'How’s it different?',
            answer: this.$store.state.todo,
            isOpen: false
          },
          {
            question: 'What’s your mission?',
            answer: this.$store.state.todo,
            isOpen: false
          },
           {
            question: 'Why is this a .org?',
            answer: this.$store.state.todo,
            isOpen: false
          },
          {
            question: 'Who runs this site?',
            answer: this.$store.state.todo,
            isOpen: false
          },
          {
            question: 'How does the Feelings Forum work?',
            answer: this.$store.state.todo,
            isOpen: false
          },
          {
            question: 'How does the Face-to-Face Talking work?',
            answer: this.$store.state.todo,
            isOpen: false
          },
          {
            question: 'How do the In-Person Events work?',
            answer: this.$store.state.todo,
            isOpen: false
          },
          {
            question: 'What do you do with my data?',
            answer: this.$store.state.todo,
            isOpen: false
          },
        ]
      }
    },
    head: {
      title: 'About For Human Sake',
    },
    methods: {
      toggleFAQ(index){
        this.questions[index].isOpen = !this.questions[index].isOpen
      }
    }
  }
</script>