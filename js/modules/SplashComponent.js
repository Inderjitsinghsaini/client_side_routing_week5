export default {

    template:`<h1>{{ message }}</h1>`,

    created: function(){
        console.log('our splash components rendered');

    },

    data: function(){
        return{
            message:"Welcome to my super Awesome page"
        }
    }
}