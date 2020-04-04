<template>
  <div>
    <section class="max-w-md mx-auto p-8">
      <nuxt-link to="/">&larr;</nuxt-link>
    </section>
    <section  class="max-w-md mx-auto bg-white p-8">      

      <div v-show="step == 1" class="mt-40">      
        
        <div class="field">
          <label class="label mt-10 mb-2 text-sm">What’s Your Email Address?</label>
          <input class="input" type="email" ref="email" v-model="email" name="email" v-validate="'required|email'" placeholder="alex@doe.com"/>
          <span class="mt-1 help is-danger">{{ errors.first('email') }}</span>
        </div>
        
        <div class="field" v-if="email">
          <button class="button is-small mt-2" @click.prevent="validateEmail" :disabled="isLoading">Submit</button>
        </div>      
      </div>
      <div v-show="step == 2" class="mt-40">
        <div class="field">
          <label class="label mt-10 mb-2 text-sm">Please Choose a Username</label>
          <input class="input" type="text" v-model="username" name="username" v-validate="'required|alpha_dash|max:15'" placeholder="groovysauce"/>
          <span class="mt-1 help is-danger">{{ errors.first('username') }}</span>                
        </div> 

        <div class="field" v-if="username">
          <button class="button is-small mt-2" @click.prevent="validateUsername" :disabled="isLoading">Submit</button>
        </div>
      </div>
      <div v-show="step == 3" class="mt-40">
        <div class="field">
            <label class="label mt-10 mb-1 text-sm">Room Name</label>
            <input v-model="name" v-validate="'required|max:50'" spellcheck="false" type="text" name="name" placeholder="name" class="input">                  
            <span class="help is-danger">{{ errors.first('name') }}</span>
        </div>
        <div class="field">
            <label class="label mt-4 mb-1 text-sm">Room Slug</label>                  
            <input v-model="slug" v-validate="'required|alpha_dash|max:15'" spellcheck="false" type="text" name="slug" placeholder="slug" class="input mb-2">                  
            <span class="help is-danger">{{ errors.first('slug') }}</span>
            <p class="text-sm">Find your room at <strong>{{ slug ? slug : 'SLUG' }}.remotefaces.com</strong></p>
        </div>
        <div class="field">
          <button class="button is-small mt-4" @click.prevent="validateRoom" :disabled="isLoading">Submit</button>
        </div>
      </div>
      <div v-show="step == 4" class="mt-40">
        Tight! An email has been sent to you with a link to your new room!!!
      </div>
    </section>
  </div>
</template>


<script>  
  import { mapState } from 'vuex'
  export default {
    layout: 'login',  
    middleware: 'guest',
    data: function () {
      return {
        step: 1,
        email: '',
        username: '',
        name: '',
        slug: '',
        user_id: 0,
        isLoading: false,
      };
    },
    head () {
        return {
            title: 'Sign Up for Remote Faces',
        }
    },
    mounted(){
      this.$refs.email.focus()
    },
    methods: {
      async validateUsername(){        
        this.$validator.validate('username').then((result) => {                  
          if (result) {
            this.setUsername()
          }
        })
      },
      async setUsername(){
        this.isLoading = true 
        try {            
          await this.$axios.post('/user/setUsername', {
            username: this.username,
            user_id: this.user_id
          }).then((result) => {
            this.isLoading = false 
            this.step = 3
          })
        } catch (e) {      
          var error_message = 'Unknown error. Please please please contact patrick@lorenzut.com and he’ll fix it.'
          if(e.response.data.username){
            error_message = e.response.data.username
          }
          else if(e.response.data.message){
            error_message = e.response.data.message
          }
          this.$toast.error(error_message)
          this.isLoading = false
        }
      },      
      async validateRoom() {          
          this.$validator.validate('name','slug').then((result) => {                
              if (result) {
                  this.createRoom()             
              }                
          })
      },
      async createRoom() {
        this.isLoading = true
        try {                
            await this.$axios.post('/rooms', {
                user_id: this.user_id,
                name: this.name,
                slug: this.slug,
            }).then((result) => {
                if(result.data){
                    this.step = 4
                }      
            })          
        } catch (e) {
            console.log(e)
            var error_message = 'Unable to create room.'
            if(e.response.data.name){
                error_message = e.response.data.name
            }else if(e.response.data.slug){
                error_message = e.response.data.slug
            }
            this.$toast.error(error_message)
            this.isLoading = false
        }
      }, 
      async validateEmail(){
        this.$validator.validate('email').then((result) => {                  
          if (result) {
            this.submitEmail()
          }
        })
      },
      async submitEmail(){
        this.isLoading = true         
        try {            
          await this.$axios.post('/user/setEmail', {
            email: this.email
          }).then((result) => {
            this.isLoading = false 
            if(result.data && result.data.success){
              if(result.data.user){
                this.user_id = result.data.user.id
                this.step = 3 //skip the username selection
              }else{
                this.user_id = result.data.user_id
                this.step = 2
              }
            }      
          })
        } catch (e) {          
          
        }
        
      },
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
              if(result.data && result.data.user){
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