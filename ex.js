//  const a = {}
//  const b = Vue.createApp(a);
//  b.mount('.application')

const ab = {
    data(){
       return {
           name : 'sakariye mawliid aadam',
           age : 19,
           email : 'sakimowlid@gmail.com',
           contact : {
               phone : 4366367,
               contact : 'some where'
           }

       }
    }
};
const cd = Vue.createApp(ab);
cd.mount('.application')