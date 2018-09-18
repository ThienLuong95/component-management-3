<template>
    <v-container grid-list-lg >
        <v-layout row wrap>

            <v-flex xs12>
                <h1 style="color: #2196F3; padding: 12px 0" class="display-1 font-weight-bold">{{ $route.params.componentName}}</h1>
                <p class="body-1">Component description</p>
            </v-flex>

            <v-flex xs12 lg12>
                <h2 id="localLinkUsage" class="headline" style="color: #2196F3; padding: 0 0 12px 0">Usage</h2>
                <p class="body-1">You can change below code to make effect</p>
                <v-card style="background-color: #BDBDBD">
                    <v-card-actions style="background-color: #f5f5f5; color: #757575 ">
                        <v-btn icon medium href="#localLinkUsage" style="color: #757575">
                            <v-icon medium>mdi-pound-box</v-icon>
                        </v-btn>
                        <strong class="title" style="font-size: 1.4em; margin: 0px 4px; color: #757575">Demo</strong>
                        <v-spacer></v-spacer>

                        <v-tooltip top>
                            <v-btn slot="activator" icon medium @click="showCode" style="color: #757575">
                                <v-icon medium>code</v-icon>
                            </v-btn>

                            <span>View Source</span>
                        </v-tooltip>

                    </v-card-actions>

                    <v-divider></v-divider>

                    <v-slide-y-transition>
                        <cm-view-code-panel
                                v-if="isShowCode"
                                :component-template="componentTemplate"
                                :component-script="componentScript"
                                :component-style="componentStyle"
                                :component-head-text="componentHeadText"
                                :list-script-append="listScriptAppend"
                                :list-link-append="listLinkAppend"
                                @onRun="onRun"
                                @onSaveSetting="onSaveSetting"
                        ></cm-view-code-panel>
                    </v-slide-y-transition>

                    <v-divider></v-divider>

                    <cm-view-component-panel
                            ref="cmViewComponentDemo"
                            :component-template="componentTemplate"
                            :component-script="componentScript"
                            :component-style="componentStyle"
                            :component-head-text="componentHeadText"
                            :list-script-append="listScriptAppend"
                            :list-link-append="listLinkAppend"
                    ></cm-view-component-panel>
                    <v-divider></v-divider>
                    <v-card-title></v-card-title>
                </v-card>

            </v-flex>
            <v-flex xs12>
                <h2 class="headline" style="color: #2196F3; padding: 12px 0">API</h2>
                <p>Component API</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    import CmViewComponentPanel from "./cm-view-component-panel";
    import CmComponentSetting from "./cm-setting-frame";
    import CmViewCodePanel from "./cm-view-code-panel";

    export default {
        name: "cm-main-content",
        components: {CmViewCodePanel, CmComponentSetting, CmViewComponentPanel},
        props:{
          selectedComponent: null,
        },
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
                componentHeadText:"<meta charset=\"utf-8\">\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
                listScriptAppend: [
                    "https://cdn.jsdelivr.net/npm/vue/dist/vue.js",
                    "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"],
                listLinkAppend: ['https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',],
                isShowCode: false,
            }
        },
        methods: {
            onRun(template, style, script) {
                this.componentTemplate= template;
                this.componentStyle= style;
                this.componentScript= script;
                this.$refs.cmViewComponentDemo.onRun(template, style, script);
            },
            showCode: function () {
                this.isShowCode = !this.isShowCode
            },
            onSaveSetting(headText, links, scripts){
                this.componentHeadText= headText;
                this.listLinkAppend=links;
                this.listScriptAppend= scripts;
                console.log('OnSave setting');
                console.log(headText, links, scripts)
            }
        },
    }
</script>

<style scoped>

</style>
