<template>
  <section class="max-w-sm mx-auto bg-white p-8">
    <h1 class="title font-bold">Create a Free Account</h1>    
    <form class="form">
      <div class="field">
        <label class="label ">Username</label>
        <input class="input" type="text" v-model="username" name="username" v-validate="'required'" placeholder="groovysauce"/>
        <span class="mt-1 help is-danger">{{ errors.first('username') }}</span>                
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
    }
  }
  </script>