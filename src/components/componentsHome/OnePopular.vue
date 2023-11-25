<template>
  <div class="w-80 h-120 pt-4 pl-4 hover:scale-105 cursor-grab active:cursor-grabbing hover:shadow-inner hover:drop-shadow-2xl transition duration-200 ease-out" :style="{ backgroundImage: `url(${service.icon})` }" v-if="service">
    <p class="font-montagu text-base text-left text-white">{{ service.quote }}</p>
    <p class="font-montagu font-medium text-2xl text-left text-white">{{ service.title }}</p>
  </div>
</template>

<script>
export default {
  props: ['service']
}
</script>