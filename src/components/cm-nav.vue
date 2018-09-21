<template>
    <v-navigation-drawer
            style="z-index: 999"
            app
            v-model="drawer"
    >
        <!--select project-->
        <v-select
                :items="projects"
                item-text="projectName"
                item-value="projectName"
                v-model="selectedProject"
                return-object
                label="Selected"
                v-on:change="onProjectSelection"
                style="padding: 24px 16px 0 16px"
                outline
        ></v-select>

        <!--Search box search component-->
        <v-text-field
                v-model="keyword"
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-on:change="onSearch(keyword)"
                v-on:blur="onSearch(keyword)"
                style="padding: 0 16px"
                outline
        ></v-text-field>

        <!--Show list Component after search, default return all list-->
        <v-list>
            <v-list-tile
                    v-for="(item) in listResult"
                    :key="item.id"
                    :to="{ name: 'component', params: { id: item.id, data: item }}"
                    active-class="primary--text"
                    @click="onComponentSelected"
            >
                <v-list-tile-content style="padding: 0 8px">
                    <v-list-tile-title class="subheading">{{item.name}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "cm-nav",
        components: {},
        props: {
            projects: null
        },
        data: function () {
            return {
                drawer: null,
                selectedProject: null,
                listResult: null,
                keyword: ''
            }
        },
        methods: {
            setDrawer: function () {
                this.drawer = !this.drawer
            },
            onSearch(key) {
                if (key === '') {
                    return this.listResult = this.selectedProject.listComponents
                }
                this.listResult = this.selectedProject.listComponents.filter(function (component) {
                    let titleLowerCase = component.name.toLowerCase();
                    let keyLowerCase = key.toLowerCase();
                    return titleLowerCase.indexOf(keyLowerCase) > -1
                })
            },
            onProjectSelection() {
                this.keyword = '';
                this.onSearch(this.keyword);
            },
            onComponentSelected() {
                localStorage.selectedProjectId = this.selectedProject.projectId;
            }
        },
        created: function () {
            if (this.projects != null && this.projects.length >= 1) {
                this.selectedProject = this.projects[0];
                this.onSearch(this.keyword);

                if (typeof(Storage) !== "undefined") {
                    if (localStorage.selectedProjectId === 'null' ||
                        localStorage.selectedProjectId === 'undefined' ||
                        localStorage.selectedProjectId === '') {

                        localStorage.setItem("selectedProjectId", this.selectedProject.projectId);
                    }
                } else {
                    console.log('local storage not support')
                }

            }
        }
    }
</script>

<style scoped>

</style>
