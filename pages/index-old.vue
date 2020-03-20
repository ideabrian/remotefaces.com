<template>
  <div>        
    <header class="hero is-fullheight is-white">
      <div class="hero-body">
        <div class="container">
          <h3>a human approach to</h3>
          <h1>mental health<br/>for tech workers</h1>
          <h2>Remember that time you downloaded a self-help app and it fixed all of your problems? Yeah, us neither. But we have a crazy idea. It involves humans ;)</h2>        

          <div class="button-group">
              <!--<a href="https://forhumansake.typeform.com/to/EDjM4K" class="button is-danger is-medium" target="_blank">Start Talking</a>-->
              <nuxt-link to="/join" class="button is-danger is-medium">Request to Join</nuxt-link>
              <p class="has-text-grey">$9/mo pre-launch special</p>
          </div>
        </div>
      </div>
      <div id="hero-bottom">
        <div class="container">
          <h3>a safe space to talk about <span id="changer">{{ conditions[conditionIndex] }}</span></h3>
        </div>
      </div>
    </header>


    <section class="hero is-fullheight is-dark">
      <div class="hero-body">
        <div class="container">
          <h2>Full-Stack Emotional Support</h2>
          <h3>From supportive peers to licensed therapists... From asyncronous text messages to real-time video chat... From problems at work to problems at home... From silly laughs to heartfelt cries... FHS is exactly what you need it to be.</h3>
        </div>
      </div>
    </section>


    <section class="hero is-fullheight is-white">
      <div class="hero-body">
        <div class="container">
          <h2>Someone to Talk To 24/7</h2>
          <h3>Click a button and you'll be having a video chat within 5 minutes. 24/7. With somebody who has agreed to take vulnerability just as seriously as you. Because sometimes we just freaking need someone to talk to. About our crazy business ideas. About our existential crises. About our parents' battles with cancer.</h3>
        </div>
      </div>
    </section>


    <section class="hero is-fullheight is-info">
      <div class="hero-body">
        <div class="container">
          <h2>Online Community, Reimainged</h2>
          <h3>Online "communities" are broken. How can you jump into a room full of 700 people that you don't know and be expected to care about each other? We built FHS to be different. Based on 1-to-1 communication, you might just make REAL internet friends here. Slowly. One at a time.</h3>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight is-dark">
      <div class="hero-body">
        <div class="container">
          <h2>As anonymous as you want to be</h2>
          <h3>Every feeling you post is 100% anonymous unless and until you explicitly state otherwise. As you add people to your Circle of Trust, you’ll start seeing names and faces alongside feelings... but never until you’re ready. Partly because we want to encourage you to post things that you might not be ready to share with the whole world. And partly as incentive to start conversations with interesting people that you want to unmask.</h3>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight is-white">
      <div class="hero-body">
        <div class="container">
          <h2>You are Not Alone</h2>
          <h3>They say that misery loves company. Let's reframe that.<br/><br/><em>"People benefit from empathetic perspective."</em><br/><br/>That’s better! By listening and reading about the feelings of other people... you get to build empathy, help your fellow humans, and benefit from knowing that you are NOT the only one feeling.</h3>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight is-dark">
      <div class="hero-body">
        <div class="container">
          <h2>Licensed Therapy Coming Fall 2020</h2>
          <h3>Talking to peers is amazing. Especially when those peers have taken the same oath as you. That said, professional help is also amazing. So we’re partnering with licensed therapists in all 50 states (and in 2021, internationally) to bring next-level support to those that want it... while still having a completely awesome, completely unlicensed place for those who don’t.</h3>
        </div>
      </div>
    </section>


    <section class="hero is-fullheight is-warning">
      <div class="hero-body">
        <div class="container">
          <h2>50% for Equity</h2>
          <h3>We spent weeks flip-flopping between non-profit or for-profit. Until one day we realized, like the stereotypical Portland residents that we are, that things don't always have to be so binary. So we’ve decided to split the difference. 50% of FHS profits will be redistributed to POC-, woman-, and trans-led NGOs working to bring equity to tech (eg <a href="http://blackgirlscode.org/">Black Girls Code</a> and <a href="http://www.latinxinai.org/">Latinx in AI</a>).</h3>
        
          <!-- <div class="button-group">
            <a href="" class="button is-empty is-small" target="_blank">Read More About This</a>
          </div> -->

        </div>
      </div>
    </section>

    <section class="hero is-fullheight is-dark">
      <div class="hero-body">
        <div class="container">
          <h2>Empathy Starts with Listening</h2>
          <h3><strong>ALL</strong> tech workers are welcome here. Obviously this includes all races, sexes, genders, and religions. Less obviously... you are welcome here no matter who you voted for. Because people are people. Because isolating ourselves in our bubbles is not a way to grow empathy. That said... empathy is not endorsement. Working to <em>understand</em> someone is not the same thing as working to <em>agree</em> with someone. And empathy is not staying quiet. We won’t be shy about pushing our liberal agenda... but we will not do so in a way that makes a single person feel "less than".</h3>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight is-white">
      <div class="hero-body">
        <div class="container">
          <h2>Tech is the future.<br/><span>we</span> are the future.<br/>no pressure.</h2>
          <h3>Nobody wants to talk about mental health. But nobody wants to live in a dystopian society where we’re ruled by robots, either. So… come hang out with us and let’s work toward a more empathic future. Together.</h3>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight is-white" id="monies">
      <div class="hero-body">
        <div class="container">
          <h2></h2>
          <h3>FHS is launching Spring 2020. The cost will be $19/mo (licensed therapy sold separately). Join BEFORE we launch and you’ll get 50% off for life. Plus an invite to our Slack team for immediate emotional gratification. Plus a fun surprise that we can’t tell you about right now :)</h3>

          <div class="button-group">
            <nuxt-link to="/join" class="button is-danger is-medium">Request to Join</nuxt-link>
            <p>Or <a href="https://emailoctopus.com/lists/c3da3491-5cbb-11ea-a3d0-06b4694bee2a/forms/subscribe" target="_blank">get an email when we launch</a>.</p>
          </div>
        </div>
      </div>
    </section>    
  </div>
</template>

<script>  


  export default {
    data: function () {
      return {
        conditionIndex: 0,
        conditions: [
          "mental health",
          "relationships",
          "meaningful work",    
          "shiny objects",
          "anxiety",
          "perfectionism",
          "death",
          "indecision",
          "body issues",
          "boredom",
          "loneliness",
          "divorce",
          "grieving",
          "finding purpose",
          "accountability",
          "parenting",
          "imposter syndrome",
          "analysis paralysis"
        ]
      };
    },
    methods:{
      rotateConditions(){
        if(this.conditionIndex == (this.conditions.length - 1)){
          this.conditionIndex = 0
        }
        else{
          this.conditionIndex += 1
        }
      }
    },
    head: {
      title: 'Mental Health for Tech Workers',
    },
    mounted(){
      setInterval(this.rotateConditions, 1000);
    }
  }
</script>