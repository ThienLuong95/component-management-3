<template>
    <v-select
            :items="projects"
            item-text="projectName"
            item-value="projectName"
            v-model="selectedItem"
            return-object
            label="Select"
            v-on:change="onSelect(selectedItem)"
    ></v-select>
</template>

<script>
    export default {
        name: "cm-project-selector",
        props:{
          projects: null
        },
        methods: {
            onSelect(selectedItem){
               this.$emit('onProjectSelection', selectedItem)
            }
        },
        data: function () {
            return{
                selectedItem: null,
            }
        }
    }
</script>

<style scoped>

</style>
