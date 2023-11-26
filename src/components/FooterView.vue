<template>
  <footer class="h-120 bg-achmi-tertiary-100 mt-28 relative">
    <div class="grid grid-cols-4 h-full mx-16">
        <div class="grid grid-rows-2 mt-9">
          <router-link to="/"><img src="../assets/Logo1.png" alt="Logo" class="w-44"></router-link> 
          <div class="text-left">
            <p class="footer">Contact</p>
            <p class="footer1">contact@email.com</p>
          </div>
        </div>    
        
        <div class="col-span-3 flex justify-evenly gap-6 items-center">
          <div class="text-left">
            <p class="footer">Navigation</p>
            <router-link to="/entreprise"><p class="footer1">About Us</p></router-link> 
            <router-link to="howitworks"><p class="footer1">How it works ?</p></router-link>
            <p class="footer1">Teams</p>
            <p class="footer1">Blog</p>
          </div>

          <div class="text-left">
            <p class="footer">Terms</p>
            <p class="footer1">Privacy Policy</p>
            <p class="footer1">Terms and conditions</p>
            <p class="footer1">Copyright Policy</p>
            <p class="footer1">Fees and Charges</p>
          </div>

          <div class="text-left w-4/12">
            <div class="-mt-14">
              <p class="footer">Stay Up To Date</p>
              <p class="footer1">Join our newsletter to stay up to date on features and releases</p>
            </div>
            <div class="border-2 border-achmi-font relative border-opacity-50 rounded-md">
              <input type="email" class=" inline-block rounded-md py-3 w-full font-montserrat tracking-widest pl-10 pr-20" :class="{ 'placeholder-active': isPlaceholderActive }" v-model="inputValue" @focus="handleFocus" @blur="handleBlur">
              <button class="inline-block text-2xl text-white bg-achmi-secondary opacity-70 rounded-lg px-5 py-0.5 absolute right-0 mr-5 mt-1.5 hover:cursor-pointer active:opacity-100">></button>
            </div>
          </div>
        </div>
    </div>
    <div class="absolute bottom-1.5 inset-x-0">
      <div class="bg-achmi-font h-2023 w-11/12 mb-2 mx-auto"></div>
      <div>
        <svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/></svg>
        <p class="inline-block font-serif text-xl">2023 All Rights Reserved - <span class="text-achmi-secondary">Achmitech</span></p>
      </div>
    </div>
    
  </footer>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup(){
    const placeHolder = ref('Your email address')
    const inputValue = ref('Your email address')

    const isPlaceholderActive = computed(() => {
      return inputValue.value === '' || inputValue.value === placeHolder.value;
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

    return {inputValue, placeHolder, handleFocus, handleBlur, isPlaceholderActive}
  }
}
</script>