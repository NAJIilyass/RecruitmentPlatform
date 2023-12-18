<template>
    <div class="pb-8 mt-12 grid grid-cols-10 fixed">
        <div class="font-semibold text-xl border-r-2 border-achmi-login col-span-3">
            <div>
                <label class="cursor-pointer relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 absolute left-2 top-0">
                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                    </svg>
                    <input type="text" v-model="search" class="w-full text-sm px-14 py-7 rounded-lg" placeholder="Search">
                </label>
            </div>
            <div :class="messages.length>7 ?'overflow-y-scroll max-h-screen pb-20':'h-screen'">
                <div class="h-2023 w-full bg-gray-100"></div>
                <msgCandidat v-for="msg in filtred" :key="msg.id" :msg="msg" :idSelected="id0" @click="(message=msg) && (id0=msg.id)"/>
            </div>
        </div>
        <div class="col-span-7">
        <msgBody :message="message"/>
        </div>
    </div>
</template>
  
<script>
import { messages } from '@/data/data'
import msgCandidat from './msgCandidat.vue'
import msgBody from './msgBody.vue'
import { computed, ref } from 'vue'

export default {
    components: {msgCandidat, msgBody},
    setup(){
        const id0 = ref(0)
        const search = ref('')
        const message = ref([])

        const filtred = computed(() => {
        return messages.filter((obj) => obj.name.toLowerCase().includes(search.value.toLowerCase()))
        })

        return {messages, message, id0, search, filtred}
    }
}
</script>