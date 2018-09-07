<template>
    <v-app>
        <cm-navigation-drawer :projects="projects" ref="navToggle"></cm-navigation-drawer>
        <cm-toolbar v-on:setDrawer="setDrawer"></cm-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <cm-footer></cm-footer>
    </v-app>
</template>

<script>


    import CmNavigationDrawer  from "./components/CmNavigationDrawer";
    import CmToolbar from "./components/CmToolbar";
    import CmFooter from "./components/CmFooter";

    export default {
        name: 'app',
        components: {CmFooter, CmToolbar, CmNavigationDrawer},
        methods: {
            setDrawer: function () {
               this.$refs.navToggle.setDrawer()
            }
        },
        data: function () {
            return {
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
