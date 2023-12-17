<template>
    <div class="pb-8 text-black">
      <div class="bg-achmi-primary text-white font-semibold text-xl h-16 flex justify-center mt-12">
        <p class="my-auto">Personal Information</p>
      </div>
  
  
      <div class="mx-auto mt-20 border-1.5 border-achmi-login rounded-2xl w-8/12">
        <div class="mt-10 border-b-2 pb-12 flex justify-center relative">
          <img :src="users[0].icon" alt="user" class="rounded-full w-44 h-44">
  
          <div class="ml-6 my-auto text-left">
            <p class="text-2xl font-bold tracking-wider ml-3">{{ users[0].name }}</p>
            <p class="my-4 ml-3 tracking-widest text-gray-600">{{ users[0].mail }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" w-7 h-7 mb-1 inline ml-1">
              <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
            <p class="inline">{{ users[0].local }}</p>
          </div>
  
          <div @click="profilModify=true" class="absolute right-20 top-12 border-2 inline-block rounded-full p-1 border-achmi-primary text-achmi-primary opacity-70 hover:opacity-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>         
          </div>
        </div>
  
        <div class="mt-14 text-left mx-10">
          <div class="flex text-2xl font-bold justify-between">
            <p class="w-3/6">{{ users[0].work }}</p>
            <p>${{ users[0].rate }}/hr</p>
          </div>
  
          <div v-if="desc" class="my-14 text-justify">
            <p>{{ users[0].desc.split(' ').slice(0,95).join(' ') }}...</p>
            <p @click="desc=!desc" class="text-achmi-primary font-semibold tracking-wider cursor-pointer">more</p>
          </div>
          <div v-else class="my-14 text-justify">
            <p class="">{{ users[0].desc }}</p>
            <p @click="desc=!desc" class="text-achmi-primary font-semibold tracking-wider cursor-pointer">less</p>
          </div>
  
          <div>
              <div class="flex items-center">
                <p class="text-xl font-semibold tracking-wider mb-2">Skills</p>
                <div @click="skillsModify=true" class="ml-4 mb-2 border-2 rounded-full p-1 border-achmi-primary text-achmi-primary opacity-70 hover:opacity-100 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>         
                </div>
              </div>
              
              <ul class="ml-5">
                <li v-for="skill in users[0].langu" :key="skill" class="bg-achmi-secondary rounded-full inline-block px-3 py-1 text-white font-medium mr-3 my-2">{{skill}}</li>
              </ul>
          </div>
  
          <div class="my-14">
            <div class="flex items-cente">
              <p class="text-xl font-semibold tracking-wider">Languages</p>
              <div @click="languModify=true" class="ml-4 mb-2 border-2 rounded-full p-1 border-achmi-primary text-achmi-primary opacity-70 hover:opacity-100 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>         
              </div>
            </div>
            <ul class="ml-5 mt-3 tracking-wider">
              <li v-for="k in users[0].lang.length" :key="k"><span class="font-medium">{{users[0].lang[k-1]}} -</span> <span class="text-gray-500">{{ users[0].level[k-1] }}</span></li>
            </ul>
          </div>
  
          <div>
            <p class="text-xl font-semibold tracking-wider">Resume</p>
            <div class="grid grid-rows-5 mx-auto">
              <embed :src="newCV" v-if="newCV && !resume" class="mt-10 w-[260px] h-[362px] mx-auto row-span-4">
              <button @click="resume=true" v-if="!newCV" class="bg-achmi-primary row-span-5 text-white font-semibold rounded-full w-1/6 h-11 mx-auto mt-3 mb-12">Upload</button>
              <button @click="resume=true" v-show="newCV" class="bg-achmi-primary row-span-1 text-white font-semibold rounded-full w-1/6 h-11 mx-auto mt-7 mb-6">Modify</button>
            </div>
          </div>
  
  
  
        </div>
      </div>
    </div>
  
  
    <!--Modify Profile-->
    <div v-show="profilModify" class="fixed top-12 bottom-0 bg-transparent right-4 left-64 opacity-100">
      <div class="w-full h-full bg-black opacity-0 cursor-pointer" @click="profilModify=false"></div>
      <div class="custom opacity-100 fixed right-48 left-1/4 overflow-y-auto bottom-24 top-20 bg-gray-100 drop-shadow shadow-2xl text-black rounded-3xl select-none">
        <div class="mx-24">
  
          <p class="text-4xl tracking-wider font-bold mb-24 mt-12 text-achmi-secondary">Profile Settings</p>
  
          <div class="my-12 text-left">
            <label class="text-2xl font-semibold mb-4">Upload a profile image that represents you best</label>
  
            <div class=" w-44 h-44 mx-auto">
              <label class="relative">
                <img v-if="!newIcon" :src="users[0].icon" alt="user" class="rounded-full hover:opacity-70 cursor-pointer mx-auto mt-7">
                <img v-else :src="newIcon" alt="user" class="rounded-full w-full h-full hover:opacity-70 cursor-pointer mx-auto mt-7">
                <input type="file" accept="image/*" class="hidden" @change="handleFileChange">
              </label>
            </div>
            
          </div>
  
          <div class="text-left">
            <label class="text-2xl font-semibold">Choose your display name</label>
            <p class="tracking-tighter text-gray-600 my-6">We suggest using your first name and first initial of your last name.</p>
            <input type="text" v-model="newName" class="w-full py-3 rounded-lg border-2 border-gray-400 px-10 tracking-wider text-lg">
          </div>
          
          <div class="text-left my-16">
            <label class="text-2xl font-semibold">Provide your email address</label>
            <input type="email" required v-model="newMail" class="w-full py-3 rounded-lg border-2 border-gray-400 px-10 tracking-wider text-lg mt-4">
          </div>
          
          <div class="text-left">
            <label class="text-2xl font-semibold">Share your current location or preferred location</label>
            <input type="text" v-model="newLocal" class="w-full py-3 rounded-lg border-2 border-gray-400 px-10 tracking-wider text-lg mt-4">
          </div>
  
          <div class="text-left my-16">
            <label class="text-2xl font-semibold">Specify your current job title</label>
            <input type="text" v-model="newWork" class="w-full py-3 rounded-lg border-2 border-gray-400 px-10 tracking-wider text-lg mt-4">
          </div>
  
          <div class="text-left">
            <label class="text-2xl font-semibold">Set your hourly rate for your services</label>
            <input type="number" step="0.01" v-model="newRate" class="w-full py-3 rounded-lg border-2 border-gray-400 px-10 tracking-wider text-lg mt-4">
          </div>
  
          <div class="text-left mt-16">
            <label class="text-2xl font-semibold">Customize your profile by adding a brief bio or description</label>
            <textarea v-model="newDesc" class="w-full py-3 rounded-lg border-2 border-gray-400 px-10 tracking-wider mt-4 h-44"></textarea>
          </div>
  
          <button class="my-12 px-6 py-2 text-xl border-4 hover:font-bold border-achmi-primary bg-achmi-primary text-white rounded-full hover:bg-white hover:text-black font-semibold" @click="gardeChanges">Save</button> 
        </div>
      </div>
    </div>
  
  
    <!--Modify Skills-->
    <div v-show="skillsModify" class="fixed top-12 bottom-0 bg-transparent right-4 left-64 opacity-100">
      <div class="w-full h-full bg-black opacity-0 cursor-pointer" @click="skillsModify=false"></div>
      <div class="custom opacity-100 fixed right-48 left-1/4 overflow-y-auto bottom-24 top-20 bg-gray-100 drop-shadow shadow-2xl text-black rounded-3xl select-none">
        
        <div class="mx-24">
          <p class="text-3xl font-semibold my-12 text-left">Skills</p>
  
          <input type="text" v-model="tempSkill" @keyup="addSkill" placeholder="Add skill" class="w-full py-3 rounded-lg border-2 border-gray-400 px-10 tracking-wider text-lg">
  
          <ul class="mt-10 mx-4">
            <li v-for="skill in users[0].langu" :key="skill" @click="removeSkill(skill)" class="bg-achmi-secondary cursor-pointer rounded-full inline-block text-lg px-5 py-1.5 text-white font-semibold mr-3 my-2">{{skill}}</li>
          </ul>
  
          <p class="mt-14 text-gray-500 tracking-widest font-bold italic ">*Click on a skill to remove it</p>
        </div>
  
      </div>
    </div>
  
  
  
    <!--Modify Languages-->
    <div v-show="languModify" class="fixed top-12 bottom-0 bg-transparent right-4 left-64 opacity-100 text-left">
      <div class="w-full h-full bg-black opacity-0 cursor-pointer" @click="languModify=false"></div>
      <div class="custom opacity-100 fixed right-48 left-1/4 overflow-y-auto bottom-24 top-20 bg-gray-100 drop-shadow shadow-2xl text-black rounded-3xl select-none">
        
        <div class="mx-24">
          <p class="text-3xl font-semibold my-12 text-left">Languages</p>
  
          <label class="text-2xl font-medium">Add language</label>
          <div class="grid grid-cols-2 gap-10 mt-4 relative">
            <input type="text" v-model="tempLang" placeholder="Add language" class="w-full py-3 rounded-lg border-2 border-gray-400 px-10 tracking-wider text-lg">
            <select class="w-full py-3 rounded-lg border-2 border-gray-400 px-10 tracking-wider text-lg cursor-pointer" v-model="countLang">
                <option value="" disabled selected hidden>Choose Proficiency level</option>
                <option value="Basic">Basic</option>
                <option value="Conversational">Conversational</option>
                <option value="Fluent">Fluent</option>
                <option value="Native or Bilingual">Native or Bilingual</option>
            </select>
            <button @click="saveLangu" class="absolute right-0 -bottom-24 my-6 px-6 py-1 text-lg border-4 hover:font-bold border-achmi-primary bg-achmi-primary text-white rounded-full hover:bg-white hover:text-black font-semibold">Save</button>
          </div>
   
  
  
  
          <p class="text-2xl font-medium mt-20 mb-4">Modify language</p>
  
          <div class="grid grid-cols-7 gap-20">
          
            <div class="col-span-3">
              <p class="mt-4 font-semibold">Language</p>
              <ul class="mt-3 tracking-wider">
                <li v-for="k in users[0].lang.length" :key="k" class="font-medium py-2 px-4 rounded-lg mb-6 bg-achmi-primary text-white opacity-50 select-none cursor-not-allowed">{{users[0].lang[k-1]}}</li>
              </ul>
            </div>
  
            <div class="col-span-3">
              <p class="mt-4 font-semibold">Proficiency level</p>
              <ul class="mt-3 tracking-wider">
                <li v-for="k in users[0].lang.length" :key="k">
                    <select class="font-medium py-2 px-3 w-11/12 rounded-lg mb-6 border-2 border-gray-400 cursor-pointer" v-model="users[0].level[k-1]">
                        <option value="Basic">Basic</option>
                        <option value="Conversational">Conversational</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Native or Bilingual">Native or Bilingual</option>
                    </select>
                </li>
              </ul>
            </div>
  
            <div>
              <p class="mt-4 font-semibold text-transparent">TestForTest</p>
              <li v-for="k in users[0].lang.length" :key="k" class="list-none">
                <div @click="removeLang(k-1)" :class="k==1 ? 'text-transparent border-none' : ''" class="ml-4 my-3 border-2 rounded-full p-1 border-achmi-primary text-achmi-primary opacity-70 hover:opacity-100 cursor-pointer inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </div>
              </li>
            </div>
          </div>
  
        </div>
  
      </div>
    </div>
  
  
    <!--Upload Resume-->
    <div v-show="resume" class="fixed top-12 bottom-0 bg-transparent right-4 left-64 opacity-100">
          <div class="w-full h-full bg-black opacity-0 cursor-pointer" @click="resume=false"></div>
          <div class="custom opacity-100 fixed right-48 left-1/4 overflow-y-auto bottom-24 top-20 bg-gray-100 drop-shadow shadow-2xl text-black rounded-3xl cursor-grab select-none">
            <div class="w-44 h-44 mx-auto">
                <label class="relative cursor-pointer mt-24">
                    <input type="file" accept=".pdf" class="hidden" @change="handleCV">
                    <div class="mt-12 mx-auto border-4 border-dashed border-gray-400 rounded-lg p-6 text-center hover:border-achmi-primary hover:text-achmi-primary transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-12 h-12 mx-auto mb-2 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <p class="text-sm text-gray-500">Import CV (PDF)</p>
                    </div>
                </label>
                <embed :src="newCV" v-if="newCV" class="mt-10 w-[260px] h-[362px] -mx-10">
            </div>
          </div>
    </div>
  </template>
  
  
  
  
  
  
  
  <script>
  import { users } from '@/data/data'
  import { computed, ref } from 'vue'
  import { updateUserInfos, updateUserSkills } from '@/data/data'
  
  export default {
    setup(){
      const resume = ref(false)
      const profilModify = ref(false)
      const desc = ref(true)
  
  
  
      const newName = ref(users[0].name)
      const newMail = ref(users[0].mail)
      const newLocal = ref(users[0].local)
      const newWork = ref(users[0].work)
      const newRate = ref(users[0].rate)
      const newDesc = ref(users[0].desc)
  
      const gardeChanges = () => {
        updateUserInfos(1, newName.value, newMail.value, newLocal.value, newWork.value, newRate.value, newDesc.value, newIcon.value)
        profilModify.value = false
      }
  
  
      
      const newIcon = ref()
  
      const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
          newIcon.value = URL.createObjectURL(selectedFile);
        }
      }
  
  
  
      const skillsModify = ref(false)
      const tempSkill = ref('')
  
      const addSkill = (e) => {
        if(e.key==='Enter' && tempSkill.value){
            if(!users[0].langu.includes(tempSkill.value.toUpperCase())){
              updateUserSkills(1, tempSkill.value.toUpperCase(), '', '', 1)
            }
            tempSkill.value='';
        }
      }
  
      const removeSkill = (sk) => {
        updateUserSkills(1, sk.toUpperCase(), '', '', 1)
        console.log(users[0].langu)
        tempSkill.value = ' '
        tempSkill.value = ''
  
      }
  
  
      const languModify = ref(false)
      const tempLang = ref('')
      const countLang = ref('')
  
      const saveLangu = () => {
        if(tempLang.value){
          if(!users[0].lang.includes(tempLang.value)){
              updateUserSkills(1, '', tempLang.value, countLang.value, 2)
            }
            tempLang.value='';
            countLang.value='';
        }
        console.log(users[0].lang)
        console.log(users[0].level)
      }
  
  
      const removeLang = (k) => {
        updateUserSkills(1, '', users[0].lang[k], '', 2)
        tempLang.value = ' '
        tempLang.value = ''
      }
  
      const newCV = ref("")
      const handleCV = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
          newCV.value = URL.createObjectURL(selectedFile);
        }
      }
  
      return {users, resume, desc, profilModify, newName, newMail, newLocal, newWork, newRate, newDesc, newIcon, gardeChanges, handleFileChange, skillsModify, tempSkill, addSkill, removeSkill, languModify, tempLang, countLang, saveLangu, removeLang, newCV, handleCV}
    }
  }
  </script>