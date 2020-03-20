<template>
    <div>    
        <header class="pt-40 pb-20 md:pt-56 md:pb-40 bg-teal text-purple">
            <div class="container text-center max-w-3xl">
                <h1 class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">Nobody’s Home!</h1>
                <h2 class="text-xl lg:text-2xl leading-tight max-w-4xl mx-auto mt-8">
                    Ahh crud. This listener is already on a call. Or more likely, he’s busy eating almond butter. But if it’s groovy with you he’ll reach out to YOU to start a conversation.
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
      title: 'No listeners available.',
    },
    components: {
        Email
    },
}
</script>