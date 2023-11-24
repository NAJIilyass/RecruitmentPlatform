<template>
  <div class="mx-12 pt-64">
        <!--Lorem + Image-->
        <div class="grid grid-cols-5">
          <div class="col-span-3">
            <p class="font-semibold text-6xl font-montserrat text-black mb-12 mr-80">Lorem ipsum</p>
            <p class="text-achmi-secondary font-medium font-montserrat text-3xl w-5/6 tracking-wider text-left ml-14 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</p>
            
            <!--Buttons-->
            <div class="flex gap-4 ml-16">
              <router-link to="/signClient"><div class="btn border-4 border-achmi-primary bg-achmi-primary text-white hover:bg-achmi-back hover:text-black">Hire top talents</div></router-link>
              <router-link to="/signCandidat"><div class="btn border-4 border-achmi-primary text-black hover:text-white hover:bg-achmi-primary">Apply for jobs</div></router-link>
            </div>
          </div>
          <img src="../../assets/Intro.png" alt="IntroImage" class="w-10/12 col-span-2 ml-14">
        </div>       
  </div>
</template>

<script>
export default {

}
</script>