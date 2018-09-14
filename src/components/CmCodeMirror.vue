<template>
    <v-card>
        <v-card-actions>
            <v-btn icon @click="dialog=!dialog">
                <v-icon>settings</v-icon>
            </v-btn>
            <strong style="font-size: 1.2em; margin: 0px 4px">{{ title }}</strong>
            <v-spacer></v-spacer>
        </v-card-actions>
        <v-divider></v-divider>
        <codemirror
                :value="value"
                :options="codeMirrorOptions"
                @input="onCmCodeChange"
        ></codemirror>

    </v-card>

</template>

<script>
    import 'codemirror/theme/base16-dark.css'
    import 'codemirror/mode/vue/vue.js'
    import 'codemirror/mode/css/css.js'
    import draggable from 'vuedraggable'
    export default {
        name: "cm-code-mirror",
        components: {draggable},
        props: {
            title: '',
            value: '',
            codeMirrorOptions: null,
        },

        methods: {
            onCmCodeChange: function (code) {
                this.$emit('onCmCodeChange', code);
            },


        },


    }
</script>

<style scoped>


</style>
