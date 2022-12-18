1) let obj = {num:9};
let TejaAdd = function(a,b){
 return this.num+a+b;
}
 console.log(TejaAdd.call(obj,10,20))

2)let obj = {num:9};
let TejaAdd = function(a,b){
 return this.num+a+b; 
}
let tej = [5,2]
console.log(TejaAdd.apply(obj,tej));

3)let obj = {num:9};
let TejaAdd = function(a,b){
 return this.num+a+b;
}
let tejbound = TejaAdd.bind(obj);
console.log(tejbound(1,6));

4)class Student {
 static count = 0;
 constructor(age) {
  this.age = age;
  Student.count++;
 }
 static print() {
  console.log(Student.count);
 }
}
const s1 = new Student(20);
const s2 = new Student(24);
const s3 = new Student(24);
Student.print();
console.log(s1.age)

1)
/*let multiply = function (x,y){
  console.log(x * y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this,5);
multiplyByThree(5);

//or
*/
let multiply = function (x) {
    return function (y) {
      console.log(x * y);
    }
  }
  
  let multiplyByTwo = multiply(2);
  multiplyByTwo(3);
  
  let multiplyByThree = multiply(2);
  multiplyByThree(8);