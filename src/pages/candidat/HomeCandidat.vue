<template>
    <div class="w-screen h-full relative font-montserrat">
        <sideBar class="fixed left-0" :sideOpen="sideOpen"/>
        <div class="absolute right-0 overflow-x-hidden" :class="sideOpen==true ? 'w-[calc(100vw-250px)]' : 'w-[calc(100vw-70px)]'">
            <navBar :sideOpen="sideOpen" :clickSide="clickSide" :change="change"/>
            
            <div class="w-full h-[calc(100vh-50px)] z-0" @click="change(0)">
                <router-view></router-view>
            </div>
        </div>
    </div>
  
</template>

<script>
import sideBar from '@/components/componentsCandidat/sideBar.vue'
import navBar from '@/components/componentsCandidat/navBar.vue'

import { ref } from 'vue'

export default {
    components: {sideBar, navBar},
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