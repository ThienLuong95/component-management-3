<template>

    <v-layout row wrap style="padding: 12px 12px">
        <v-flex xs12 lg4>
            <cm-code-mirror
                    title="HTML"
                    :value="componentTemplate"
                    :code-mirror-options="codeMirrorOptionsHTMl"
                    @onCmCodeChange="onTemplateChange"
            ></cm-code-mirror>
        </v-flex>
        <v-flex xs12 lg4>
            <cm-code-mirror
                    title="CSS"
                    :value="componentStyle"
                    :code-mirror-options="codeMirrorOptionsStyle"
                    @onCmCodeChange="onStyleChange"
            ></cm-code-mirror>
        </v-flex>
        <v-flex xs12 lg4>
            <cm-code-mirror
                    title="JS"
                    :value="componentScript"
                    :code-mirror-options="codeMirrorOptionsScript"
                    @onCmCodeChange="onScriptChange"
            ></cm-code-mirror>
        </v-flex>
        <v-card-actions>
            <v-btn color="primary" dark @click="onRun">Run
                <v-icon dark right>play_arrow</v-icon>
            </v-btn>
        </v-card-actions>
    </v-layout>


</template>

<script>

    import CmCodeMirror from "./CmCodeMirror";
    export default {

        name: "cm-view-code",
        components: {CmCodeMirror},
        props: {
            componentTemplate: '',
            componentStyle: '',
            componentScript: '',
        },
        data: function () {
            return {
                codeMirrorOptionsHTMl: {
                    mode: 'text/x-vue',
                    tabSize: 4,
                    theme: 'base16-dark',
                    lineNumbers: true,
                    line: true,
                },
                codeMirrorOptionsStyle: {
                    mode: 'text/css',
                    tabSize: 4,
                    theme: 'base16-dark',
                    lineNumbers: true,
                    line: true,
                },
                codeMirrorOptionsScript: {
                    mode: 'text/typescript',
                    tabSize: 4,
                    theme: 'base16-dark',
                    lineNumbers: true,
                    line: true,
                },
                tempTemplate: this.componentTemplate,
                tempStyle: this.componentStyle,
                tempScript: this.componentScript,
            }
        },
        methods: {
            onRun: function () {
                this.$emit('onRun', this.tempTemplate, this.tempStyle, this.tempScript);
            },
            onTemplateChange(code){
                this.tempTemplate=code;
            },
            onStyleChange(code){
                this.tempStyle=code;
            },
            onScriptChange(code){
                this.tempScript=code;
            },
        }
    }
</script>

<style scoped>

</style>
