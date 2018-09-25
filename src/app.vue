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
            <v-toolbar-title> ComponentManagement</v-toolbar-title>
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
    import CmNav from "./components/cm-nav";

    export default {
        name: 'app',
        components: {CmNav},
        created: function () {
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
                        projectId: 'pj1',
                        listComponents: [
                            {
                                id: 'cmp0',
                                name: 'Nokia Button',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-button :text=\"text\"></nokia-button>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    "   data: function () {\n" +
                                    "     return {\n" +
                                    "       text:'Hello'\n" +
                                    "     }\n" +
                                    "   }\n" +
                                    " });",
                                style: '.red{background-color: red}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },
                            {
                                id: 'cmp1',
                                name: 'Nokia Hero',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-hero :title=\"title\" :image=\"image\"></nokia-hero>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    "   data: function () {\n" +
                                    "     return {\n" +
                                    "       title:'Hello'\, \n " +
                                    "       image:'http://localhost:8080/img/hero_default.8547bb5.png'\n" +
                                    "     }\n" +
                                    "   }\n" +
                                    " });",
                                style: '.red{background-color: red}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },
                            {
                                id: 'cmp2',
                                name: 'Nokia Header',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-header :title=\"title\" :image=\"image\"></nokia-header>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    "   data: function () {\n" +
                                    "     return {\n" +
                                    "       title:'Hello'\, \n " +
                                    "       image:'http://localhost:8080/img/hero_default.8547bb5.png'\n" +
                                    "     }\n" +
                                    "   }\n" +
                                    " });",
                                style: '.red{background-color: red}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },
                            {
                                id: 'cmp3',
                                name: 'Nokia Carousel',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-carousel :groupNumber=\"groupNumber\" :duration=\"duration\"></nokia-carousel>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    "   data: function () {\n" +
                                    "     return {\n" +
                                    "       groupNumber:1\, \n " +
                                    "       duration:10\n" +
                                    "     }\n" +
                                    "   }\n" +
                                    " });",
                                style: '.red{background-color: red}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },

                        ]
                    },
                    {
                        projectName: 'Project 2',
                        projectId: 'pj2',
                        listComponents: []
                    },
                ],
            }
        }
    }
</script>

