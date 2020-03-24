<template>
    <div>    
        <section class="max-w-lg mx-auto bg-white p-8 pt-40">
            <h1 class="text-3xl">Create a New Room</h1>        

            <form ref="formLogin" class="form"> 
                <div class="mt-6">
                    <label class="label font-bold">Room Name</label>
                    <input v-model="name" v-validate="'required|max:50'" spellcheck="false" type="text" name="name" placeholder="name" class="input mt-1">                  
                    <span class="help is-danger">{{ errors.first('name') }}</span>
                </div>
                <div class="mt-6">
                    <label class="label font-bold">Slug</label>                    
                    <input v-model="slug" v-validate="'required|alpha_dash|max:15'" spellcheck="false" type="text" name="slug" placeholder="slug" class="input mt-1 mb-2">                  
                    <span class="help is-danger">{{ errors.first('slug') }}</span>
                    <p class="text-sm">Find your room at remotefaces.com/{{ slug ? slug : 'SLUG' }}</p>
                </div>
                <div class="mt-6 hidden">
                    <label class="label font-bold">Privacy</label>     
                    <select class="select input mt-1 mb-2" v-model="privacy" name="privacy" v-validate="'required'" >
                        <option value="hidden">open</option>
                        <option value="locked">locked</option>
                    </select>                                
                    <p class="text-sm">
                    <strong>open:</strong> anyone with url can join.<br/>
                    <strong>locked:</strong> people will need url plus a special invite code.</p>
                    <span class="help is-danger">{{ errors.first('privacy') }}</span>                  
                </div>
                <div class="mt-10">
                    <button class="button is-purple is-small mt-4" :disabled="isLoading" v-on:click.prevent="tryCreateRoom()">Create Room</button>
                </div>                    

            </form>
                
        </section>

    </div>
</template>

<script>
export default {   
    middleware: 'member',     
    head: {
      title: 'Create a New Virtual Coworking Room',
    },
    data: function(){
        return { 
            privacy: 'locked',
            name: '',
            slug: '',
            isLoading: false
        }
    },
    components: {
        
    },
    methods: {
        async tryCreateRoom() {
            this.isLoading = true
            this.$validator.validateAll().then((result) => {                
                if (result) {
                    this.createRoom()             
                }                
            })
        },
        async createRoom() {
            try {                
                await this.$axios.post('/rooms', {
                    name: this.name,
                    slug: this.slug,
                    privacy: this.privacy,
                }).then((result) => {
                    if(result.data){
                        this.$router.push('/' + result.data.slug)    
                    }      
                })          
            } catch (e) {
                console.log(e)
                var error_message = 'Unable to create room.'
                if(e.response.data.name){
                    error_message = e.response.data.name
                }
                this.$toast.error(error_message)
                this.isLoading = false
            }
        } 
    },
    mounted(){
        
    }
}
</script>