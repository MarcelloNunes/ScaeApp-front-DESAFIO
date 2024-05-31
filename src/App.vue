<template>
  <v-app>
   
    <v-main>
      <div >
    <BarraLateral />

  </div>
  
<div>
  <router-view></router-view>
</div>
</v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
<style>
.logo img{
  max-width: 100%;

}

</style>