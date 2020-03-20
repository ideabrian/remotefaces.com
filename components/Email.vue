<template>
    <form class="form max-w-sm mt-10 mx-auto">
        <div class="field">
            <input class="input" type="email" placeholder="alex@doe.com" required v-validate="'required|email'" name="email" v-model="email"/>
            <span class="help">{{ errors.first('email') }}</span>
            <input class="input hidden" type="text" name="name" v-model="name" required/>
            <button class="button is-small" @click.prevent="startEmailConvo" native-type="submit" :disabled="isSending">Start a Convo</button>
            
            <p class="mt-4 opacity-75 text-white" v-if="!$store.getters.isLoggedIn">Your email address will be used only to start a convo with you. You will NOT be added to our email list, nor will we sell your data (obviously).</p>
        </div>
    </form>
</template>

<script>
export default {        
    data: function(){
        return {
            email: '',
            name: '',
            url: '',
            isSending: false
        }
    },
    methods: {
        startEmailConvo(){
            this.isSending = true
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.$axios.post('/startEmailConvo',{
                        email: this.email,
                        url: window.location.href,
                        name: this.name
                    }).then((result) => {
                        if(result.data && result.data.success){
                           $nuxt.$router.push('/thanks')
                        }else{
                            
                        }
                    }) 
                }
            })
        },
        setName(){
            this.name = 819
        }
    },
    mounted(){
        setTimeout(this.setName(), 1500);
        if(this.$store.getters.isLoggedIn){
            this.email = this.$store.getters.memberProfile.email
        }
    }
}
</script>