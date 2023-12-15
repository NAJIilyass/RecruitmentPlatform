<template>
  <div class="text-left text-xs">
    <div class="w-full h-full bg-black opacity-100 cursor-pointer" @click="change(0)"></div>
    <div v-for="msg in messages" :key="msg.id">
        <router-link to="/messages"><div class="px-5 hover:cursor-pointer hover:bg-gray-200 py-7" @click="change(0)">
            <p class="font-semibold text-sm">{{ msg.name }}</p>
            <p class="font-medium tracking-tighter">{{ msg.job }}</p>
            <p v-if="msg.message[msg.message.length-1][2]==0" class="tracking-tight">You : {{ msg.message[msg.message.length-1][0].slice(0,14) }}...</p>
            <p v-else class="tracking-tight">{{ msg.name }} : {{ msg.message[msg.message.length-1][0].slice(0,10) }}...</p>
        </div></router-link>
        <div class="h-2022 w-full bg-gray-300"></div>
    </div>
    <router-link to="/messages"><div @click="change(0)" class="flex justify-center cursor-pointer hover:bg-gray-100">
      <p class="text-base font-medium my-1">See All Messages</p>
    </div></router-link>
  </div>
</template>

<script>
import { messages } from '@/data/data';
export default {
    props: ['change'],
    setup(props){
        return {messages}
    }

}
</script>

<style>

</style>