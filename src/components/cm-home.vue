<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 lg12>
                <h1 id="localLinkUsage" class="display-1 font-weight-bold cm-title" >Welcome</h1>
                <p class="body-1">You can change below code to make effect</p>
                <v-card style="background-color: #BDBDBD">
                    <v-card-actions class="cm-action-bar">
                        <v-btn icon medium href="#localLinkUsage" class="cm-icon-grey">
                            <v-icon medium>mdi-pound-box</v-icon>
                        </v-btn>
                        <strong class="title" style="margin: 0px 4px;">Demo</strong>
                        <v-spacer></v-spacer>
                        <!--<v-tooltip top>-->
                            <!--<v-btn slot="activator" icon medium @click="showCode" class="cm-icon-grey">-->
                                <!--<v-icon medium>code</v-icon>-->
                            <!--</v-btn>-->
                            <!--<span>View Source</span>-->
                        <!--</v-tooltip>-->

                    </v-card-actions>

                    <v-divider></v-divider>

                    <v-slide-y-transition>
                        <cm-view-code-panel
                                :component-data="componentData"
                                @onRun="onRun"
                                @onSaveSetting="onSaveSetting"
                        ></cm-view-code-panel>
                    </v-slide-y-transition>

                    <v-divider></v-divider>

                    <cm-view-component-panel
                            ref="cmViewComponentPanel"
                            :component-data="componentData"
                    ></cm-view-component-panel>
                    <v-divider></v-divider>
                    <v-card-title></v-card-title>
                </v-card>

            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    import CmViewCodePanel from "./cm-view-code-panel";
    import CmViewComponentPanel from "./cm-view-component-panel";

    export default {
        name: "cm-home",
        components: {CmViewComponentPanel, CmViewCodePanel},
        data: function(){
            return {
                componentData:  {
                    id: 'cmdemo',
                    name: 'Cm demo',
                    template: "<div id=\"app\">\n" +
                        "  <v-app id=\"inspire\">\n" +
                        "    <div>\n" +
                        "      <v-btn color=\"success\">Success</v-btn>\n" +
                        "      <v-btn color=\"error\">Error</v-btn>\n" +
                        "      <v-btn color=\"warning\">Warning</v-btn>\n" +
                        "      <v-btn color=\"info\">Info</v-btn>\n" +
                        "    </div>\n" +
                        "  </v-app>\n" +
                        "</div>",
                    script: "new Vue({\n" +
                        "  el: '#app',\n" +
                        "  \n" +
                        "})",
                    style: '#inspire { padding: 20px }',
                    headText:"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
                    links: ["https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons", "https://cdn.jsdelivr.net/npm/vuetify@1.2.5/dist/vuetify.min.css"],
                    scripts: ["https://cdn.jsdelivr.net/npm/babel-polyfill/dist/polyfill.min.js","https://cdn.jsdelivr.net/npm/vue/dist/vue.js", "https://cdn.jsdelivr.net/npm/vuetify@1.2.5/dist/vuetify.min.js"],
                }
            }
        },
        methods:{
            onRun(template, style, script) {
                this.$refs.cmViewComponentPanel.onRun(template, style, script);
            },
            onSaveSetting(headText, links, scripts) {
                this.componentData.headText=headText;
                this.componentData.links=links;
                this.componentData.scripts=scripts;
            }
        }
    }
</script>

<style scoped>

</style>
