<template>
  <div class="mt-40">
    <p class="text-black font-montserrat font-semibold text-6xl tracking-wide">What Clients Say</p>
    <div class="bg-achmi-secondary h-1 w-64 mt-12 mx-auto"></div>
    <div class="flex mx-36">
      <img src="../../assets/left.png" alt="" class="w-20 h-20 hover:cursor-pointer hover:scale-105 transition duration-100 mt-44" @click="passComment(-1)">
      <OneComment :comment="comments1[currentCommentIndex]" class="w-11/12"/>
      <img src="../../assets/right.png" alt="" class="w-20 h-20 hover:cursor-pointer hover:scale-105 transition duration-100 mt-44" @click="passComment(1)">
    </div>
  </div>
</template>

<script>
import OneComment from './OneComment.vue'
import { ref } from 'vue'
import { comments } from '@/data/data';

export default{
  components: {OneComment},
  setup(){
    const comments1 = ref([]);
    const currentCommentIndex = ref(0);
    comments1.value = comments;

    const passComment = (k) => {
      if(k==1 && currentCommentIndex.value == comments1.value.length-1){
        currentCommentIndex.value = 0
      }
      else if(k==-1 && currentCommentIndex.value == 0){
        currentCommentIndex.value = comments1.value.length-1
      }else{
        currentCommentIndex.value += k;
      }
      console.log(currentCommentIndex.value)
    }

    return {comments1, currentCommentIndex, passComment}
  }
}
</script>