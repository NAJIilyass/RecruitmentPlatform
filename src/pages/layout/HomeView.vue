<template>
  <div class="home">
      <NavBar/>
      <IntroHome/>
  </div>
</template>

<script>
import NavBar from '@/components/componentsHome/NavBar.vue';
import IntroHome from '@/components/componentsHome/IntroHome.vue';


export default {
  name: 'HomeView',
  components: {NavBar, IntroHome},
  
}
</script>

