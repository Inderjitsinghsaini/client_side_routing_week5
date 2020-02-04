//create a couple of components we can request and render

let SplashComponent ={
    template:`<h1>Welcome to my super awesome app!</h1>`
}

let AppComponent = {
    template: `<h1>hello there</h1>`
}

let ErrorComponent = {
    template: `<h1>Are you out of your mind </h1>`
}

//always get the error stuff at the end

//these are some of the express routes routes.get('/', ...dosomething with the request)
const routes = [
    { path: '/' , name: 'splash', component: SplashComponent},
    { path: '/app' , name: 'app', component: AppComponent},
    { path: '*' , name: 'error', component: ErrorComponent} //always make this go at the end
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