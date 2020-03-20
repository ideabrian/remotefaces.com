<template>
  <div class="text-xl">        
    <header class="pt-40 pb-8">
      <div class="container text-center">          
        <h4 class="text-purple font-bold">FHS Signup</h4>
        <h2 class="font-bold text-2xl">Question {{ step }} of 4</h2>
      </div>
    </header>
    <section class="max-w-2xl mx-auto mt-16 mb-10">
      <div class="container">                        
        <h3>Create a free account.</h3>
        <div class="max-w-md mx-auto mt-10">
          <div class="field">
            <label class="label ">Your Name</label>
            <input class="input" type="text" v-model="name" name="name" v-validate="'required'" placeholder="alex@doe.com"/>
            <span class="mt-1 help is-danger">{{ errors.first('name') }}</span>                
          </div>                            
          <div class="field">
            <label class="label mt-4">Email Address</label>
            <input class="input" type="email" v-model="email" name="email" v-validate="'required|email'" placeholder="alex@doe.com"/>
            <span class="mt-1 help is-danger">{{ errors.first('email') }}</span>                
          </div>              
          <div class="field">
            <label class="label mt-4 ">Password</label>
            <input class="input" type="password" v-model="password" name="password" v-validate="'required'" placeholder="**********"/>
            <span class="mt-1 help is-danger">{{ errors.first('password') }}</span>                
          </div>
          <button class="button is-empty mb-8 is-purple is-small mt-8" @click.prevent="finishApplication" :disabled="isLoading">Submit</button>
          <p><span class="link" @click="step = 3">go back</span></p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>  

  export default {
    middleware: 'guest',
    data: function () {
      return {
        step: 0,
        email: '',
        name: '',
        password: '',
        isLoading: false
      };
    },
    head: {
      title: 'Apply to Join FHS',
    },
    methods: {
      finishApplication(){
        this.$validator.validateAll().then((result) => {                  
          if (result) {
            this.register()
          }
        })
      },
      async register() {
        this.isLoading = true 
        try {            
            await this.$axios.post('/register', {
              email: this.email,
              name: this.name,
              password: this.password
            }).then((result) => {
              if(result.data && result.data.success){
                this.$auth.loginWith('local', {
                    data: {
                      email: this.email,
                      password: this.password
                    },
                  }).then((result) => {
                    this.$router.push('/thanks')
                })
              }      

              //this.$router.push('/pay/' + result.data.user.id)
            })
        } catch (e) {
            var error_message = 'Unable to register.'
            if(e.response.data.email){
              error_message = e.response.data.email
            }
            this.$toast.error(error_message)
            this.isLoading = false
        }
      }
    },
    mounted(){
      if(this.$cookie.get('story')){
        this.story = this.$cookie.get('story')
      }
    }
  }
  </script>