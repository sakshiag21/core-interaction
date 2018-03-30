// CONSOLE
console.log("hello world");
// console.log("hello \n world")
console.log('');

//STRINGS
console.log('Strings -');
console.log('I want\'t a smoothie !');
console.log(':P'+':O');
console.log('');

//NUMBERS
console.log('Numbers -');
console.log(8);
console.log(8+8);
console.log(8-8);
console.log(8*8);
console.log(8/2);
console.log(8%3);
// leaves the remainder 8/3= remainder 2 (previous line)
console.log('');

//STRINGS & NUMBERS
console.log('Strings & Numbers -');
console.log('8*8');
console.log('8*8' + 8);
console.log('cheese' + 8);
console.log('I am ' + (8*8)+ ' yrs old');
console.log('8*8:', 8*8);
console.log('');

//BOOLEANS
console.log('Booleans -');
console.log(true, false);
console.log('3<4:',3<4); //COMPARISONS
console.log('3>4:',3>4);
console.log('2 <= 2', 2<=2);
console.log('2>1 && 2<12:', 2>1 && 2<12);  //&& OPERATOR
console.log('5>12 || 6<=18:', 5>12 || 6<=18); //OR OPERATOR

console.log('');

//THREE BASIC TYPES
console.log('Basic types -');
console.log(typeof 'hello',typeof (8-7), typeof (2>1));
console.log('');

//VARIABLES
console.log('Variables -');
var five=5;
console.log('five:', five);
var ten=10;
console.log('five+ten:',five+ten);
console.log('five*ten:',five*ten);
console.log('');

//ALTERING VARIABLES
console.log('Altering Variables -');
var myStudentDebt=800;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt = myStudentDebt-100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt -= 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt += 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt ++; //+1
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt --; //-1
console.log('myStudentDebt:', myStudentDebt);
console.log('');

//ARRAYS
console.log('Arrays -');
var myLuckyNumbers=[3,7,8,14,21];
console.log('myLuckyNumbers:', myLuckyNumbers);
console.log(myLuckyNumbers[1]);
console.log('');

//OBJECTS
console.log('Objects -');
// var me= {
//   name: 'Sakshi',
//   age: 19,
//   nativeNewYorker: false
// };
// console.log('me:', me);
// console.log("me['name']:", me['name']);
// console.log('me.name:', me.name)
// console.log('');

//FUNCTIONS
console.log('Functions -');

      var sayHi = function(){
        console.log('Hi')
      };
      console.log('sayhi():');
      sayHi();

          var saySomeMessage = function(cheese){
            console.log(cheese)
          };
          console.log("saySomeMessage('hello'):");
          saySomeMessage('hello');
          saySomeMessage('goodbye');

      var addNumbers = function (num1, num2){
        return num1+num2
      }
      console.log(addNumbers(8,12));







      // var me = {
      //   description: 'My name is Sakshi, I am 19 years old',
      //   name: 'My name is Sakshi',
      //   age: 'I am 19 years old',
      // };
      // function myself (me){
      // return me
      // }
      // var nativeNewYorker = 'true';
      // function nyc(nativeNewYorker){
      //   return nativeNewYorker
      // }


      var me = {
        description: 'My name is Sakshi, I am 19 years old',
        name: 'My name is Sakshi',
        age: 'I am 19 years old',
      };
      function myself (me){
      return me
      }
      var nativeNewYorker = 'true';
      function nyc(nativeNewYorker){
        return nativeNewYorker
      }



      function square(number) {
   return number * number;
}
