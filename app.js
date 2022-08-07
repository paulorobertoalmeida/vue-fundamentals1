const vm = Vue.createApp({
    data(){
        return{
            firstName: 'Paulo',
            middleName: "",
            lastName:'Almeida',
            url: 'http://www.example.com',
            age: 35
        }
    },
    methods:{
       increment(){
            this.age++
        },
        updateLastName(msg, event){
            //console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    },
    computed:{
        fullName(){
            console.log('Full name computed method was called')
            
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        }
    },
    watch:{
        age(newVal, oldVal){
            setTimeout(() => {
                this.age = 20;
            }, 4000)
        }
    }
}).mount('#app')

// setTimeout(() =>{
//     vm.firstName = 'Gabriel'
// }, 5000)