<template>
    <div class="text-xs">
        <div @click="change(1)">
            <div class="mx-auto mt-4">
                <router-link to="/profile"><img :src="users[0].icon" :alt="users[0].name" class="mx-auto w-20 h-20 rounded-full cursor-pointer"></router-link> 
                <router-link to="/profile"><p class="font-semibold mt-1 text-lg cursor-pointer">{{ users[0].name }}</p></router-link> 
                <p class="opacity-50 tracking-tight -mt-1">Freelancer</p>
            </div>
            <div @click="change(0)" class="flex justify-between border-2 border-slate-400 w-52 mx-auto rounded-full tracking-wider font-medium my-4">
                <p class="px-7 py-2 rounded-full cursor-pointer" :class="id2==0 ? 'bg-achmi-secondary text-white':'text-achmi-secondary'" @click="id2=0">Online</p>
                <p class="px-6 py-2 rounded-full cursor-pointer" :class="id2==1 ? 'bg-achmi-secondary text-white':'text-achmi-secondary'" @click="id2=1">Invisible</p>
            </div>
            <div class="text-left pl-6 pr-6 mt-6 cursor-pointer hover:bg-gray-100 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mb-1 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p class="inline-block ml-3 font-medium text-sm">Settings</p>
            </div>
            <router-link to="/"><div class="text-left pl-6 my-3 cursor-pointer hover:bg-gray-100 pr-6 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mb-1 inline-block rotate-180">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                <p class="inline-block ml-3 font-medium text-sm">Log out</p>
            </div></router-link>
        </div>
    </div>

<!--
      <div v-for="msg in messages" :key="msg.id">
          <div class="p-5 rounded-lg hover:cursor-pointer hover:bg-gray-300" @click="change(0)">
              <p class="font-semibold text-sm">{{ msg.name }}</p>
              <p class="font-medium tracking-tighter">{{ msg.job }}</p>
              <p v-if="msg.message[msg.message.length-1][2]==0" class="tracking-tight">You : {{ msg.message[msg.message.length-1][0].slice(0,14) }}...</p>
              <p v-else class="tracking-tight">{{ msg.name }} : {{ msg.message[msg.message.length-1][0].slice(0,10) }}...</p>
          </div>
          <div class="h-2022 w-full bg-gray-300 my-2" v-show="messages[messages.length-1]!=msg"></div>
      </div>
      
    </div>-->
  </template>
  
  <script>
  import { users } from '@/data/data';
  import { ref } from 'vue'
  export default {
      props: ['change'],
      setup(props){
        const id2 = ref(0)

        return {users, id2}
      }
  
  }
  </script>
  
  <style>
  
  </style>