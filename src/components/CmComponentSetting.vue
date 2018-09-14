<template>
    <v-dialog v-model="dialog" max-width="500px" >
        <v-card>
            <v-card-title>Component Setting</v-card-title>
            <v-tabs fixed-tabs v-model="activeTab" slider-color="black">

                <v-tab href="#tabHtml">Html</v-tab>
                <v-tab href="#tabCss">Css</v-tab>
                <v-tab href="#tabJs">Js</v-tab>
            </v-tabs>
            <v-tabs-items v-model="activeTab">
                <v-tab-item id="tabHtml">
                    <v-card class="tab-item">
                        <v-card-title>Stuff for tag head</v-card-title>
                        <v-textarea  v-model="textArea" placeholder="meta, link, script"  auto-grow box clearable> </v-textarea>
                    </v-card>
                </v-tab-item>
                <v-tab-item id="tabCss">
                    <v-card class="tab-item">
                        <v-card-title>Add External Stylesheets</v-card-title>
                        <v-card-text>Any URL's added here will be added as tag 'link' in order, and before the CSS in the editor</v-card-text>
                        <draggable v-model="listLinks" :options="{group:'link'}" @start="drag=true" @end="drag=false">
                            <div v-for="(element, index) in listLinks" :key="index">

                                <v-text-field
                                        :placeholder="element.src"
                                        clearable
                                        box
                                        type="url"
                                        append-outer-icon="mdi-eye"
                                        @click:append-outer="goToCDN"
                                        prepend-icon="mdi-arrow-all"
                                ></v-text-field>

                            </div>
                        </draggable>


                    </v-card>
                </v-tab-item>
                <v-tab-item id="tabJs" >
                    <v-card>
                        <v-card class="tab-item">
                            <v-card-title>Add External Scripts</v-card-title>
                            <v-card-text>Any URL's added here will be added as tag 'script' in order, and before the script in the editor</v-card-text>

                        </v-card>
                    </v-card>
                </v-tab-item>

            </v-tabs-items>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "CmComponentSetting",
        data: function () {
            return {
                dialog: false,
                activeTab: this.getActiveTab(),
                textArea: 'asdadadasdasddasdasd',
                listLinks: [
                    {src: 'src1'},
                    {src: 'src2'},
                    {src: 'src3'},
                    {src: 'src4'},
                    {src: 'src5'},
                    {src: 'src5'},
                    {src: 'src5'},
                    {src: 'src5'},
                    {src: 'src5'},
                    {src: 'src5'},
                    {src: 'src5'},
                ],
                listScripts: null,
            }

        },
        getActiveTab() {
            let temp = this.title.toLowerCase();
            let tab = '';
            switch (temp) {
                case 'html':
                    tab = 'tabHtml';
                    break;
                case 'css':
                    tab = 'tabCss';
                    break;
                case 'js':
                    tab = 'tabJs';
                    break;
                default :
                    tab = 'tabHtml';
                    break;
            }
            return tab;

        },
        goToCDN(){
            console.log('gotoCDN')
        }
    }
</script>

<style scoped>

</style>
