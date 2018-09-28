<template>
    <v-container grid-list-lg>

        <v-layout row wrap>
            <v-flex xs12>
                <h1  class="display-1 font-weight-bold cm-title">{{ componentData.name}} </h1>
                <p class="body-1" style="margin-bottom: 8px">Component description</p>
            </v-flex>

            <v-flex xs12 lg12>
                <h2 id="localLinkUsage" class="headline cm-title" >Usage</h2>
                <p class="body-1">You can change below code to make effect</p>
                <v-card style="background-color: #BDBDBD">
                    <v-card-actions class="cm-action-bar">
                        <v-btn icon medium href="#localLinkUsage" class="cm-icon-grey">
                            <v-icon medium>mdi-pound-box</v-icon>
                        </v-btn>
                        <strong class="title" style="margin: 0px 4px;">Demo</strong>
                        <v-spacer></v-spacer>

                        <v-tooltip top>
                            <v-btn slot="activator" icon medium @click="showCode" class="cm-icon-grey">
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
                            :flag="true"
                    ></cm-view-component-panel>
                    <v-divider></v-divider>
                    <v-card-title></v-card-title>
                </v-card>

            </v-flex>
            <v-flex xs12>
                <h2 class="headline cm-title">API</h2>
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
            projects: [],
        },
        data: function () {
            return {
                isShowCode: false,
                componentData: null,
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
                this.componentData.headText=headText;
                this.componentData.links=links;
                this.componentData.scripts=scripts;
            }
        },
        watch: {
            '$route'(to, from) {
                this.componentData = this.$route.params.data;
            }
        },
        created: function () {
            let routeData = this.$route.params.data;
            if (routeData == null || routeData === 'undefined') {
                let project= this.$store.getters.getProjectById(localStorage.selectedProjectId);
                for (let component of project.listComponents){
                    if(component.id === this.$route.params.id){
                        this.componentData= component;
                        return;
                    }
                }
            }else {
                this.componentData= routeData;
            }
        }
    }
</script>

<style scoped>

</style>
