<template>
   <v-list-tile-content>
       <v-list-tile-title>{{component.componentName}}</v-list-tile-title>
   </v-list-tile-content>
</template>

<script>

    export default {
        name: "cm-component-list-item",
        components: {},
        props:{
            component: null
        }
    }
</script>

<style scoped>

</style>
