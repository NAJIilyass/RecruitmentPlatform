<template>
    <div class="h-screen bg-gray-200 pt-2" id="side-bar" :class="sideOpen == true ? 'sideBarOpened' : 'sideBarClosed'">
        <div v-show="sideOpen">
            <router-link to="/accueil"> <img src="../../assets/Logo1.png" alt="Logo" class="w-24 mx-auto"></router-link>
        </div>

        <div v-show="sideOpen" class="mt-4">
            <img src="../../assets/comments/Img2.jpg" alt="profil" class="mx-auto rounded-full w-1/3 border-2 border-red-600 p-1">
            <p class="mt-2 font-montserrat font-semibold">Jules Uniss</p>
        </div>

        <img v-show="!sideOpen" src="../../assets/comments/Img2.jpg" alt="profil" class="mx-auto rounded-full w-12 border-2 border-red-600 p-1 mt-2">

        <div class="text-left grid grid-rows-5 gap-3" :class="sideOpen == true ? 'mt-12 ml-8' : 'ml-5 mt-40'">
            <router-link to="/accueil"><div class="hover:cursor-pointer hover:text-achmi-secondary hover:font-bold" @click="selectedOption='accueil'" :class="selectedOption=='accueil' ? 'font-semibold text-achmi-secondary ml-2' : ''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline mb-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>                
                <p v-show="sideOpen" class="inline ml-3">Accueil</p>
            </div></router-link>
            <router-link to="/opportunities"><div class="hover:cursor-pointer hover:text-achmi-secondary hover:font-bold" @click="selectedOption='opportunity'" :class="selectedOption=='opportunity' ? 'font-semibold text-achmi-secondary ml-2' : ''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline mb-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <p v-show="sideOpen" class="inline ml-3">Opportunity</p>
            </div></router-link>
            <router-link to="/apps"><div class="hover:cursor-pointer hover:text-achmi-secondary hover:font-bold" @click="selectedOption='apps'" :class="selectedOption=='apps' ? 'font-semibold text-achmi-secondary ml-2' : ''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline mb-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
                <p v-show="sideOpen" class="inline ml-3">My applications</p>
            </div></router-link>
            <router-link to="/profile"><div class="hover:cursor-pointer hover:text-achmi-secondary hover:font-bold" @click="selectedOption='profile'" :class="selectedOption=='profile' ? 'font-semibold text-achmi-secondary ml-2' : ''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline mb-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <p v-show="sideOpen" class="inline ml-3">My Profile</p>
            </div></router-link>
            <router-link to="/messages"><div class="hover:cursor-pointer hover:text-achmi-secondary hover:font-bold" @click="selectedOption='messages'" :class="selectedOption=='messages' ? 'font-semibold text-achmi-secondary ml-2' : ''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline mb-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <p v-show="sideOpen" class="inline ml-3">Messages</p>
            </div></router-link>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    props: ['sideOpen'],
    setup(props){
        const selectedOption = ref('accueil')

        return {selectedOption}
    }
}
</script>

<style>
.sideBarOpened {
    width: 250px;
}

#side-bar {
    overflow: hidden;
    transition: 300ms;
}

.sideBarClosed{
    width: 70px;
}
</style>