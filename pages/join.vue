<template>
  <section class="max-w-sm mx-auto bg-white p-8">
    <h1 class="title font-bold">Create a Free Account</h1>    
    <form class="form">
      <div class="field">
        <label class="label ">Username</label>
        <input class="input" type="text" v-model="username" name="username" v-validate="'required|alpha_dash|max:15'" placeholder="groovysauce"/>
        <span class="mt-1 help is-danger">{{ errors.first('username') }}</span>                
        <p class="text-sm opacity-50">remotefaces.com/human/{{ username ? username : 'SLUG' }}</p>
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
      <button class="button is-small mt-4" @click.prevent="finishApplication" :disabled="isLoading">Submit</button>

      <p class="mt-10">already have an account? <nuxt-link to="/login" class="link">login</nuxt-link></p>
    </form>
  </section>
</template>


<script>  

  export default {
    layout: 'login',  
    middleware: 'guest',
    data: function () {
      return {
        email: '',
        username: '',
        password: '',
        isLoading: false
      };
    },
    head: {
      title: 'Join Remote Faces',
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
              username: this.username,
              password: this.password
            }).then((result) => {
              if(result.data && result.data.success){
                this.$auth.loginWith('local', {
                    data: {
                      email: this.email,
                      password: this.password
                    },
                  }).then((result) => {
                    this.$router.push('/')
                })
              }      
            })
        } catch (e) {
            var error_message = 'Unable to register.'
            if(e.response.data.email){
              error_message = e.response.data.email
            }
            else if(e.response.data.username){
              error_message = e.response.data.username
            }
            else if(e.response.data.password){
              error_message = e.response.data.password
            }
            this.$toast.error(error_message)
            this.isLoading = false
        }
      }
    }
  }
  </script>