<template>    
    <div class="absolute left-0 top-0 right-0 z-20" id="nav-wrapper" :class="{open: !isHidden, 'bg-purple': !($route.name == 'influencers' || $route.name == 'teams' || $route.name =='communities')}">
        <nav id="top-nav" class="flex container items-center justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 text-white lg:mr-20">
                <nuxt-link to="/"><img src="/images/logo-white-tight.png" width="26" alt="Remote Faces Logo"/></nuxt-link>
            </div>

            <div id="videoStreamToggle" v-if="false && $store.getters.isLoggedIn">
                <i class="fa fa-video align-middle mr-2 opacity-50"></i>
                <span class="inline-block align-middle" v-tooltip="'Press to ' + (isStreaming ? 'stop' : 'start') + ' streaming.'">                        
                    <span v-if="isStreaming" @click="stopStreaming" class="border rounded-full border-yellow flex items-center cursor-pointer w-12 bg-green justify-end">
                        <span class="rounded-full border w-6 h-6 border-yellow shadow-inner bg-yellow shadow">
                        </span>
                    </span>
                    <span v-else @click="startStreaming" class="border rounded-full border-yellow flex items-center cursor-pointer w-12 justify-start">
                        <span class="rounded-full border w-6 h-6 border-yellow shadow-inner bg-yellow shadow">
                        </span>
                    </span>                    
                </span>
            </div>

            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded border-white-400 hover:text-white hover:border-white" @click="toggleHidden">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-left text-lg lg:text-base" :class="{hidden: isHidden}">
                <div class="lg:flex-grow relative" id="main-links">
                    <template v-if="$store.getters.isLoggedIn">
                        <nuxt-link to="/rooms" class="block mt-8 lg:inline-block lg:mt-0 hover:text-white">my rooms</nuxt-link> 
                    </template>
                    <template v-else>
                        <div class="hidden lg:inline-block has-dropdown">
                            <span class="block mt-8 lg:inline-block lg:mt-0 hover:text-white lg:mr-8"><i class="fa fa-chevron-down text-sm opacity-25"></i> cowork</span>

                            <div class="inline-block absolute">
                                <div class="bg-purple-800 py-3 px-6">
                                    <nuxt-link to="/influencers" class="block hover:text-white">with your audience</nuxt-link>
                                    <nuxt-link to="/teams" class="block hover:text-white mt-2">with your team</nuxt-link>
                                    <nuxt-link to="/communities" class="block hover:text-white mt-2">with your peers</nuxt-link>
                                </div>
                            </div> 
                        </div>
                        <nuxt-link to="/" class="block lg:hidden mt-8 lg:inline-block lg:mt-0 hover:text-white lg:mr-8">epic sales pitch</nuxt-link>                                            

                        <nuxt-link to="/pricing" class="block mt-8 lg:inline-block lg:mt-0 hover:text-white lg:mr-8">pricing</nuxt-link>
                    </template>
                </div>
                <div v-if="$store.getters.isLoggedIn">                    
                    <nuxt-link to="/logout" class="align-middle block mt-8 lg:inline-block lg:mt-0 hover:text-white py-1">logout</nuxt-link>
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
        props: ['navHasBackground'],
        data: function () {
            return {
                isHidden: true,
                isStreaming: false
            };
        }, 
        watch:{
            $route (to, from){
                this.isHidden = true;
            }
        },
        methods: {
            toggleHidden(){
                this.isHidden = !this.isHidden;
            },
            startStreaming(){
                this.isStreaming = true
            },
            stopStreaming(){
                this.isStreaming = false
            }
        },
    }
</script>