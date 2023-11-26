<template>
  <div class="home">
      <NavBar/>
      <IntroHome/>
      <ChiffresHome/>
      <PopularHome/>
      <NeedSomething/>
      <WhatGreat/>
      <CommentsHome/>
  </div>
</template>

<script>
import NavBar from '@/components/componentsHome/NavBar.vue';
import IntroHome from '@/components/componentsHome/IntroHome.vue';
import ChiffresHome from '@/components/componentsHome/ChiffresHome.vue';
import PopularHome from '@/components/componentsHome/PopularHome.vue';
import NeedSomething from '@/components/componentsHome/NeedSomething.vue';
import WhatGreat from '@/components/componentsHome/WhatGreat.vue';
import CommentsHome from '@/components/componentsHome/CommentsHome.vue';


export default {
  name: 'HomeView',
  components: {NavBar, IntroHome, ChiffresHome, PopularHome, NeedSomething, WhatGreat, CommentsHome},
  
}
</script>

