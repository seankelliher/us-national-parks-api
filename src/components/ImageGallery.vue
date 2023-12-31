<script setup>
import HeaderPart from "./HeaderPart.vue";
import FormPart from "./FormPart.vue";
import { parkImages } from "../data/gallery.js";
import { ref, watch } from "vue";

const returnedParks = ref();
const selectedState = ref("All states");
const selectedPark = ref();

// Using locally -> http://localhost:4040/something
// Using remotely -> /something
watch(selectedPark, () => {
    if (!sessionStorage.getItem(`${selectedPark.value}`)) {
        fetch(`/${selectedPark.value}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(`Error: ${response.status}, Data currently unavailable. Please try again later.`);
                }
            })
            .then((data) => {
                returnedParks.value = data.data;
                sessionStorage.setItem(`${selectedPark.value}`, JSON.stringify(data.data));
            })
            .then(() => {
                scrollToParkInfo();
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });   
    } else {
        returnedParks.value = JSON.parse(sessionStorage.getItem(`${selectedPark.value}`));
        scrollToParkInfo();
    }
});

function formatStateName() {
    const raw = selectedState.value;
    const dash = (raw.includes("-")) ? raw.replace("-", " ") : raw;

    // Splits the string into an array at the space between words.
    const arr = dash.split(" ");

    let index;
    for (index = 0; index < arr.length; index++) {
        arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1);
    }
    return arr.join(" ");
}

function scrollToParkInfo() {
    const container = document.getElementById("container");
    const containerH = container.offsetHeight;

    const windowH = window.innerHeight;

    if (containerH > windowH) {
        const element = document.getElementById("park-info");
        element.scrollIntoView({ behavior: "smooth" });     
    }
}
</script>

<template>
    <div class="masthead">
        <HeaderPart
            title="Find a National Park"
            subTitle="Located in 32 states &amp; American Samoa."
            @restoreDefault="selectedState='All states'"
        />

        <FormPart v-model:selected="selectedState" />
    </div>

    <main>
        <aside>
            <p><strong>National Parks in {{ formatStateName() }}</strong></p>
        </aside>
        <div class="gallery">
            <template v-for="parkImage in parkImages" :key="parkImage.parkId">
                <template v-if="selectedState === 'All states'">
                    <figure
                        @click="selectedPark = parkImage.parkId"
                        @keyup.enter="selectedPark = parkImage.parkId"
                        class="thumb"
                        tabindex="0"
                    >
                        <img
                            :src="`images/${parkImage.image}.jpg`"
                            :alt="`${parkImage.name}`"
                            :title="`${parkImage.name}`"
                        >
                        <figcaption><strong>{{ parkImage.name }}</strong><br />{{ parkImage.city }}, {{ parkImage.states }}</figcaption>
                    </figure>
                </template>
                <template v-if="selectedState !== 'All states'">
                    <figure
                        v-if="parkImage.statesList.includes(`${selectedState}`)"
                        @click="selectedPark = parkImage.parkId"
                        @keyup.enter="selectedPark = parkImage.parkId"
                        class="thumb"
                        tabindex="0"
                    >
                        <img
                            :src="`images/${parkImage.image}.jpg`"
                            :alt="`${parkImage.name}`"
                            :title="`${parkImage.name}`"
                        >
                        <figcaption><strong>{{ parkImage.name }}</strong><br />{{ parkImage.city }}, {{ parkImage.states }}</figcaption>
                    </figure>
                </template>
            </template>
        </div> <!-- close gallery -->
        <section v-for="returnedPark in returnedParks" :key="returnedPark.id" id="park-info">
            <figure
                id="close-icon"
                @click="returnedParks=''"
                @keyup.enter="returnedParks=''"
                class="icon"
                tabindex="0"
            >
                <img src="/images/icon-close-24.svg" alt="close icon">
            </figure>
            <div class="title">
                <h2>{{ returnedPark.fullName }}</h2>
                <h3>{{ returnedPark.designation }} {{ returnedPark.states }}</h3>
            </div>

            <div class="content">
                <div class="description">
                    <p>{{ returnedPark.description }}</p>
                </div>

                <div class="expandable">
                    <p
                        @click="returnedPark.showMore = ! returnedPark.showMore"
                        @keyup.enter="returnedPark.showMore = ! returnedPark.showMore"
                        class="highlight"
                        tabindex="0"
                    >
                        Address, phone, email, climate  
                    </p>
                    <figure
                        v-show="!returnedPark.showMore"
                        class="icon"
                    >
                        <img  src="/images/icon-expand-more-24.svg" alt="expand more icon">
                    </figure>

                    <figure
                        v-show="returnedPark.showMore"
                        class="icon"
                    >
                        <img  src="/images/icon-expand-less-24.svg" alt="expand less icon">
                    </figure>
                </div>

                <Transition name="fade">
                    <div v-show="returnedPark.showMore" class="full">
                        <dl v-for="address in returnedPark.addresses" :key="address.type">
                            <dt>{{ address.type }} address</dt>
                            <dd>{{ address.line1 }}</dd>
                            <dd>{{ address.city }}, {{ address.stateCode }} {{ address.postalCode }}</dd>
                        </dl>
                        <dl>
                            <dt>Phone &amp; email</dt>
                            <dd v-for="phone in returnedPark.contacts.phoneNumbers" :key="phone.phoneNumber">{{ phone.phoneNumber }} - {{ phone.type }} </dd>
                            <dd v-for="email in returnedPark.contacts.emailAddresses" :key="email.emailAddresses"><a :href="`mailto:${email.emailAddress }`">{{ email.emailAddress }}</a></dd>
                        </dl>
                        <dl>
                            <dt>Climate</dt>
                            <dd>{{ returnedPark.weatherInfo }}</dd>
                        </dl>
                    </div>
                </Transition>
            </div> <!-- close content -->

            <div class="map"> <!-- Mapbox token restricted to URL on Heroku -->
                <img :src="`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-s-p+000(${returnedPark.longitude},${returnedPark.latitude})/${returnedPark.longitude},${returnedPark.latitude},5/702x421?access_token=pk.eyJ1Ijoic2s1NjQ2NzMiLCJhIjoiY2xvdngzOWNuMHNtNDJrcnptNGZvMWY5byJ9.IUg94wBRIGusuy0hZx77kA`" :alt="`Static map, area around ${returnedPark.fullName}`">
            </div> <!-- close map -->
        </section>
    </main>
</template>

<style scoped>
</style>
