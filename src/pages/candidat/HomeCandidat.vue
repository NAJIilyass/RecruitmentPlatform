<template>
    <div class="w-screen h-full relative font-montserrat">
        <sideBar class="fixed left-0" :sideOpen="sideOpen"/>
        <div class="absolute right-0 overflow-x-hidden" :class="sideOpen==true ? 'w-[calc(100vw-250px)]' : 'w-[calc(100vw-70px)]'">
            <navBar :sideOpen="sideOpen" :clickSide="clickSide" :change="change"/>
            <div v-show="id1!=0" class="z-50 select-none">
                <div v-show="id1==3" class="bg-white rounded-b-lg rounded-tl-lg drop-shadow-lg w-80 fixed opacity-100 right-16 mr-4 top-10">
                    <messageMenu :change="change"/>
                </div>
                <div v-show="id1==2" class="bg-white rounded-b-lg rounded-tl-lg drop-shadow-lg w-80 fixed right-7 mr-1 top-10">
                    <notifsMenu :change="change" />
                </div>
                <div v-show="id1==1" class="bg-white rounded-b-lg rounded-tl-lg drop-shadow-lg w-64 fixed right-0 mr-1 top-10">
                    <profileMenu :change="change" />
                </div>
            </div>
            <div class="w-full h-[calc(100vh-50px)] z-0" @click="change(0)">
                <router-view></router-view>
            </div>
        </div>
    </div>
  
</template>

<script>
import sideBar from '@/components/componentsCandidat/sideBar.vue'
import navBar from '@/components/componentsCandidat/navBar.vue'
import profileMenu from '@/components/componentsCandidat/menuNavBar.vue/profileMenu.vue'
import notifsMenu from '@/components/componentsCandidat/menuNavBar.vue/notifsMenu.vue'
import messageMenu from '@/components/componentsCandidat/menuNavBar.vue/messageMenu.vue'
import { ref } from 'vue'

export default {
    components: {sideBar, navBar, profileMenu, notifsMenu, messageMenu},
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