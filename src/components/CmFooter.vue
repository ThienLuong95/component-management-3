<template>
    <v-footer app>
           <v-card-text>
               &copy;2018 — <strong>{{footerTitle}}</strong>
           </v-card-text>
    </v-footer>
</template>

<script>
    export default {
        name: "cm-footer",
        components: {},
        data: function () {
            return {
                footerTitle: 'ATM'
            }
        }
    }
</script>

<style scoped>

</style>
