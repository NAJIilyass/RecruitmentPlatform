<template>
  <div class="ml-14 mb-20">
    <div class="flex gap- items-center">
        <!--<img :src="quality.icon" :alt="quality.title">-->
        <img :src="quality.icon" :alt="quality.title" class="w-24 h-20">
        <p class="font-montserrat font-semibold text-3xl text-black tracking-wide text-left w-full ml-3">{{ quality.title }}</p>
    </div>
    <p class="font-montserrat text-black text-2xl text-left tracking-wider ml-2 mt-4">{{ quality.desc }}</p>
  </div>
</template>

<script>
export default {
    props: ['quality'],
}
</script>