<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <h1>{{ $route.params.componentName}}</h1>
                <p>Component description</p>
            </v-flex>

            <v-flex xs12>
                <h3>Demo</h3>
                <p>You can change below code to make effect</p>
            </v-flex>
        </v-layout>

        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs12 lg6>
                    <cm-code-mirror
                            :code="componentCode"
                            @codeChange="codeChange"
                    ></cm-code-mirror>
                </v-flex>
                <v-flex xs12 lg6>
                    <iframe id="iframe" srcdoc="hello"></iframe>
                </v-flex>
            </v-layout>
        </v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <h3>API</h3>
                <p>Component API</p>
            </v-flex>
        </v-layout>


    </v-container>
</template>

<script>
    import CmCodeMirror from "./CmCodeMirror";

    export default {
        name: "cm-main-content",
        components: {CmCodeMirror},
        data: function () {
            return {
                componentCode: "<h1>Hello</h1>",
            }
        },
        methods:{
            codeChange(code) {
                console.log(code)
                document.getElementById("iframe").srcdoc = code;
            }
        },

    }
</script>

<style scoped>

</style>
