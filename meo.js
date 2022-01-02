 const create = {
      data() {
          return {
              Name : '',
              attendace: [],

          }
      },
      methods: {
          Add(){
              if(this.attendace === '') {

              }
              this.attendace.push(this.Name)

 
          },
          clear(){
               this.Name =''

          },
          remove(ind){
              this.attendace.splice(ind, 1)
          }
      },

 }
 const App = Vue.createApp(create);
 App.mount('#apps');



 