<template>
    <iframe
            v-on:load="frameLoaded"
            id="cmViewComponentDemo"
            width="100%"
            scrolling="no"
            frameborder="no"
            src="http://localhost:8080"
    ></iframe>
</template>

<script>
    export default {
        name: "cm-view-component-panel",
        props: {
            componentData: Object,
        },
        data: function () {
            return {
                frame: null,
                frameDoc: null,
            }
        },
        methods: {
            onRun(template, style, script) {
                this.loadFrame(this.frameDoc, this.componentData.headText, template, style, script);
            },
            loader(doc, tag, url, resolve, reject) {
                let element = doc.createElement(tag);
                let attr;
                let parent;
                element.addEventListener('load', () => {
                    resolve(url);
                });
                element.addEventListener('error', (message) => {
                    reject(url);
                    console.log('---------reject URL-----')
                    console.log(message)
                });
                switch (tag) {
                    case 'script':
                        parent = 'body';
                        attr = 'src';
                        break;
                    case 'link':
                        parent = 'head';
                        attr = 'href';
                        element.type = 'text/css';
                        element.rel = 'stylesheet';
                        break;
                    default:
                        throw  new Error("Unsupported tag")
                }
                element[attr] = url;
                doc[parent].appendChild(element);
            },
            loadCss(url) {
                return new Promise((resolve, reject) => {
                    this.loader(this.frameDoc, "link", url, resolve, reject);
                });
            },
            loadJs(url) {
                return new Promise((resolve, reject) => {
                    this.loader(this.frameDoc, "script", url, resolve, reject);
                });
            },
            getListLinkAndScript() {
                let arr = [];
                for (let scr of this.componentData.scripts) {
                    let temp = this.loadJs(scr);
                    arr.push(temp);
                }
                for (let link of this.componentData.links) {
                    let temp = this.loadCss(link);
                    arr.push(temp);
                }
                return arr;
            },
            frameLoaded: function () {
                if (this.frame != null) {
                    this.frame.style.height = this.frameDoc.body.scrollHeight + 'px';
                }

            },
            loadCode(doc, parent, tag, code) {
                let element = doc.createElement(tag);
                element.innerHTML = code;
                if (tag === 'style') {
                    element.type = 'text/css'
                }
                doc[parent].appendChild(element);
            },

            loadFrame(doc, head, template, style, script) {
                doc.write("<!DOCTYPE html><html><head></head><body></body></html>");
                doc.head.innerHTML=head;
                doc.body.innerHTML = template;
                var reRunExternalScript = 'exportDemoFunction(window); \n';
                script = reRunExternalScript + script;
                Promise.all(this.getListLinkAndScript()).then(() => {
                    this.loadCode(doc, 'head', 'style', style);
                    this.loadCode(doc, 'body', 'script', script);
                    doc.close();
                    console.log('resolve')
                }).catch(function () {
                    console.log('reject')
                });
            },

        },
        mounted: function () {
            this.frame = document.getElementById('cmViewComponentDemo');
            this.frameDoc = this.frame.contentDocument || this.frame.contentWindow.document;
            if(this.componentData !=null && this.componentData !=='undefined'){
                this.loadFrame(this.frameDoc, this.componentData.headText,
                    this.componentData.template, this.componentData.style, this.componentData.script);
            }

        },
        watch: {
            componentData: function () {
                this.loadFrame(this.frameDoc, this.componentData.headText,
                    this.componentData.template, this.componentData.style, this.componentData.script);
            }
        }
    }
</script>

<style scoped>
    #cmViewComponentDemo {
        margin: 24px 0;
        padding: 0 12px;
    }
</style>

