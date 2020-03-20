<template>
    <div>    
        <header class="pt-40 pb-20 md:pt-56 md:pb-40 bg-teal text-purple">
            <div class="container text-center max-w-3xl">
                <h1 class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">How’d it go?!</h1>
                <h2 class="text-xl lg:text-2xl leading-tight max-w-4xl mx-auto mt-8">
                    This is a brand new service and I’d love to follow up with you via email to send you a few questions. And if you’re up for it I'd love to start a relationship with you :)
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
      title: 'How Was It?',
    },
    components: {
        Email
    },
}
</script>