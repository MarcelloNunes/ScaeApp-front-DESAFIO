<template>
   
   <v-navigation-drawer :width="180">
    <h1 class="logo">
      <img src="../assets/logoscae.png" alt="Logo">
    </h1>
    <v-list-item></v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-item>
        <router-link to="/Cadastro-Clientes" class="v-list-item__title">Cadastro de cliente</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/Consulta-clientes" class="v-list-item__title">Consulta de cliente</router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
});
</script>

<style scoped>
aside {
    padding: 1rem;
    background: #CCCCCC;
    width: 100%;
    /* Definindo o tamanho da barra lateral */
    height: 100vh;
}


nav ul {
    list-style: none;
    padding: 0;
    color: black;
}

nav ul li {
    margin-bottom: 1rem;
}
</style>
