//console.log("Namaste Dunia");
// let a =5;
// console.log(a);

//  a = 'abhishek';
// console.log(a);


// console.log("chaliye shuru kerte hai")
// let rectangle={
//     length: 9,breadth:10,     
 
//     draw:function(){
//         console.log('draw');
//     }
// };


// factory function
// (used to create an object) 
// function createReactangle(length,breadth){
//     let rectangle={
//         length,
//         breadth,   
     
//         draw(){
//             console.log('drawing rectangle ');
//         }
//     };
//     return rectangle;
// }

// let rectangleobj1=createReactangle(5,9); 
// let rectangleobj2=createReactangle(15,19); 
// let rectangleobj3=createReactangle(25,29); 

// ****use one of them ****

// Constructor Function
// in this we use pascal Notation 
// constructor function used prop/methods  -> initialise/define 

// function Rectangle(len,bre){
// this.length=len;
// this.breadth=bre;
// this.draw =function()
// {
//     console.log('drawing rectangle');
// }
// }
//object creation using constructor
// new keyword in javascript used to create empty Object 

// let rectangleObject= new Rectangle(9,6);

// Dynamic nature of Objects 

//  rectangleObject.color='yellow';
//  console.log(rectangleObject);
//  delete rectangleObject.color;
//  console.log(rectangleObject);


//  types in js 
// 1) primitive-> Number,string,boolean,undefined, null
// 2) reference-> functions, objects,arrays 

// itertate in object using for in loop
let rectangle={
    length:2,
    breadth:4
};
// for in loop 
for(let key in rectangle){
//    keys are reflected through key variable 
//    values are reflected through rectangle  [key] 
    console.log(key,rectangle[key]);
}

// for of loop used in only iterables ex- arrays and maps 
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }
 
// for finding object  using loop 

// if('length in rectangle')
// {
//     console.log('present');
// }
// else{
//     console.log('absent');
// }

// cloning we did by using itertation method and by assign and by using  spread oeprator
// object clone by itertaion  
// let src={
//     a:10,
//     b:20
// };
//  let dest={};

//  for(let key  in src)
//  {
//     dest[key]=src[key];
//  }
// console.log(dest);

// object clone by assign 
// let src={
//     a:10,b:20,c:30
// };
// let dest =object.assign({},src);
// console.log(dest);
// src.a++;
// console.log(dest);

//cloning  by using spread 
let src={
    a:10,b:20,c:30};
 let dest={...src};
 console.log(dest);
 src.a++;
 console.log(dest);

