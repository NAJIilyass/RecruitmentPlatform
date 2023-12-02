<template>
    <div class="w-screen h-full relative font-montserrat">
        <sideBar class="fixed left-0" :sideOpen="sideOpen"/>
        
    </div>
  
</template>

<script>
import sideBar from '@/components/componentsCandidat/sideBar.vue'

import { ref } from 'vue'

export default {
    components: {sideBar},
    setup(){
        const sideOpen = ref(true)
        const clickSide = () => {
            sideOpen.value = !sideOpen.value
        }

        const id1 = ref(0)
        const change = (id) => {
            if(id1.value==id){
                id1.value = 0
            }else{
                id1.value = id
            } 
            console.log(id1.value)          
        }
        return {sideOpen, clickSide, id1, change}
    }
}
</script>