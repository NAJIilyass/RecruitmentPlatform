<template>
  <div class="relative h-screen">
    <div v-if="message.id>0" class="fixed top-12 w-full">
        <div class="flex items-center gap-4 px-8 mb-3">
            <img :src="message.icon" :alt="message.name" class="w-16 h-16 rounded-full">
            <div class="text-black text-left">
                <p class="text-lg font-semibold">{{ message.name }}</p>
                <p class="text-base">{{ message.job }}</p>
            </div>
        </div>
        <div class="bg-achmi-login w-full h-2022"></div>
    </div>
    
    <div id="myDiv" class="mt-20 pt-2 pb-4 h-[34.88rem] overflow-y-scroll">
        <div class="m-4 text-left" v-for="one in message.message" :key="one">
            <div class="relative text-black border-2 py-2 px-4 pr-12 w-fit rounded-b-lg" :class="one[2]==0 ? 'bg-achmi-tertiary-200 text-white rounded-tl-lg left-0' : 'bg-achmi-tertiary-100 rounded-tr-lg'">
                <div v-if="one[2]!=0" class="flex items-center mb-4">
                    <img :src="message.icon" :alt="message.name" class="w-12 h-12 rounded-full">
                    <p class="mx-3 font-semibold">{{ message.name }}</p>
                    <p class="text-sm tracking-widest">{{ one[1] }}</p>
                </div>
                <div v-else class="flex items-center mb-4">
                    <img :src="users[0].icon" :alt="users[0].name" class="w-12 h-12 rounded-full">
                    <p class="mx-3 font-semibold">You</p>
                    <p class="text-sm tracking-widest">{{ one[1] }}</p>
                </div>
                <p class="ml-3">{{ one[0] }}</p>
            </div>
        </div>
    </div>
    
    <div v-if="message.id>0" class="absolute bottom-32 w-full border-2 flex items-center">
        <textarea class="h-[5.5em] resize-none w-full py-2 px-4 text-black text-sm" v-model="MSG" @keyup.enter="updateMessage" placeholder="Taper un message"></textarea>
        <div class="p-7 cursor-pointer bg-white" @click="updateMessage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>   
        </div>
    </div>
  </div>
</template>

<script>
import { updateMessages, users } from '@/data/data';
import { ref, watch } from 'vue';

export default {
    props: ['message'],
    setup(props){
        const MSG = ref('')
        const Scrolll = ref('')

        const updateMessage = () => {
            if(MSG.value.trim().length>0){
                const date = new Date();
                updateMessages(props.message.id, MSG.value, String(date.getHours()).padStart(2, '0')+":"+String(date.getMinutes()).padStart(2, '0'), 0, String(date.getDate()).padStart(2, '0')+"/"+String(date.getMonth() + 1).padStart(2, '0')+"/"+date.getFullYear().toString().slice(2,4))
                MSG.value = ' '
                MSG.value = ''
                Scrolll.value += ' '

            }
        }

        watch(Scrolll, () => {
            let myDiv = document.getElementById("myDiv");
            Scrolll.value = ''
            var scrollHeight = myDiv.scrollHeight;
            myDiv.scrollBy(0, scrollHeight+100000);
        })

        return { MSG, updateMessage, users }
    }
}
</script>