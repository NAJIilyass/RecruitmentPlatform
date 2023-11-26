<template>
    <div class="entreprise">
        <NavBar/>
        <FooterHome/>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/componentsHome/NavBar.vue';
  import FooterHome from '@/components/FooterView.vue';
  
  
  export default {
    name: 'EntrepriseVue',
    components: {NavBar, FooterHome},
    
  }
  </script>
  
  