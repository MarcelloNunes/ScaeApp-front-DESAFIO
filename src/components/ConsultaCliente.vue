<template>
    <div>
      <h1>Consulta de Clientes</h1>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Nome
            </th>
            <th class="text-left">
              CPF
            </th>
            <th class="text-left">
              Telefone
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="cliente in clientes"
            :key="cliente.id"
          >
            <td>{{ cliente.nome }}</td>
            <td>{{ cliente.cpf }}</td>
            <td>{{ cliente.telefone }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import apiClient from '@/plugins/axios';
  
  export default defineComponent({
    name: 'ConsultaClientes',
    data() {
      return {
        clientes: [] as Array<{ id: string, nome: string, cpf: string, telefone: string }>,
      };
    },
    created() {
      this.fetchClientes();
    },
    methods: {
      async fetchClientes() {
        try {
          const response = await apiClient.get('/api/clientes');
          this.clientes = response.data;
        } catch (error) {
          console.error('Erro ao buscar clientes:', error);
        }
      }
    }
  });
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  
  

  
  <style scoped>
  /* Estilos específicos para a página de consulta */
  </style>
  