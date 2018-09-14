<template>
    <v-container grid-list-lg>
        <v-layout row wrap>

            <v-flex xs12>
                <h1>{{ $route.params.componentName}}</h1>
                <p>Component description</p>
            </v-flex>

            <v-flex xs12 lg12>
                <h2 id="localLinkUsage">Usage</h2>
                <p>You can change below code to make effect</p>
                <v-card>
                    <v-card-actions>
                        <v-btn icon medium href="#localLinkUsage">
                            <v-icon medium>mdi-pound-box</v-icon>
                        </v-btn>
                        <strong style="font-size: 1.4em; margin: 0px 4px">Demo</strong>
                        <v-spacer></v-spacer>

                        <v-tooltip top>
                            <v-btn slot="activator" icon medium @click="showCode">
                                <v-icon medium>code</v-icon>
                            </v-btn>

                            <span>View Source</span>
                        </v-tooltip>

                    </v-card-actions>

                    <v-divider></v-divider>

                    <v-slide-y-transition>
                        <cm-view-code
                                v-if="isShowCode"
                                :component-template="componentTemplate"
                                :component-style="componentStyle"
                                :component-script="componentScript"
                                @onRun="onRun"
                        ></cm-view-code>
                    </v-slide-y-transition>

                    <v-divider></v-divider>

                    <cm-view-component-demo
                            ref="cmViewComponentDemo"
                            :component-template="componentTemplate"
                            :component-script="componentScript"
                            :component-style="componentStyle"
                            :list-script-append="listScriptAppend"
                            :list-link-append="listLinkAppend"
                    ></cm-view-component-demo>
                    <v-divider></v-divider>
                    <v-card-title></v-card-title>
                </v-card>

            </v-flex>
            <v-flex xs12>
                <h2>API</h2>
                <p>Component API</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    import CmViewComponentDemo from "./CmViewComponentDemo";
    import CmViewCode from "./CmViewCode";

    export default {
        name: "cm-main-content",
        components: {CmViewCode, CmViewComponentDemo},
        data: function () {
            return {
                componentTemplate: "<div id=\"demo\">\n" +
                    "  <v-app id=\"inspire\">\n" +
                    "    <div>\n" +
                    "      <v-btn color=\"success\">Success</v-btn>\n" +
                    "      <v-btn color=\"error\">Error</v-btn>\n" +
                    "      <v-btn color=\"warning\">Warning</v-btn>\n" +
                    "      <v-btn color=\"info\">Info</v-btn>\n" +
                    "    </div>\n" +
                    "  </v-app>\n" +
                    "</div>",
                componentScript: 'new Vue({ el: \'#demo\'})',
                componentStyle: '.red{background-color: red}',

                //Project config===========================
                listScriptAppend: [
                    "https://cdn.jsdelivr.net/npm/vue/dist/vue.js",
                    "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"],
                listLinkAppend: ['https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',],
                isShowCode: false,
            }
        },
        methods: {
            onRun(template, style, script) {
                this.$refs.cmViewComponentDemo.onRun(template, style, script);
            },
            showCode: function () {
                this.isShowCode = !this.isShowCode
            }
        },
    }
</script>

<style scoped>

</style>
