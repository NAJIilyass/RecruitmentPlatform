<template>
    <div class="select-none flex items-center gap-5 text-xs text-left text-black font-light py-2 my-2 rounded-lg px-3 cursor-pointer hover:bg-gray-100" :class="idSelected==msg.id ? 'bg-gray-300 hover:bg-gray-300' : ''">
        <img :src="msg.icon" :alt="msg.name" class="w-16 h-16 rounded-full">
        <div class="flex justify-between w-full">
            <div class="w-56">
                <p class="font-semibold text-base">{{ msg.name }}</p>
                <p class="font-semibold tracking-tighter">{{ msg.job }}</p>
                <p v-if="L[2]==0" class="tracking-tight">You : {{ L[0].slice(0,14) }}...</p>
                <p v-else class="tracking-tight">{{ msg.name }} : {{ L[0].slice(0,14) }}...</p>
            </div>
            <div>
                <p>{{ msg.date }}</p>
            </div>
            
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['msg', 'idSelected'],
    setup(props){
        const L = ref(props.msg.message[props.msg.message.length-1])
        return { L }
    }
}
</script>