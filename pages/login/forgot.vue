<template>
  <div>

    <section class="max-w-sm mx-auto bg-white p-8">
      <h1 class="font-bold">Forgot Your Password?</h1> 
      <p>Enter your email and we'll send you a link to get back into your account.</p>
      <form ref="formLogin" class="form">                        
        <div class="field">
          <input v-model="Email" v-validate="'required|email'" type="email" class="input" id="Email" name="Email" placeholder="Email">
          <span class="help">{{ errors.first('Email') }}</span>
        </div>
        <div class="field">
          <button class="button is-small" v-on:click.prevent="requestPasswordReset()">Reset Password</button>
        </div>
        <p class="mt-10">Back to <nuxt-link to="/login" class="link">Log In</nuxt-link></p>                        
      </form>
    </section>

  </div>
</template>

<script>            

    export default {    
        layout: 'login',   
        middleware: 'guest',
        data: function () {
            return {
                email: ''
            };
        },  
        head: {
            title: 'Forgot Your Password?',
        },
        methods: {
            requestPasswordReset() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        $members.requestPasswordReset(this.email).then((response)=>{
                            if (response.success && response.success.data.success) {
                                this.$buefy.toast.open({
                                    message: response.success.data.success,
                                    type: 'is-success'
                                })      
                            } else {
                                this.$buefy.toast.open({
                                message: response.error,
                                type: 'is-danger'
                                })      
                            }
                        })
                    }
                }); 
            }
        }         
    }
</script>