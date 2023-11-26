<template>
  <div class="mt-20">
    <p class="text-black font-montserrat font-semibold text-6xl tracking-wide">What's great about it?</p>
    <div class="bg-achmi-secondary h-1 w-64 mt-12 mx-auto"></div>
    <div class="flex -ml-4 mr-10 mt-8">
      <OneGreat v-for="quality in qualities1" :key="quality.id" :quality="quality"/>
    </div>
  </div>
</template>

<script>
import OneGreat from './OneGreat.vue'
import { ref } from 'vue'
import { qualities } from '@/data/data';

export default {
  components: {OneGreat},
  name: 'WhatGreat',
  setup(){
    const qualities1 = ref([]);

    qualities1.value = qualities

    return {qualities1}
  }
}

</script>