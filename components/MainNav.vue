<template>    
    <div class="fixed left-0 top-0 right-0 z-10 bg-purple text-yellow" id="nav-wrapper" :class="{open: !isHidden}">
        <nav id="top-nav" class="flex container items-center justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 lg:mr-16">
                <nuxt-link to="/"><img src="/images/logo-white-tight.png" width="24" alt="Remote Faces Logo"/></nuxt-link>
            </div>

            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded border-white-400 hover:text-purple-800 hover:border-white" @click="toggleHidden">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-left text-lg lg:text-base" :class="{hidden: isHidden}">
                <div class="lg:flex-grow" id="main-links">
                </div>  
                <a href="https://ih.remotefaces.com" class="text-white hover:text-yellow is-small is-empty inline-block mt-8 lg:mt-0 mr-10">demo room</a>
                <nuxt-link to="/new" class="button is-small is-empty inline-block mt-8 lg:mt-0">create a room</nuxt-link>
            </div>
        </nav>
    </div>
</template>

<script>    
    export default {
        data: function () {
            return {
                isHidden: true,
            };
        }, 
        methods: {
            toggleHidden(){
                this.isHidden = !this.isHidden;
            },
        },
    }
</script>