<template>
    <div>    
        <header class="pt-40 pb-20 md:pt-56 md:pb-40 bg-teal text-purple">
            <div class="container text-center max-w-3xl">
                <h1 class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">Sorrrrryyyyy!!!!</h1>
                <h2 class="text-xl lg:text-2xl leading-tight max-w-4xl mx-auto mt-8">
                    We were unable to pair you with a listener. Dope! I know we just blew it so this a tall ask, but... any chance we can reach out to you via email to start a converation?
                </h2>

                <Email/>

            </div>
        </header>
    </div>
</template>


<script>
import Email from '~/components/Email.vue';
export default {        
    head: {
      title: 'We Blew It',
    },
    components: {
        Email
    },
}
</script>