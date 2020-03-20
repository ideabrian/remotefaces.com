<template>    
    <div class="absolute left-0 top-0 right-0 z-10 bg-purple" id="nav-wrapper" :class="{open: !isHidden}">
        <nav id="top-nav" class="flex container items-center justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 text-white lg:mr-16">
                <nuxt-link to="/"><img src="/images/logo-white-tight.png" width="26" alt="Remote Faces Logo"/></nuxt-link>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded border-white-400 hover:text-white hover:border-white" @click="toggleHidden">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-left text-lg lg:text-base" :class="{hidden: isHidden}">
                <div class="lg:flex-grow" id="main-links">
                    <!-- <nuxt-link to="/cowork" class="block mt-8 lg:inline-block lg:mt-0 hover:text-white lg:mr-6">cowork</nuxt-link>  -->
                    <!-- <nuxt-link to="/hangout" class="block mt-8 lg:inline-block lg:mt-0 hover:text-white lg:mr-6">hangout</nuxt-link> -->
                    <!-- <nuxt-link to="/about" class="block mt-8 lg:inline-block lg:mt-0 hover:text-white lg:mr-6">about</nuxt-link>                     -->
                </div>
                <div v-if="$store.getters.isLoggedIn">
                    <nuxt-link to="/logout" class="block mt-8 lg:inline-block lg:mt-0 hover:text-white py-1">logout</nuxt-link>
                </div>
                <div v-else>
                    <nuxt-link to="/login" class="block mt-8 lg:inline-block lg:mt-0 hover:text-white lg:mr-6">login</nuxt-link>
                    <nuxt-link to="/join" class="button is-small is-empty inline-block mt-8 lg:mt-0">sign up for free</nuxt-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>    
    export default {
        data: function () {
            return {
                isHidden: true
            };
        }, 
        methods: {
            toggleHidden(){
                this.isHidden = !this.isHidden;
            }
        },
    }
</script>