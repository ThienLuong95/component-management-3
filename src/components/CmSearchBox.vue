<template>
    <v-text-field
            v-model="key"
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-on:change="onchange(key)"
            v-on:blur="onchange(key)"
    ></v-text-field>

</template>

<script>
    export default {
        name: "cm-search-box",
        data() {
            return {
                key: ''
            }
        },
        methods: {
            onchange: function (key) {
                this.$emit('onSearch', key)
            },
            setKey: function (key) {
                this.key = key;
                this.onchange(key)
            }
        },

    }
</script>

<style scoped>

</style>
