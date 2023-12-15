<template>
    <div class="text-left">
      <div class="w-full h-full bg-black opacity-100 cursor-pointer" @click="change(0)"></div>
      <div v-for="not in notifs" :key="not.id">
          <div class="px-5 hover:cursor-pointer hover:bg-gray-200 pt-4 pb-2" @click="change(0)">
              <p class="font-medium text-xs">{{ not.desc }}</p>
              <p class="font-normal text-xs tracking-tight opacity-50 text-right">{{ not.date }}</p>
          </div>
          <div class="h-2022 w-full bg-gray-300"></div>
      </div>
    </div>
  </template>
  
  <script>
  import { notifs } from '@/data/data';
  export default {
      props: ['change'],
      setup(props){
          return {notifs}
      }
  
  }
  </script>
  
  <style>
  
  </style>