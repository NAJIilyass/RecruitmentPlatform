<template>
  <nav class="relative">
    <div class="fixed top-0 w-full bg-white flex justify-between h-28 z-50">
        <div class="flex gap-24 ml-12">
            <router-link to="/">
                <img src="../../assets/Logo.png" alt="Logo" class="w-36 h-24 my-auto mt-2">
            </router-link>
            <div class="flex gap-16 my-auto">
                <router-link :to="{name: 'howitworks'}">
                    <p class="font-montserrat font-medium text-xl tracking-wider">How it works ?</p>
                </router-link>
                <router-link :to="{name: 'entreprise'}">
                    <p class="font-montserrat font-medium text-xl tracking-wider">Entreprise</p>
                </router-link>            
            </div>
        </div>
        <div class="flex my-auto mr-12 gap-8">
            <router-link :to="{name: 'login'}">
                <p class="log text-black border-achmi-primary hover:bg-achmi-primary hover:text-white ">Login</p>
            </router-link>
            <router-link :to="{name: 'signup'}">
                <p class="log bg-achmi-primary text-white border-achmi-primary hover:bg-white hover:text-black">Sign up</p>
            </router-link>        
        </div>
        <!--Ligne-->
        <div class="absolute bottom-0 bg-achmi-secondary w-full h-0.5"></div>
    </div>
  </nav>
</template>
