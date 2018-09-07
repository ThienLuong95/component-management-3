<template>
    <v-navigation-drawer
            app
            v-model="drawer"
    >
        <v-container>
            <cm-project-selector
                    :projects="projects"
                    v-on:onProjectSelection="onProjectSelection"
            ></cm-project-selector>
            <cm-search-box
                    v-on:onSearch="onSearch"
                    ref="componentSearch"
            ></cm-search-box>
            <cm-component-list
                    :list-components="listResult"
            ></cm-component-list>
        </v-container>

    </v-navigation-drawer>
</template>

<script>
    import CmProjectSelector from "./CmProjectSelector";
    import CmSearchBox from "./CmSearchBox";
    import CmComponentList from "./CmComponentList";

    export default {
        name: "cm-navigation-drawer",
        components: {CmComponentList, CmSearchBox, CmProjectSelector},
        props: {
            projects: null
        },
        data: function () {
            return {
                drawer: null,
                selectedProject: null,
                listResult: null
            }
        },
        methods: {
            setDrawer: function () {
                this.drawer = !this.drawer
            },
            onSearch(key) {
                if (key == null || key === 'undefined' || key === '') {
                    return this.listResult = this.selectedProject.listComponents
                }
                this.listResult = this.selectedProject.listComponents.filter(function (component) {
                    let titleLowerCase = component.componentName.toLowerCase();
                    let keyLowerCase = key.toLowerCase();
                    return titleLowerCase.indexOf(keyLowerCase) > -1
                })
            },
            onProjectSelection(selectedProject) {
                this.selectedProject = selectedProject;
                this.$refs.componentSearch.setKey('');
            }
        },
    }
</script>

<style scoped>

</style>
