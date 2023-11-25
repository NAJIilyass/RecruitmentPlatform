<template>
  <div class="mt-28">
        <p class="text-black font-montserrat font-semibold text-6xl tracking-wide">Popular services</p>
        <div class="bg-achmi-secondary h-1 w-64 mt-12 mx-auto"></div>
        <div class="flex items-center gap-11 ml-2 mt-11">
          <img src="../../assets/left.png" alt="" class="w-20 h-20 hover:cursor-pointer hover:scale-105 transition duration-100 -mr-20 z-40" @click="passService(-1)">
          <OnePopular v-if="services1.length>1" :service="services1[currentServiceIndex%services1.length]"/>
          <OnePopular :service="services1[(currentServiceIndex+1)%services1.length]"/>
          <OnePopular :service="services1[(currentServiceIndex+2)%services1.length]"/>
          <OnePopular :service="services1[(currentServiceIndex+3)%services1.length]"/>
          <img src="../../assets/right.png" alt="" class="w-20 h-20 hover:cursor-pointer hover:scale-105 transition duration-100 -ml-20 z-40" @click="passService(1)">
        </div>
  </div>
</template>

<script>
import OnePopular from './OnePopular.vue';
import { ref } from 'vue';
import {services} from '../../data/data.js';

export default {
  components: {OnePopular},
  setup(){
    const services1 = ref([]);
    const currentServiceIndex = ref(0);
    services1.value = services;
    
    const passService = (k) => {
      if(k==1 && currentServiceIndex.value == services1.value.length-4){
        currentServiceIndex.value ++
      }
      else if(k==-1 && currentServiceIndex.value == 0){
        currentServiceIndex.value = services1.value.length-1
      }else{
        currentServiceIndex.value += k;
      }
      console.log(currentServiceIndex.value + "|" + (currentServiceIndex.value+3)%services1.value.length)
    }
    
    return {services1, currentServiceIndex, passService}

  }
} 
</script>