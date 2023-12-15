<template>
    <div class="pb-8">
      <div class="bg-achmi-primary text-white font-semibold text-xl h-16 flex justify-center mt-12">
        <p class="my-auto">Job Offers Based On Your Profile</p>
      </div>
      <div>
        <opprtCandidat v-for="company in companies" :key="company.id" :company="company"/>
      </div>
    </div>
  </template>
  
  <script>
  import { companies } from '@/data/data'
  import opprtCandidat from './opportunityCandidat.vue'
  import { ref } from 'vue'
  
  export default {
    components: {opprtCandidat},
    setup(){
      return {companies}
    }
  }
  </script>
  
  <style>
  
  </style>