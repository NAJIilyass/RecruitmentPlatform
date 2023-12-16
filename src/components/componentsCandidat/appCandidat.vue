<template>
    <div class="cursor-pointer mx-auto mt-12 grid grid-cols-4 gap-2 w-11/12 bg-gray-100 text-black rounded-2xl pl-24 pr-20 py-8 select-none" @click="details=true">
        <div class="my-auto">
            <img :src="company.icon" :alt="company.name" class="w-28">
        </div>
        <div class="my-auto col-span-2">
            <p class="font-semibold text-xl">{{ company.name }}</p>
            <p class="my-5">{{ company.local }}</p>
            <p>Filed on {{ company.date }}</p>
        </div>
        <div class="my-auto">
            <div class="rounded-2xl bg-red-700 text-white px-4 py-2 mx-4" v-if="company.statut=='Rejected'">Your profile has been rejected</div>
            <div class="rounded-2xl bg-yellow-300 text-black px-4 py-2 mx-4" v-if="company.statut=='Waiting'">Your profile is currently being processed</div>
            <div class="rounded-2xl bg-green-700 text-white px-4 py-2 mx-4" v-if="company.statut=='Accepted'">Your profile has been approved</div>
        </div>
    </div>

    <div v-show="details" class="fixed top-12 bottom-0 bg-transparent right-4 left-64 opacity-100">
        <div class="w-full h-full bg-black opacity-0 cursor-pointer" @click="details=false"></div>
        <div class="custom opacity-100 fixed right-48 left-1/4 overflow-y-auto bottom-24 top-20 bg-gray-100 drop-shadow shadow-2xl text-black rounded-3xl cursor-grab select-none">
            <div>
                <img :src="company.icon" :alt="company.name" class="w-52 mb-7 mt-10 mx-auto">
            </div>
            <div class="text-left pl-10 pb-8">
                <p class="text-2xl font-bold ">{{ company.name }}</p>
                <p class="ml-24 mt-4 tracking-wider text-lg font-medium">{{ company.local }}</p>
                <p class="font-semibold mt-8 text-lg">Description :</p>
                <p class="ml-24 mt-4 mr-10 text-justify">{{ company.desc }}</p>
                <p class="font-semibold mt-8 text-lg">Required skills :</p>
                <ul class="list-disc ml-28 mt-4">
                    <li v-for="skill in company.skills" :key="skill">{{ skill }}</li>
                </ul>
                <p class="font-semibold mt-8 text-lg">Languages :</p>
                <ul class="ml-24 mt-4">
                    <li class="inline" v-for="lang in company.lang" :key="lang">{{ lang }}<span v-if="company.lang[company.lang.length-1]!=lang">&nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; &nbsp;</span></li>
                </ul>
                <p class="font-semibold mt-8 text-lg">Contract :</p>
                <p class="ml-24 mt-4">{{ company.contr }}</p>
            </div>
        </div>
    </div>
    
    
 
    
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['company'],
    setup(props){
        const details = ref(false)
        return {details}
    }
}
</script>

<style>
  .custom::-webkit-scrollbar {
    width: 0px; 
  }
</style>