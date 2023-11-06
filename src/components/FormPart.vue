<script setup>
defineProps({
    selected: {
        type: String,
        required: true
    }
});

defineEmits(["update:selected"]);
</script>

<template>
    <form id="states-list">
        <fieldset>
            <legend tabindex="0">Select a state</legend>
            <select
                :value="selected"
                @input="$emit('update:selected', $event.target.value)"
            >
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
</template>

<style scoped>
</style>
