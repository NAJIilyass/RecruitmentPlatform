<template>
  <div class="relative select-none" v-if="comment">
    <p class="font-italiano text-4xl text-black w-8/12 text-left tracking-wider mx-auto mt-32 hover:scale-105 cursor-grab active:cursor-grabbing transition duration-200 ease-out">{{ comment.desc}}</p>
    <img src="../../assets/comments/ouvert.png" alt="" class="w-8 absolute top-20 left-44"> 
    <img src="../../assets/comments/ferme.png" alt="" class="w-8 absolute bottom-32 right-48">
    <div class="flex justify-center items-center mt-16">
      <img :src="comment.icon" alt="" class="w-24 h-24 rounded-full mr-6">
      <!--<img :src="comment.icon" alt="profil">-->
      <div> 
        <p class="font-montserrat text-black font-medium text-xl text-left">{{ comment.name }}</p>
        <p class="font-montserrat text-black text-xl text-left">{{ comment.job }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['comment']

}
</script>