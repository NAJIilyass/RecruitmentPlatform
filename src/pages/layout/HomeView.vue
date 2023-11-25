<template>
  <div class="home">
      <NavBar/>
      <IntroHome/>
      <ChiffresHome/>
      <PopularHome/>
  </div>
</template>

<script>
import NavBar from '@/components/componentsHome/NavBar.vue';
import IntroHome from '@/components/componentsHome/IntroHome.vue';
import ChiffresHome from '@/components/componentsHome/ChiffresHome.vue';
import PopularHome from '@/components/componentsHome/PopularHome.vue';


export default {
  name: 'HomeView',
  components: {NavBar, IntroHome, ChiffresHome, PopularHome},
  
}
</script>

