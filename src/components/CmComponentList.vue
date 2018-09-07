<template>
    <v-list>
        <v-list-tile
                value="true"
                v-for="(item, i) in listComponents"
                :key="i"
                :to="item.componentName"
        >
            <cm-component-list-item :component="item"></cm-component-list-item>
        </v-list-tile>

    </v-list>
</template>

<script>
    import CmComponentListItem from "./CmComponentListItem";

    export default {
        name: "cm-component-list",
        components: {CmComponentListItem},
        props: {
            listComponents:null
        }
    }
</script>

<style scoped>

</style>
