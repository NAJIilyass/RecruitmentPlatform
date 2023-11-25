<template>
  <div class="home">
      <NavBar/>
      <IntroHome/>
      <ChiffresHome/>
  </div>
</template>

<script>
import NavBar from '@/components/componentsHome/NavBar.vue';
import IntroHome from '@/components/componentsHome/IntroHome.vue';
import ChiffresHome from '@/components/componentsHome/ChiffresHome.vue';


export default {
  name: 'HomeView',
  components: {NavBar, IntroHome, ChiffresHome},
  
}
</script>

