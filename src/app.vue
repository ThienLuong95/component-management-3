<template>
    <v-app>
        <cm-nav :projects="projects" ref="navToggle"></cm-nav>
        <v-toolbar
                app
                dark
                style="z-index: 998"
                color="secondary"
        >
            <v-toolbar-side-icon @click="setDrawer"></v-toolbar-side-icon>
            <v-toolbar-title > ComponentManagement</v-toolbar-title>
        </v-toolbar>

        <v-content>
            <router-view></router-view>
        </v-content>

        <v-footer app>
            <v-card-text>
                &copy;2018 — <strong>ATM</strong>
            </v-card-text>
        </v-footer>
    </v-app>
</template>

<script>


    import CmNav  from "./components/cm-nav";

    export default {
        name: 'app',
        components: {CmNav},
        methods: {
            setDrawer: function () {
               this.$refs.navToggle.setDrawer()
            }
        },
        data: function () {
            return {
                selectedProject: null,
                selectedComponent: null,
                projects: [
                    {
                        projectName: 'Project 1',
                        listComponents: [
                            {componentName: 'Project 1 Component 1'},
                            {componentName: 'Project 1 Component 2'},
                            {componentName: 'Project 1 Component 3'},
                            {componentName: 'Project 1 Component 4'},
                            {componentName: 'Project 1 Component 5'},
                        ]},
                    {
                        projectName: 'Project 2',
                        listComponents: [
                            {componentName: 'Project 2 Component 1'},
                            {componentName: 'Project 2 Component 2'},
                            {componentName: 'Project 2 Component 3'},
                            {componentName: 'Project 2 Component 4'},
                            {componentName: 'Project 2 Component 5'},
                        ]},

                ],
            }
        }


    }
</script>

