const contect = {
  data() {
    return {
      Counter: 10,
      Name: " ",
      Fullname : " ",
      Corfirmed: "",
      Namess: "",
    };
  },
  watch: {
    //  Namess(Value){
    //    if(Value===''){
    //      this.Fullname = ''
    //    }
    //    else{
    //      this.Fullname = Value + '' + 'one four three'
    //    }

    //  }
  },
  computed: {
    update () {
      console.log('updated')
      if(this.Namess===''){
        return ' '
      }
      return this.Namess + '' + 'mowlid';
    }
  },
  //i will make methods inside methods we create two fucntion the first function i called add() and second fucntion i called reduce or revome
  methods: {
    add(num) {
      this.Counter = this.Counter + num;

      //or this.counter = this.counter+1;
    },
    Reduce(num) {
      this.Counter = this.Counter - num;
    },
    input(Event) {
      this.Name = Event.target.value;
    },
    SubmitForm() {
      // event.preventDefault();
      alert("your clicked the form😀😀😀");
    },
    CorfName() {
      this.Corfirmed = this.Name;
    },
    SecondInput(event) {
      this.Namess = event.target.value;
    },
    ResetButton() {
      this.Namess = '';
    },
    inputs(){
      console.log(' it is gone ')
      if(this.Namess===''){
        return ''
      }
      return this.Namess + ' ' + ' Mowlid '
    },
    
  },
};
const app = Vue.createApp(contect);
app.mount("#op");
