<template>
  <div class="bg-white min-h-screen">
      <div class="w-36 h-24 ml-12 mt-2">
        <router-link to="/">
            <img src="../../assets/Logo1.png" alt="Logo">
        </router-link>
      </div>

      <div class="pt-16 px-12 mx-auto mt-6 border-1.5 border-achmi-login rounded-2xl w-5/12">
        <p class="font-montserrat font-medium text-2xl text-black">Join us as a client or candidat</p>

        <div class="pt-14 flex justify-around select-none">
            <div class="border-1.5 border-achmi-login rounded-lg w-5/12 p-4 relative hover: cursor-pointer hover:scale-105 hover:shadow-inner hover:drop-shadow-xl transition duration-200 ease-out" @click="(selectRadio='candidat') && (notChoosen=false)">
                <img src="../../assets/SignUp/Img1.png" alt="Image1">
                <input type="radio" :checked="selectRadio=='candidat'" @change="candidatSelected"  class="w-6 h-6 border-achmi-login absolute right-2 top-2">
                <p class="text-black font-montserrat font-medium text-lg text-left my-2">I’m a candidat, looking for work</p>
            </div>
            
            <div class="border-1.5 border-achmi-login rounded-lg w-5/12 p-4 relative hover: cursor-pointer hover:scale-105 hover:shadow-inner hover:drop-shadow-xl transition duration-200 ease-out" @click="(selectRadio='client') && (notChoosen=false)">
                <img src="../../assets/SignUp/Img2.png" alt="Image1">
                <input type="radio" :checked="selectRadio=='client'" @change="clientSelected" class="w-6 h-6 border-achmi-login absolute right-2 top-2">
                <p class="text-black font-montserrat font-medium text-lg text-left my-2">I’m a client, hiring for a project</p>
            </div>
        </div>

        <router-link v-if="selectRadio === 'candidat'" to="/signCandidat">
          <button class="rounded-full bg-achmi-primary text-white font-montserrat text-lg font-medium mt-8 py-2.5 w-1/2 hover:scale-105 transition duration-200 ease-out" @click="send">Create Account</button>
        </router-link>

        <router-link v-else-if="selectRadio === 'client'" to="/signClient">
          <button class="rounded-full bg-achmi-primary text-white font-montserrat text-lg font-medium mt-8 py-2.5 w-1/2 hover:scale-105 transition duration-200 ease-out" @click="send">Create Account</button>
        </router-link>

        <button v-else class="rounded-full bg-achmi-primary text-white font-montserrat text-lg font-medium mt-8 py-2.5 w-1/2 hover:scale-105 transition duration-200 ease-out" @click="send">Create Account</button>


        <p v-if="notChoosen" class="font-montserrat font-semibold text-red-600 tracking-wider text-sm">Please choose a type</p>


        <p class="font-montserrat font-medium text-black tracking-wide text-sm mt-8 mb-4">Already have an account? <router-link to="/login"><span class="text-achmi-primary">Log In</span></router-link></p>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(){
        const selectRadio = ref(null)
        const notChoosen = ref(false)

        const candidatSelected = () => {
            selectRadio.value = "candidat"
        }
        const clientSelected = () => {
            selectRadio.value = "client"
        }

        const send = () => {
            if (selectRadio.value == 'candidat') {

            }else if (selectRadio.value == 'client') {

            }else{
                notChoosen.value = true
            }
        }
        return {selectRadio, candidatSelected, clientSelected, notChoosen, send}
    }
}
</script>