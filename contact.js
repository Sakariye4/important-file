const test = {
    data() {
        return {
            freinds : [
                {
                    Name : 'Sakariye mowlid ',
                    Phone : '32828',
                    Email : 'sakimowlid@gmail.com'
                }
            ]
        }

    },
} 
const app = Vue.createApp(test)
app.mount('#app')
