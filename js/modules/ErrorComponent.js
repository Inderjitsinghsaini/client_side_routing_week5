export default {

    template: `<h1>{{ message }}</h1>`,

    created: function(){
        console.log('our error components rendered');

    },

    data: function(){
        return{
            message:"are you out of your mind"
        }
    }
}