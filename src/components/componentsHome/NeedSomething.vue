<template>
  <div class="mt-40">
    <p class="text-black font-montserrat font-semibold text-6xl tracking-wide">Need something done?</p>
    <div class="bg-achmi-secondary h-1 w-64 mt-12 mx-auto"></div>
    <div class="flex -ml-4 mr-10 mt-8">
      <OneNeed v-for="step in steps" :key="step.id" :step="step"/>
    </div>
  </div>
</template>

<script>
import OneNeed from './OneNeed.vue'
import { ref } from 'vue'
import { steps } from '../../data/data.js'

export default {
  components: {OneNeed},
  name: 'NeedSomething',
  setup(){
    const steps1 = ref([]);
    steps1.value = steps;
    /*
    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/steps')
        if(!data.ok){
          throw Error ('No data available')
        }
        steps.value = await data.json()
      }catch(err){
        console.log(err.message)
      }
    }

    load()
    */
    return {steps}
  }
}

</script>