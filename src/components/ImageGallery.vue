<script setup>
import { parkImages } from "../data/gallery.js";
import { ref, watch } from "vue";

const returnedParks = ref();
const selectedState = ref("All states");
const selectedPark = ref();

watch(selectedPark, (newValue) => {
    if (newValue !== "Choose a state") {
        fetch(`http://localhost:4040/${selectedPark.value}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(`Error: ${response.status}, Data currently unavailable. Please try again later.`);
                }
            })
            .then((data) => {
                returnedParks.value = data.data;
                //totalParks.value = data.total;
            })
            .then(() => {
                scrollSample();
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
});

function scrollSample() {
    const container = document.getElementById("container");
    const containerH = container.offsetHeight;

    const windowH = window.innerHeight;

    if (containerH > windowH) {
        const element = document.getElementById("sample");
        element.scrollIntoView({ behavior: "smooth" });     
    }
}
</script>

<template>
    <form id="states-list">
        <fieldset>
            <legend tabindex="0">Select a state</legend>
            <select v-model="selectedState">
                <option>All states</option>
                <option value="alaska">Alaska</option>
                <option value="american-samoa">American Samoa</option>
                <option value="arizona">Arizona</option>
                <option value="arkansas">Arkansas</option>
                <option value="california">California</option>
                <option value="colorado">Colorado</option>
                <option value="florida">Florida</option>
                <option value="hawaii">Hawaii</option>
                <option value="idaho">Idaho</option>
                <option value="indiana">Indiana</option>
                <option value="kentucky">Kentucky</option>
                <option value="maine">Maine</option>
                <option value="michigan">Michigan</option>
                <option value="minnesota">Minnesota</option>
                <option value="missouri">Missouri</option>
                <option value="montana">Montana</option>
                <option value="nevada">Nevada</option>
                <option value="new-mexico">New Mexico</option>
                <option value="new-york">New York</option>
                <option value="north-carolina">North Carolina</option>
                <option value="north-dakota">North Dakota</option>
                <option value="ohio">Ohio</option>
                <option value="oregon">Oregon</option>
                <option value="south-carolina">South Carolina</option>
                <option value="south-dakota">South Dakota</option>
                <option value="tennessee">Tennessee</option>
                <option value="texas">Texas</option>
                <option value="utah">Utah</option>
                <option value="virgin-islands">Virgin Islands</option>
                <option value="virginia">Virginia</option>
                <option value="washington">Washington</option>
                <option value="west-virginia">West Virginia</option>
                <option value="wyoming">Wyoming</option>
            </select>
        </fieldset>
    </form>

    <main>
        <div class="gallery">
            <template v-for="parkImage in parkImages" :key="parkImage.parkId">
                <template v-if="selectedState === 'All states'">
                    <figure
                        @click="selectedPark = parkImage.parkId"
                    >
                        <img
                            :src="`images/${parkImage.image}.jpg`"
                            :alt="`${parkImage.name}`"
                            :title="`${parkImage.name}`"
                        >
                        <figcaption>{{ parkImage.shortName }} - {{ parkImage.states }}</figcaption>
                    </figure>
                </template>
                <template v-if="selectedState !== 'All states'">
                    <figure
                        v-if="parkImage.statesList.includes(`${selectedState}`)"
                        @click="selectedPark = parkImage.parkId"
                    >
                        <img
                            :src="`images/${parkImage.image}.jpg`"
                            :alt="`${parkImage.name}`"
                            :title="`${parkImage.name}`"
                        >
                        <figcaption>{{ parkImage.shortName }} - {{ parkImage.states }}</figcaption>
                    </figure>
                </template>
            </template>
        </div>
        <section v-for="returnedPark in returnedParks" :key="returnedPark.id" id="sample">
            <img id="close-icon" src="images/icon-close-24.svg" @click="returnedParks=''">
            <div class="title">
                <h2>{{ returnedPark.fullName }}</h2>
                <h3>{{ returnedPark.designation }} {{ returnedPark.states }}</h3>
            </div>

            <div class="content">
                <div class="description">
                    <p>{{ returnedPark.description }}</p>
                </div>

                <div class="expandable">
                    <p @click="returnedPark.showMore = ! returnedPark.showMore">Address, phone, email, climate</p> <img v-show="!returnedPark.showMore" src="images/icon-expand-more-24.svg" alt="expand more icon"><img v-show="returnedPark.showMore" src="images/icon-expand-less-24.svg" alt="expand less icon">
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
        </section>
    </main>
</template>

<style scoped>
</style>
