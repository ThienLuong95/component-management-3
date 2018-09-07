<template>
    <codemirror
            :value="code"
            :options="cmOptions"
            @ready="onCmReady"
            @focus="onCmFocus"
            @input="onCmCodeChange"
    ></codemirror>
</template>

<script>
    import 'codemirror/mode/vue/vue.js'
    // theme css
    import 'codemirror/theme/base16-dark.css'

    export default {
        name: "cm-code-mirror",
        props: {
            code: ''
        },
        data:function(){
            return {
                cmOptions: {
                    mode: 'text/x-vue',
                    tabSize: 4,
                    theme: 'base16-dark',
                    lineNumbers: true,
                    line: true,
                }
            }
        },
        methods :{
            onCmReady: function (cm) {
                console.log("ready",cm)
            },
            onCmFocus: function (cm) {
                console.log("focus", cm)
            },
            onCmCodeChange: function (code) {
                console.log("codechange", code)
                this.$emit('codeChange', code);
            }
        }
    }
</script>

<style scoped>

</style>
