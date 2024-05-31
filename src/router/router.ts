import { createRouter, createWebHistory } from 'vue-router';
import CadastroClientes from '../components/CadastroCliente.vue'
import ConsultaClientes from '../components/ConsultaCliente.vue'

const routes = [
  { path: '/', redirect: '/Cadastro-clientes' },
  { path: '/Cadastro-Clientes', component: CadastroClientes, name:"cadastroClientes" },
  { path: '/Consulta-clientes', component: ConsultaClientes , name:"consultaClientes"},  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 


