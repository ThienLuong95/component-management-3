<template>
    <v-dialog v-model="dialog" max-width="450px">
        <v-card style="padding: 4px">
            <v-card-title style="height: 100px; background-color: darkgrey">
                <h1 class="display-1" style="color: #757575">Component Setting</h1>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="onSettingSave">Save</v-btn>
            </v-card-title>
            <v-tabs dark color="secondary" grow v-model="activeTab" slider-color="accent">

                <v-tab class="tab subheading" href="#tabHtml">Html</v-tab>
                <v-tab class="tab subheading" href="#tabCss">Css</v-tab>
                <v-tab class="tab subheading" href="#tabJs">Js</v-tab>
            </v-tabs>

            <v-tabs-items v-model="activeTab" class="config-scrollbar">

                <v-tab-item id="tabHtml" class="tab-item">

                        <div style="padding: 24px 0">
                            <h2 class="headline" style="color: #757575">Stuff for tag head</h2>
                            <p class="body-1">Any tag meta, link, style, script... will be add in tag head </p>
                        </div>
                        <v-textarea
                                v-model="textArea"
                                placeholder="meta, link, style, script..."
                                outline
                                clearable
                                auto-grow
                        >
                        </v-textarea>

                </v-tab-item>

                <v-tab-item id="tabCss" class="tab-item">
                    <cm-tab-item type="CSS" :urls="listLinkAppend" ref="tabCss"></cm-tab-item>
                </v-tab-item>

                <v-tab-item id="tabJs" class="tab-item">
                    <cm-tab-item type="JS" :urls="listScriptAppend" ref="tabJs"></cm-tab-item>
                </v-tab-item>

            </v-tabs-items>
        </v-card>
    </v-dialog>
</template>

<script>
    import CmTabItem from "./cm-tab-item";

    export default {
        name: "cm-setting-frame",
        components: {CmTabItem},
        props: {
            listScriptAppend: Array,
            listLinkAppend: Array,
            componentHeadText: '',
        },
        data: function () {
            return {
                dialog: false,
                activeTab: 'tabHtml',
                textArea: '',
            }

        },
        methods: {
            setDialog() {
                this.dialog = !this.dialog;
            },
            setActiveTab(name) {
                switch (name) {
                    case 'HTML':
                        this.activeTab = 'tabHtml';
                        break;
                    case 'CSS':
                        this.activeTab = 'tabCss';
                        break;
                    case 'JS':
                        this.activeTab = 'tabJs';
                        break;
                    default:
                        this.activeTab = 'tabHtml';
                        break;
                }
            },
            onSettingSave() {
                this.$emit('onSaveSetting', this.textArea, this.$refs.tabCss.getUrls(), this.$refs.tabJs.getUrls());
                this.dialog = !this.dialog;
            },
        },
        created: function () {
            this.textArea = this.componentHeadText;
        }

    }
</script>

<style scoped>
    .tab-item {
        padding: 0 18px;
        height: 500px;
        overflow-y: auto;
        transition: none;
    }

    .tab-item::-webkit-scrollbar {
        width: 4px;
    }
    .tab-item::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    .tab-item::-webkit-scrollbar-thumb {
        background: #888;
    }
    .tab-item::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
