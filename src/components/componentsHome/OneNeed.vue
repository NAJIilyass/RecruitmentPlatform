<template>
  <div class="ml-14 mb-20">
    <div id="Ye" class="flex gap- items-center">
        <!--<img :src="step.icon" :alt="step.title">-->
        <img :src="step.icon" :alt="step.title">
        <p class="font-montserrat font-semibold text-3xl text-black tracking-wide text-left w-full">{{ step.title }}</p>
    </div>
    <p class="font-montserrat text-black text-2xl text-left tracking-wider ml-5">{{ step.desc }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    props: ['step'],
}
</script>
