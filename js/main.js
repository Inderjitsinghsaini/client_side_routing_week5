//create a couple of components we can request and render
import SplashComponent from "./modules/SplashComponent.js";
import AppComponent from "./modules/AppComponent.js";
import ErrorComponent from "./modules/ErrorComponent.js";

//always get the error stuff at the end

//these are some of the express routes routes.get('/', ...dosomething with the request)


const routes = [
    { path: '/' , name: 'splash', component: SplashComponent},
    { path: '/app' , name: 'app', component: AppComponent},
    { path: '*' , name: 'error', component: ErrorComponent} //always make this go at the end+

]


const router = new VueRouter({
    routes //start for routes : routes
})

const vm = new Vue({
    data: {

    },

    methods:{

    },

    router
}).$mount("#app")