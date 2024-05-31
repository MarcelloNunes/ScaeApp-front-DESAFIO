<template>
  <div>
    <v-form ref="form" v-model="valid">
      <v-text-field 
        :rules="[rules.nome]" 
        hide-details="auto" 
        label="Nome do Cliente" 
        v-model="cliente.nome">
      </v-text-field>
      <v-text-field 
        :rules="[rules.cpf]" 
        hide-details="auto" 
        label="CPF do Cliente" 
        v-model="cliente.cpf">
      </v-text-field>
      <v-text-field 
        :rules="[rules.telefone]" 
        hide-details="auto" 
        label="Telefone do Cliente" 
        v-model="cliente.telefone">
      </v-text-field>
      <v-btn 
        type="submit" 
        class="button" 
        color="warning" 
        @click="submitForm">
        <span>Cadastrar Cliente</span>
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '@/plugins/axios';

export default defineComponent({
  name: 'CadastroClientes',
  data() {
    return {
      cliente: {
        nome: '',
        cpf: '',
        telefone: ''
      },
      valid: false,
      rules: {
        nome: (value: string) => {
          const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
          if (value.length < 6 || value.length > 50) {
            return 'Nome deve ter entre 6 e 50 caracteres';
          }
          return regex.test(value) || 'Nome deve conter apenas letras e espaços';
        },
        cpf: (value: string) => {
          const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
          return regex.test(value) || 'CPF inválido. Use XXX.XXX.XXX-XX';
        },
        telefone: (value: string) => {
          const regex = /^\(\d{2}\)\s\d{4}-\d{4}$/;
          return regex.test(value) || 'Telefone inválido. Use (XX) XXXX-XXXX';
        }
      }
    };
  },
  methods: {
    async submitForm() { debugger
      if (this.$refs.form.validate()) {
        try {
          const response = await apiClient.post('/api/clientes/', this.cliente);
          console.log('Cliente cadastrado:', response.data);
        } catch (error) {
          console.error('Erro ao cadastrar cliente:', error);
        }
      } else {
        console.log('Formulário inválido');
      }
    }
  }
});
</script>

<style scoped>
.input {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

.error-message {
  color: rgb(255, 85, 85);
  margin-top: 5px;
}

.h1 {
  margin-bottom: 100px;
  padding: 8px;
  width: 100%;
}

.v-text-field {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

.v-btn {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  margin-left: 1%;
  box-sizing: border-box;
}
</style>
 