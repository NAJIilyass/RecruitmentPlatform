<template>
    <div class="howitworks">
        <NavBar/>
        <FooterHome/>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/componentsHome/NavBar.vue';
  import FooterHome from '@/components/FooterView.vue';
  
  
  export default {
    name: 'HowItWorksVue',
    components: {NavBar, FooterHome},
    
  }
  </script>
  
  