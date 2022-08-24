<template>
    <section class="theme-1">
        <section class="wrapper">
            
            <header class="content-header">

                <aside class="left-nav">
                    <a class="arrow-left" href="javascript:void(0)">
                        <img src="/img/arrow-left.svg"/>
                        <span class="arrow-left-text">Home</span>
                    </a>
                </aside>

                <aside class="right-tracker">
                </aside>

            </header>

            <main class="main-content">

                <section class="content-wrapper active" data-starter="yes">
                    <h1 class="title">Tell us a bit about you</h1>
                    <p class="desc">Welcome to Millennial Living, we will plug you directly to property managers, we would match your budget and find you someone willing to share rent and utility costs. All you need to do is be willing to share.</p>
                    <a href="javascript:void(0)" data-nav="next" class="btn">Get started</a>
                </section>

                <section class="content-wrapper">
                    <h1 class="title">Acount Type</h1>
                    <div class="input-area">
                        <label for="ans">
                            <select v-model="data.type"  data-input="occupation" data-autofill="occupation" class="input" required>
                                <option value="person">Person</option>
                                <option value="company">Company</option>
                            </select>
                        </label>
                    </div>
                    <a href="javascript:void(0)" @click="start()" data-nav="next" class="btn">Next</a>
                </section>

            </main>

            <footer class="content-progress">
                <div class="range">
                    <div class="range-inner" style="width: 0%;"></div>
                </div>
            </footer>

        </section>
    </section>

</template>

<route lang="yaml">
    meta:
        layout: default
        middleware: []
        requiresAuth: false
</route>

<script>
import { useMeta } from 'vue-meta'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { mapActions, useStore, mapGetters, mapState, mapMutations } from "vuex";
export default {
    setup() {
        useMeta({
            title: 'Home',
        })
        return {
            data: {}
        }
    },
    data() {
        return {}
    },
    computed: {},
    mounted() {},
    methods: {
        start(){
           if(this.data.type == 'person'){
                this.$router.push('person')
           }else{
                this.$router.push('company')
           }
        }
    }
}

</script>
<style>
</style>
