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
                        projectName: 'Nokia Open Eco System',
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
                                style: '#demo {padding : 20px}',
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
                                style: '#demo {padding : 20px}',
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
                                style: '#demo {padding : 20px}',
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
                                    "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },
                            {
                                id: 'cmp4',
                                name: 'Nokia Socials',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-socials></nokia-socials>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    " });",
                                style: '#demo {padding : 20px}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },
                            {
                                id: 'cmp5',
                                name: 'Nokia Pagination',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-pagination :item-per-page-modes=\"itemPerPageModes\" \n" +
                                    " :item-selected=\"itemSelected\" \n" +
                                    " :total-page=\"totalPage\" \n" +
                                    " :current-page=\"currentPage\" \n" +
                                    "></nokia-pagination>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    "   data: function () {\n" +
                                    "     return {\n" +
                                    "       itemPerPageModes:[]\, \n " +
                                    "       itemSelected:'Adudu'\, \n" +
                                    "       totalPage:10\, \n " +
                                    "       currentPage:5\, \n" +
                                    "     }\n" +
                                    "   }\n" +
                                    " });",
                                style: '#demo {padding : 20px}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },

                            {
                                id: 'cmp6',
                                name: 'Nokia Select',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-select></nokia-select>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    " });",
                                style: '#demo {padding : 20px}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },
                            {
                                id: 'cmp7',
                                name: 'Nokia Navigation',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-select></nokia-select>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    " });",
                                style: '#demo {padding : 20px}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },
                            {
                                id: 'cmp8',
                                name: 'Nokia Flickity',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-flickity></nokia-flickity>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    " });",
                                style: '#demo {padding : 20px}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },
                            {
                                id: 'cmp9',
                                name: 'Nokia Avatar User',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-avatar-user :name=\"name\" \n" +
                                    " :title=\"title\" \n" +
                                    " :link=\"link\" \n" +
                                    " :image=\"image\" \n" +
                                    " :directory=\"directory\" \n" +
                                    " :mail=\"mail\" \n" +
                                    " :location=\"location\" \n" +
                                    "></nokia-avatar-user>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    "   data: function () {\n" +
                                    "     return {\n" +
                                    "       name:'Adudu'\, \n " +
                                    "       title:'Adudu nunuku'\, \n" +
                                    "       link:'google.com'\, \n" +
                                    "       image:'someimage'\, \n" +
                                    "       directory:'directory'\, \n " +
                                    "       mail: 'somone@domain.com'\, \n" +
                                    "       location:'hcm'\, \n" +
                                    "     }\n" +
                                    "   }\n" +
                                    " });",
                                style: '#demo {padding : 20px}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },
                            {
                                id: 'cmp10',
                                name: 'Nokia Async Table',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-async-table :columns=\"columns\" \n" +
                                    " :item-per-page-modes=\"itemPerPageModes\" \n" +
                                    " :item-per-page-mode-selected=\"itemPerPageModeSelected\" \n" +
                                    " :url=\"url\" \n" +
                                    "></nokia-async-table>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    "   data: function () {\n" +
                                    "     return {\n" +
                                    "       columns:[]\, \n " +
                                    "       itemPerPageModes:[]\, \n" +
                                    "       itemPerPageModeSelected:'mode'\, \n" +
                                    "       url:'url'\, \n " +
                                    "     }\n" +
                                    "   }\n" +
                                    " });",
                                style: '#demo {padding : 20px}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },
                            {
                                id: 'cmp11',
                                name: 'Nokia Confirmation Modal',
                                template: "<div id=\"demo\">\n" +
                                    "<nokia-confirmation-modal></nokia-confirmation-modal>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    " });",
                                style: '#demo {padding : 20px}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                                links: [],
                                scripts: [
                                    "http://localhost:9090/open.js",
                                ],
                            },
                            {
                                id: 'cmp12',
                                name: 'Nokia Message Modal',
                                template: "<div id=\"demo\">\n" +
                                    "<message-modal></message-modal>\n" +
                                    "</div>",
                                script: "new Vue({\n" +
                                    "   el:'#demo',\n" +
                                    "   store\," +
                                    " });",
                                style: '#demo {padding : 20px}',
                                headText: "<meta charset=\"utf-8\">\n" +
                                    "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
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

