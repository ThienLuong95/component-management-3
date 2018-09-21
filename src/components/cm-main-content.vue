<template>
    <v-container grid-list-lg>

            <v-layout row wrap>
            <v-flex xs12>
                <h1 style="color: #2196F3; padding: 12px 0" class="display-1 font-weight-bold">
                 {{ this.$route.params.id}}   </h1>
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
                                :component-data="componentData"
                                @onRun="onRun"
                                @onSaveSetting="onSaveSetting"
                                ref="cmViewCodePanel"
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
        props: {
          listComponent: [],
        },
        data: function () {
            return {
                isShowCode: false,
                componentData: this.$route.params.data ,
            }
        },
        methods: {
            onRun(template, style, script) {
                this.$refs.cmViewComponentPanel.onRun(template, style, script);
            },
            showCode: function () {
                this.isShowCode = !this.isShowCode
            },
            onSaveSetting(headText, links, scripts) {
                console.log(headText, links, scripts)
            }
        },
        watch:{
            '$route' (to, from) {
                this.componentData= this.$route.params.data;
            }
        },
    }
</script>

<style scoped>

</style>
