<template>
    <v-app>
        <cm-nav :projects="projects" ref="navToggle" ></cm-nav>
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
        created: function(){
            this.$store.commit('setProjects', this.projects)
        },
        methods: {
            setDrawer: function () {
               this.$refs.navToggle.setDrawer()
            },
        },

        data: function () {
            return {
                projects: [
                    {
                        projectName: 'Project 1',
                        projectId:'pj1',
                        listComponents: [
                            {
                                id: 'cmp0',
                                name: 'Project 1 Component 0',
                                template:'<div id="demo">\n' +
                                    '  <v-app id="inspire">\n' +
                                    '    <div>\n' +
                                    '      <v-btn color="success">Success</v-btn>\n' +
                                    '      <v-btn color="error">Error</v-btn>\n' +
                                    '    </div>\n' +
                                    '  </v-app>\n' +
                                    '</div>',
                                script:'new Vue({ el: \'#demo\'})',
                                style:'.red{background-color: red}',
                                headText:"<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links:['https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',],
                                scripts:[
                                    "https://cdn.jsdelivr.net/npm/vue/dist/vue.js",
                                    "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"],
                            },{
                                id: 'cmp1',
                                name: 'Project 1 Component 1',
                                template:'<div id="demo">\n' +
                                    '  <v-app id="inspire">\n' +
                                    '    <div>\n' +
                                    '      <v-btn color="success">Success</v-btn>\n' +
                                    '      <v-btn color="error">Error</v-btn>\n' +
                                    '      <v-btn color="info">Info</v-btn>\n' +
                                    '    </div>\n' +
                                    '  </v-app>\n' +
                                    '</div>',
                                script:'new Vue({ el: \'#demo\'})',
                                style:'.red{background-color: red}',
                                headText:"<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links:['https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',],
                                scripts:[
                                    "https://cdn.jsdelivr.net/npm/vue/dist/vue.js",
                                    "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"],
                            },{
                                id: 'cmp2',
                                name: 'Project 1 Component 2',
                                template:'<div id="demo">\n' +
                                    '  <v-app id="inspire">\n' +
                                    '    <div>\n' +
                                    '      <v-btn color="error">Error</v-btn>\n' +
                                    '      <v-btn color="warning">Warning</v-btn>\n' +
                                    '      <v-btn color="info">Info</v-btn>\n' +
                                    '    </div>\n' +
                                    '  </v-app>\n' +
                                    '</div>',
                                script:'new Vue({ el: \'#demo\'})',
                                style:'.red{background-color: red}',
                                headText:"<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links:['https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',],
                                scripts:[
                                    "https://cdn.jsdelivr.net/npm/vue/dist/vue.js",
                                    "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"],
                            },{
                                id: 'cmp3',
                                name: 'Project 1 Component 3',
                                template:'<div id="demo">\n' +
                                    '  <v-app id="inspire">\n' +
                                    '    <div>\n' +
                                    '      <v-btn color="success">Success</v-btn>\n' +
                                    '      <v-btn color="error">Error</v-btn>\n' +
                                    '      <v-btn color="warning">Warning</v-btn>\n' +
                                    '    </div>\n' +
                                    '  </v-app>\n' +
                                    '</div>',
                                script:'new Vue({ el: \'#demo\'})',
                                style:'.red{background-color: red}',
                                headText:"<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links:['https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',],
                                scripts:[
                                    "https://cdn.jsdelivr.net/npm/vue/dist/vue.js",
                                    "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"],
                            },


                        ]},
                    {
                        projectName: 'Project 2',
                        projectId:'pj2',
                        listComponents: [
                        ]},
                ],

            }
        }


    }
</script>

