import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTwitter, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faUserPlus,
    faSignInAlt,
    faSignOutAlt,
    faCartShopping,
    faArrowDownWideShort,
    faTrashCan,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faCartShopping, faArrowDownWideShort, faTrashCan, faRightFromBracket, faTwitter,  faFacebook, faLinkedin, faGithub);

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')