<template>
  <div class="home">
      <NavBar/>
      <IntroHome/>
      <ChiffresHome/>
      <PopularHome/>
      <NeedSomething/>
      <WhatGreat/>
  </div>
</template>

<script>
import NavBar from '@/components/componentsHome/NavBar.vue';
import IntroHome from '@/components/componentsHome/IntroHome.vue';
import ChiffresHome from '@/components/componentsHome/ChiffresHome.vue';
import PopularHome from '@/components/componentsHome/PopularHome.vue';
import NeedSomething from '@/components/componentsHome/NeedSomething.vue';
import WhatGreat from '@/components/componentsHome/WhatGreat.vue';


export default {
  name: 'HomeView',
  components: {NavBar, IntroHome, ChiffresHome, PopularHome, NeedSomething, WhatGreat},
  
}
</script>

