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
                    <h1 class="title">You are registering as a Company</h1>
                    <p class="desc"></p>
                    <a href="javascript:void(0)" data-nav="next" class="btn">Continue => </a>
                </section>


                <div v-if="data.type = 'company' ">
                    <section class="content-wrapper">
                        <h1 class="title">Vendor's Company Name ?</h1>
                        <div class="input-area">
                            <label for="ans">
                                <input v-model="data.cname" type="text" id="ans" class="input" data-input="cname" placeholder="Vendor's Company Name " required/>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">Vendor's Company Address?</h1>
                        <div class="input-area">
                            <label for="ans">
                                 <input v-model="data.caddress" type="text" id="ans" class="input" data-input="caddress" placeholder="Vendor's Company Address" required/>
    
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">Vendor's Company Phone Number?</h1>
                        <div class="input-area">
                            <label for="ans">
                                 <input v-model="data.cphone" type="text" id="ans" class="input" data-input="cphone" placeholder="Vendor's Company Phone Number" required/>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>
                    
                    <section class="content-wrapper">
                        <h1 class="title">Vendor's Company Email?</h1>
                        <div class="input-area">
                            <label for="ans">
                                <input type="email" id="cemail" class="input" data-input="cemail" placeholder="Vendor's Company Email?" required/>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>

                     <section class="content-wrapper">
                        <h1 class="title">Create New secure password</h1>
                        <div class="input-area">
                            <label for="password">
                                <input v-model="data.password" type="password" id="password" class="input" data-input="password" placeholder="Enter a password" required/>
                            </label>
                        </div>
                        <a href="javascript:void(0)"  data-nav="next" class="btn">Confirm Password</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">Confirm New secure password</h1>
                        <div class="input-area">
                            <label for="password">
                                <input v-model="data.cpassword" type="password" id="cpassword" class="input" data-input="password" placeholder="Enter secure password" required/>
                            </label>
                        </div>
                        <a href="javascript:void(0)" @click="finish()" data-nav="finish" class="btn">Finish</a>
                    </section>

                    <!--<section class="content-wrapper">
                        <h1 class="title">Add your profile picture</h1>
                        <div class="input-area">
                            <label for="picture">
                                <input type="file" id="picture" class="input" data-input="picture" required/>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>


                    <section class="content-wrapper" data-starter="yes">
                        <h1 class="title">What are your living preferences</h1>
                        <p class="desc">In this section we would like to know your preferred location, number of house mates you will allow and some other living preferences custom to you.</p>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Get started</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">What type of house do you need?</h1>
                        <div class="input-area">
                            <label for="ans">
                                <select v-model="data.house_type" data-input="house_type" data-autofill="house_type" class="input" required>
                                    <option value="self_contain">Self Contain</option>
                                    <option value="bungalor">Bungalor</option>
                                </select>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">Type of worker?</h1>
                        <div class="input-area">
                            <label for="ans">
                                <select v-model="data.type_of_worker" data-input="type_of_worker" data-autofill="type_of_worker" class="input" required>
                                    <option value="contract">Contract</option>
                                    <option value="fulltime">Full Time</option>
                                </select>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">What gender would you prefer?</h1>
                        <div class="input-area">
                            <label for="ans">
                                <select v-model="data.gender_to_stay_with" data-input="gender_to_stay_with" class="input" required>
                                    <option value="">Please Choose</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="any">Any</option>
                                </select>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">How urgently do you need it?</h1>
                        <div class="input-area">
                            <label for="ans">
                                <select v-model="data.urgency" data-input="urgency" data-autofill="urgency" class="input" required>
                                    <option value="moderate">Moderate</option>
                                    <option value="High">High</option> 
                                </select>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">What's your budget (inclusive of agency)</h1>
                        <div class="input-area">
                            <label for="ans">
                                <select v-model="data.budget" data-input="budget" data-autofill="budget" class="input" required>
                                    <option value="500">500</option>
                                    <option value="600">600</option>
                                </select>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">Do you have your money ready?</h1>
                        <div class="input-area">
                            <label for="ans">
                                <select v-model="data.money_ready" data-input="money_ready" data-autofill="money_ready" class="input" required>
                                     <option value="8000">8000</option>
                                    <option value="10000">10000</option>
                                </select>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">Are you open to mixed living arrangements?</h1>
                        <div class="input-area">
                            <label for="ans">
                                <select v-model="data.mix_living" data-input="mix_living" class="input" data-autofill="mix_living" required>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">What’s your maximum number of house mates?</h1>
                        <div class="input-area">
                            <label for="ans">
                                <input v-model="data.house_mates" type="tel"  id="ans" class="input" data-input="house_mates" placeholder="Please specity" required/>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>

                    <section class="content-wrapper" data-starter="yes">
                        <h1 class="title">Let's provision an account for you</h1>
                        <p class="desc">In this section we would like to take your email address, preferred password, and picture photograph to better know you.</p>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Get started</a>
                    </section>

                    <section class="content-wrapper">
                        <h1 class="title">What’s your email?</h1>
                        <div class="input-area">
                            <label for="ans">
                                <input v-model="data.email" type="email" id="ans" class="input" data-input="email" placeholder="We need to contact you with it" required/>
                            </label>
                        </div>
                        <a href="javascript:void(0)" data-nav="next" class="btn">Next</a>
                    </section>-->

                   
                </div>

                <div v-else>
                    <h1>Hhjdh</h1>
                </div>

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
        finish(){
            console.log(this.data)
        }
    }
}

</script>
<style>
</style>
