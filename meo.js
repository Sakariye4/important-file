 const counter = {
     data() {
         return{
             counter : 0
         }
     },
     mounted(){
         setInterval(() => {
             this.counter+=1;
         }, 1000);
     },
     
 }
 const Application = Vue.createApp(counter);
 Application.mount('#apps')