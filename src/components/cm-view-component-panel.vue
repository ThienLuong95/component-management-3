<template>
    <iframe
            v-on:load="frameLoaded"
            id="cmViewComponentDemo"
            width="100%"
            scrolling="no"
            frameborder="no"
    ></iframe>
</template>

<script>
    export default {
        name: "cm-view-component-panel",
        props: {
            componentTemplate: '',
            componentStyle: '',
            componentScript: '',
            componentHeadText:'',
            listScriptAppend: Array,
            listLinkAppend: Array
        },
        data: function () {
            return {
                frame: null,
                frameDoc: null,
                scriptElement: null,
                styleElement: null,
            }
        },
        methods: {
            onRun(template, style, script) {
                this.loadFrame(this.frameDoc, this.componentHeadText, template, style, script);
            },
            loader(doc, tag, url, resolve, reject) {
                let element = doc.createElement(tag);
                let attr;
                let parent;
                element.addEventListener('load', () => {
                    resolve(url);
                });
                element.addEventListener('error', () => {
                    reject(url);
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
                for (let scr of this.listScriptAppend) {
                    let temp = this.loadJs(scr);
                    arr.push(temp);
                }
                for (let link of this.listLinkAppend) {
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
                Promise.all(this.getListLinkAndScript()).then(() => {
                    this.loadCode(doc, 'head', 'style', style);
                    this.loadCode(doc, 'body', 'script', script);
                    doc.close();
                    console.log('resolve')
                }).catch(function () {
                    console.log('reject')
                });

            }
        },
        mounted: function () {
            this.frame = document.getElementById('cmViewComponentDemo');
            this.frameDoc = this.frame.contentDocument || this.frame.contentWindow.document;
            this.loadFrame(this.frameDoc, this.componentHeadText, this.componentTemplate, this.componentStyle, this.componentScript);
            console.log('mounted')
        },

    }
</script>

<style scoped>
    #cmViewComponentDemo {
        margin: 24px 0px;
        padding: 0px 12px;
    }
</style>

