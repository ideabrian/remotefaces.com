<template>
    <div>    
        <header class="pt-24 pb-20 md:pt-56 md:pb-40 bg-teal text-purple">
            <div class="container text-center">
                <h1 class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">Licensed Therapy<br/>Coming Fall 2020</h1>
                <h2 class="text-xl lg:text-2xl leading-tight max-w-4xl mx-auto mt-8">Sometimes a friendly listener and a great conversation are all you need. And sometimes not. Which is why we’re working with licensed therapists to make the most complete support platform your eyeballs have ever seen. Tailored specifically to tech workers.</h2>
            </div>
        </header>

        <section class="mx-auto bg-teal">
            <div class="container text-center">
                <div class="p-4">
                    <button @click="changeTab('workers')" class="button" :class="{'is-purple': (activeTab == 'workers')}">Tech Workers</button>
                    <button @click="changeTab('companies')" class="button" :class="{'is-purple': (activeTab == 'companies')}">Companies</button>
                    <button @click="changeTab('therapists')" class="button" :class="{'is-purple': (activeTab == 'therapists')}">Therapists</button>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="container max-w-2xl" v-if="activeTab == 'workers'">
                <p v-html="$store.state.todo"></p>
            </div>
            <div class="container max-w-2xl" v-else-if="activeTab == 'companies'">
                <p v-html="$store.state.todo"></p>
            </div>
            <div class="container max-w-2xl" v-else-if="activeTab == 'therapists'">
                <p v-html="$store.state.todo"></p>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    data: function(){
        return {
            activeTab: 'workers'
        }
    },
    methods: {
        changeTab(newTab){
            this.activeTab = newTab
        }
    }
}
</script>