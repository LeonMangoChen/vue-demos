var vm = new Vue({
    el:'#app',
    data:{
        isActive:true,
        hasError:false,
        classObject:{
            active:true,
            'text-danger':false
        },
        error:null
    },
    computed:{
        demo:function(){
            return{
                active:this.isActive && !this.error,
                'text-danger':this.error && this.error.type === 'fatal'
            }
        }
    }
})