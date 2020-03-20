<template>
    <section class="max-w-sm mx-auto bg-white p-8">
        <h1 class="title font-bold">Login</h1>        

        <form ref="formLogin" class="form"> 
            <div class="field">
                <label class="label">email address</label>
                <input v-model="email" v-validate="'required|email'" spellcheck="false" type="email" name="email" id="email" placeholder="email" class="input">                  
                <span class="help is-danger">{{ errors.first('email') }}</span>
            </div>
            <div class="field">
                <label class="label">password</label>
                <input v-model="password" v-validate="'required'" type="password" name="password" id="password" class="input" placeholder="password">
                <span class="help is-danger">{{ errors.first('password') }}</span>                  
            </div>
            <div class="field">
                <label>                    
                    <nuxt-link to="/login/forgot" class="link">i forgot my password</nuxt-link>
                </label>
            </div>
            <div class="field">
                <button class="button is-small mt-4" v-on:click.prevent="requestLogin()">log in</button>
            </div>                    

            <p class="mt-10">no account yet? <nuxt-link to="/join" class="link">sign up</nuxt-link></p>
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
                password: '',
            };
        },
        head: {
            title: 'Login to Remote Faces',
        },
        methods: {
            async requestLogin() {
                this.$validator.validateAll().then((result) => {
                  
                if (result) {
                    this.login()             
                 }                
               })
            },
            async login() {
              try {                
                await this.$auth.loginWith('local', {
                  data: {
                    email: this.email,
                    password: this.password
                  },
                })
                this.$router.push('/')
                
              } catch (e) {
                this.$toast.error('Credentials are incorrect.')
              }
            }  
        }
    }
</script>