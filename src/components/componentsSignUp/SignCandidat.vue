<template>
    <div class="bg-white min-h-screen">
        <div class="w-36 h-24 ml-12 mt-2">
            <router-link to="/">
                <img src="../../assets/Logo1.png" alt="Logo">
            </router-link>
        </div>
  
        <div class="pt-16 px-12 mb-12 mx-auto mt-6 border-1.5 border-achmi-login rounded-2xl w-5/12">
            <p class="font-montserrat font-medium text-2xl text-black">Sign up to find work</p>
        
            <form class="pt-10 grid grid-rows-5 gap-5 pb-10">
                <div class="grid grid-cols-2 gap-10">
                    <input type="text" required class="rounded-md border-1.5 border-achmi-login py-3 w-full font-montserrat text-sm tracking-widest pl-10 pr-10" v-model="firstValue" placeholder="First Name">
                    <input type="text" required class="rounded-md border-1.5 border-achmi-login py-3 w-full font-montserrat text-sm tracking-widest pl-10 pr-10" v-model="lastValue" placeholder="Last Name">
                </div>
                
                <input type="email" required class="rounded-md border-1.5 border-achmi-login py-3 w-full font-montserrat text-sm tracking-widest pl-10 pr-10" v-model="mailValue" placeholder="Email">
                <input type="password" required class="rounded-md border-1.5 border-achmi-login py-3 w-full font-montserrat text-sm tracking-widest pl-10 pr-10"  v-model="passValue"  placeholder="Password (8 or more characters)">
                <input type="password" required class="rounded-md border-1.5 border-achmi-login py-3 w-full font-montserrat text-sm tracking-widest pl-10 pr-10"  v-model="verifValue" placeholder="Verify Password">
                
                <div class="rounded-md border-1.5 border-achmi-login font-montserrat text-sm tracking-widest">
                    <select id="country" required class="w-full h-full rounded-md pl-10 cursor-pointer" v-model="countValue">
                        <option v-for="country in countries" :key="country.code" :value="country.code">{{ country.name }}</option>
                    </select>
                </div>

                <div class="relative font-montserrat text-sm tracking-wide text-left text-black">
                    <input type="checkbox" required v-model="terms" class="cursor-pointer mr-4 w-5 h-5 absolute left-1">
                    <label class="ml-10">Yes, I understand and agree to the <span class="text-achmi-primary">Achmitech Privacy Policy</span></label>
                </div>
                <div class="submit">
                    <button class="rounded-full bg-achmi-primary text-white font-montserrat text-lg font-medium mt-6 py-2.5 w-full">Create my Account</button>
                </div>
            </form>
             
            <p class="font-montserrat font-medium text-black tracking-wide text-sm">Already have an account? <router-link to="/login"><span class="text-achmi-primary">Log In</span></router-link></p>
            <div class="w-full h-2022 my-7 bg-black"></div  >
            <p class="font-montserrat font-medium text-black tracking-wide text-sm mb-8">Want to sign up as client instead <router-link to="/signClient"><span class="text-achmi-primary">Sign up now !</span></router-link></p>
            
        </div>
    </div>
</template>
  
  
<script>
import {ref} from 'vue'
export default {
    setup(){
        const firstValue = ref('')
        const lastValue = ref('')
        const mailValue = ref('')
        const passValue = ref('')
        const verifValue = ref('')
        const countValue = ref('mar')
        const countries = ref([
            { code : 'us', name: 'United States of America'},
            { code : 'ca', name: 'Canada'},
            { code : 'fr', name: 'France'},
            { code : 'mar', name: 'Morocco'},
            { code : 'arg', name: 'Argentina'},
            { code : 'aus', name: 'Australia'},
            { code : 'alg', name: 'Algeria'},
            { code : 'blg', name: 'Belgium'},
            { code : 'bra', name: 'Brazil'},
            { code : 'ch', name: 'China'},
            { code : 'drk', name: 'Denmark'},
            { code : 'egy', name: 'Egypt'},
            { code : 'gre', name: 'Greece'},
            { code : 'ger', name: 'Germany'},
            { code : 'ita', name: 'Italy'},
            { code : 'ind', name: 'India'},
            { code : 'jap', name: 'Japan'},
            { code : 'qat', name: 'Qatar'},
            { code : 'por', name: 'Portugal'},
            { code : 'sen', name: 'Senegal'},
            { code : 'spa', name: 'Spain'},
            { code : 'uk', name: 'United Kingdom'}
        ])
        
        return {firstValue, lastValue, mailValue, passValue, verifValue, countValue, countries}
    }
}
</script>

<style>

</style>