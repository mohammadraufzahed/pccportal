import {createApp} from 'vue'
import App from './App.vue'
import Eagle from 'eagle.js'
import 'animate.css'

const AppLoader = createApp(App)

AppLoader.use(Eagle)
AppLoader.mount("#app")
