<script setup>
defineProps({
    headline: {
        type: String,
        required: true
    },
    subHeadline: {
        type: String,
        required: true
    }
});

defineEmits(["restoreDefault"]);
</script>


<template>
    <header>
        <div class="hline-logo">
            <figure
                @click="$emit('restoreDefault')"
                class="logo"
            >
                <img src="images/national-park-service-logo.svg" alt="National Park Service logo">
            </figure>
            <h1>{{ headline }}</h1>
        </div>
        <div class="sline">
            <p>{{ subHeadline }}</p>
        </div>
    </header>
    
</template>

<style scoped>
</style>
