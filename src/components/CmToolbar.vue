<template>
    <v-toolbar app>
        <v-toolbar-side-icon @click="setDrawer"></v-toolbar-side-icon>
        <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
</template>

<script>

    export default {
        name: "cm-toolbar",
        components: {},
        data(){
            return {
                title: 'ComponentManagement'
            }
        },
        methods: {
            setDrawer: function () {
               this.$emit('setDrawer')
            }
        }
    }
</script>

<style scoped>

</style>
