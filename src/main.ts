/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from './plugins/'
import router from './router/router';
import vuetify from './plugins/vuetify'; // importando o Vuetify configurado


// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.use(vuetify)

app.mount('#app')
