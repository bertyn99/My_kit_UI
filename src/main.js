import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'

import VueCodeHighlight from 'vue-code-highlight';

const app = createApp(App);
app.use(VueCodeHighlight);
app.mount('#app')
