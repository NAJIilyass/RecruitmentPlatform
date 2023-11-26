<template>
    <div class="bg-white min-h-screen">
      <div class="w-36 h-24 ml-12 mt-2">
        <router-link to="/">
            <img src="../../assets/Logo1.png" alt="Logo">
        </router-link>
      </div>

      <div class="pt-16 pb-12 px-12 mx-auto mt-6 border-1.5 border-achmi-login rounded-2xl w-1/3">
        <p class="font-montserrat font-medium text-2xl text-black">Log in to Achmitech</p>

        <div class="pt-14">
            <p class="mb-1 font-montserrat font-normal text-black text-sm text-left">Email Address</p>
            <div class="pb-2">
                <input type="email" class="rounded-md border-1.5 border-achmi-login py-3 w-full font-montserrat text-sm tracking-widest pl-10 pr-20" :class="{ 'placeholder-active': isPlaceholderActive }" v-model="inputValue" @focus="handleFocus" @blur="handleBlur">
            </div>

            <div class="relative my-10">
                <p class="absolute left-0 bottom-1 font-montserrat font-normal text-black text-sm inline-block text-left">Password</p>
                <p class="absolute right-0 bottom-1 font-montserrat font-semibold text-achmi-primary text-xs inline text-right">Forgot Password ?</p>        
            </div>
            <div class="relative">
                <input type="password" class="border-1.5 border-achmi-login inline-block rounded-md py-3 w-full font-montserrat text-sm tracking-widest pl-10 pr-5" :class="{ 'placeholder-active': isPlaceholderActiveP }" v-model="inputValueP" @focus="handleFocusP" @blur="handleBlurP">
            </div>
        </div>

        <router-link to="/HomeCandidat"><button class="rounded-full bg-achmi-primary text-white font-montserrat text-lg font-medium mt-12 py-2.5 w-full">Login</button></router-link>
        
        <div class="mt-16 mb-9">
          <div class="relative">
            <p class="absolute inset-x-0 -mt-3 z-10">Don’t have an Achmitech account?</p>
            <div class="bg-black h-2023 w-full"></div>
            <div class="h-2 -mt-1 bg-white border-none mx-auto w-8/12 absolute inset-0"></div>
          </div>
        </div>
        <router-link to="/signup">
          <button class="rounded-full bg-achmi-secondary text-white font-montserrat text-lg font-medium w-full py-2.5">Sign Up</button>
        </router-link>
        </div>
      
      <div class="bg-black w-11/12 mx-auto my-9 py-12">
        <div>
          <svg class="inline-block mr-2 bg-white rounded-full" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/></svg>
          <p class="inline-block font-serif text-sm text-white">2023 All Rights Reserved - <span class="text-achmi-secondaryy">Achmitech</span></p>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup(){
    const placeHolder = ref('e.g example@email.com')
    const placeHolderP = ref('Write your password')
    const inputValue = ref('e.g example@email.com')
    const inputValueP = ref('Write your password')


    const isPlaceholderActive = computed(() => {
      return inputValue.value === '' || inputValue.value === placeHolder.value;
    })

    const isPlaceholderActiveP = computed(() => {
      return inputValueP.value === '' || inputValueP.value === placeHolderP.value;
    })
    const handleFocus = () => {
      if(inputValue.value == placeHolder.value){
        inputValue.value = ''
      }
    }

    const handleBlur = () => {
      if(inputValue.value === ''){
        inputValue.value = placeHolder.value
      }
    }

    const handleFocusP = () => {
      if(inputValueP.value == placeHolderP.value){
        inputValueP.value = ''
      }
    }

    const handleBlurP = () => {
      if(inputValueP.value === ''){
        inputValueP.value = placeHolderP.value
      }
    }

    return {inputValue, placeHolder, handleFocus, handleBlur, isPlaceholderActive, inputValueP, placeHolderP, handleFocusP, handleBlurP, isPlaceholderActiveP}
  }
}
</script>