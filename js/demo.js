//this is an alert box
//alert("This is an alert box");
// var x = 10.3;
// var X = 20.2;
// var y = x + X;
// document.write(y);
// document.write("\n");
// var name = "John ";
// var text = "My name is \"John Smith\"";
// document.write(name + text);

// /*eval("23+20*2");

// var a = 0;
// var b = 10;

// var a = b++;
// document.write(a);10
// document.write(b);11

// var a = ++b;

// document.write(a);11
// document.write(b);11

// var a = b--;
// document.write(a);10
// document.write(b);9

// var a = --b;

// document.write(a);9
// document.write(b);9                                                         
// */

// //ternary operator
// //variable = (condition)? value1 : value2;

// age = 20;
// var isAdult = (age<18)? "too young": "old enough";
// document.write(isAdult);

// var1 = 7;
// var2 = 10;

// if(var1<var2){
//     alert("Javascript is easy to learn");
// }
// else {
//     alert("...");
// }


// var day = 2;
// switch (day){
//     case 1:
//         document.write("Monday");
//         break;
//     case 2:
//         document.write("Tuesday");
//         break;
//     case 3:
//         document.write("Wednesday");
//         break;
//     default:
//         document.write("Another day");
// }

// var x =3;
// switch (x){
//     case 1:
//         document.write(x);
//         break;
//     case 2:
//         document.write(x+2);
//         break;
//     default:
//         document.write(x+5);
// }

// for(i=1; i<=5;i++){
//     document.write(i + "<br/>");
// }

// var j = 0;
// for (;j<=7;j++){
//     document.write("<br/>" + j+1);
// }

// for (i=1, text="";i<=5;i++){
//     text=i;
//     document.write(i + "<br/>");
// }

// var x = 0;
// for (;x<=20;){
//     document.write(x + "<br/>");
//     x+=2;
// }

// var day_of_the_week = 8;
// switch(day_of_the_week){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         document.write("Working days");
//         break;
//     case 6:
//         document.write("Saturday");
//         break;
//     default:
//         document.write("Sunday"+"<br/>");
//         break;
// }

// function temp(x,y) {
//     if(x>y){
//         document.write(x+"<br/>");
//     }
//     else {
//         document.write(y+"<br/>");
//     }
// }

// temp(5,8);

// function prod(a,b){
//     var c = a*b;

//     return c;
// }
// document.write(prod(5,7)+"<br/>");

// function test(number){
//     while(number<5){
//         number++;
//     }
//     return number;
// }
// alert(test(2));


// var person = {
//     name: "John", age: 31,favColor: "White", height: 183
// };
// document.write(person.name + " is " + person.age + " years old and his favourite color is " + person.favColor + " with an height of " + person.height +"<br/>");
// document.write(person['name']+"<br/>");

// var course ={name:"Java", lesson:41};
// document.write(course.name.length +"<br/>");

function person(name,age,color,height){
    this.name = name;
    this.age = age;
    this.color = color;
    this.height = height;
}
var personOne = new person("Aola",21,"Pink",180);
var personTwo = new person("Bola",22,"Blue",181);
var personThree = new person("Cola",23,"Black",184);

document.write(personTwo.age +"<br/>");
document.write(personThree.name +"<br/>");

function person(name, age){
    this.name = name;
    this.age = age;
    this.changeName = function(name){
        this.name = name;
    }
    this.changeColor = function (color){
        this.color = color;
    }
    this.yearOfBirth = bornYear;
}
var personFour = new person("David",25);
personFour.changeName("Dola");
document.write(personFour.name + "<br/>");
personOne.changeName("Goriola");
document.write(personOne.name + "<br/>");
personTwo.changeColor("Gold");
document.write(personTwo.color + "<br/");

function bornYear(){
    return 2020 - this.age;
}
var personFive = new person("Alamu", 28);
document.write(personFive.yearOfBirth() + "<br/");

