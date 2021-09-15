
// const result = [1,2,3,4,5,6,7,8,9,10,11];

// // console.log(...result)

// const newArray=[...result,"hero alom"];
// console.log(newArray)

// const numbers=[10,20,30,40,50,60];

// const [first, second, third, fourth]=numbers;

// console.log(first)

// let x=10;
// x=20;
// console.log(x)

// function sum(num1) {
//     const result ="dsdsdsdsd";
// console.log(result)
// }

// sum()





//Object
//অবজেক্ট  মানে  বস্তু 
 //আমরা যদি  কোনো কিছুর  বৈশিষ্ট  দিয়ে  বুঝতে চাই  তখন  আমাদের  অবজেক্ট  তৈরী  করতে  হয়  
//আর  বৈশিষ্ট  কিন্তু    অনেক  হইতে পারে 


// const mobile={
//     id:01,
//     name:"apple",
//     price:300,
//     color:"black",
//     madeIn:"china",
//     IMEI:"1245478546",
//     friends:["hero","alom","bd"]
// }

// const friends = mobile.friends;


// for(friend of friends){
//     console.log(friend)
// }
// console.log(mobile);

// const name= mobile.name;
// const price= mobile.price;

// const {name,price}= mobile;

// console.log(name,price)







// অবজেক্ট এর প্রপার্টি / ভ্যালু  গুলা কে আমরা কিভাবে  একসেস  করবো ?

//এখানেই  আমরা চাইলে  অবজেক্ট  ডিস্ট্রাক্চারিং  ব্যবহার করবো 

// const price=mobile.price;
// console.log(price);

// const {price} = price;
// console.log(price)





// loop 

// const numbers=[1,2,3,4,5,6,7,8];
// numbers[0]

// for(let i=0; i<numbers.length; i++){
// const element = numbers[i];
// console.log(element)
// }



// const num1=5;


// if (num1 % 2 == 0) {
//     console.log("this is even")
// }
// else{
//     console.log("this is odd");
// }


// const num2 = 0;


// const result= num2>0 ? "positive":num2<0 ? "negative" :"zero"

// console.log(result)





// if(num2>0){
// console.log("positive");
// }

// else if (num2<0) {
//     console.log("negative")
// }
// else{
//     console.log("tumi akta zero")
// }





// if (num2 > 0) {
//     console.log("this is positive number")
// }
// else if(num2<0){
//     console.log("this is negative number");
// }
// else{
//     console.log("this is Zero")
// }







// arrow  =>


// function sum(num1,num2) {
//      return num1 +num2;
// }


// const sum2=(num1,num2)=>{
//     const result= "hero alom";
//     return result;
// };

// const output= sum2(15,17);
// console.log(output)



// const numbers = [{name:"hero aalom"}, 2, 4, 6, 5, 10];



// function sum(x) {
//   return x * x;
// }

// const result = numbers.map((x)=>x * x);

// console.log(result)





//Filter

// 1) filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে.
// 2) যতগুলো পাবে ততখুলো দিবে । না পাইলে খালি এরে দিবে
// 3) ফিল্টার  চেকপয়েন্ট অথবা শর্ত  সাপেক্ষে   কিছু এলিমেন্ট কে নিবে আবার কিছু এলিমেন্ট কে নিবে  না |
// const result =products.filter(pd=>pd.price!==200)
// console.log(result)








// const products = [
//     {id:1,name:"apple",price:500,color:"golden"},
//     {id:2,name:"xiaomi",price:124,color:"black"},
//     {id:3,name:"samsung",price:200,color:"black"},
//     {id:4,name:"samsung2",price:200,color:"black"},
//     {id:5,name:"lenovo",price:300,color:"pink"},
//     {id:6,name:"xiaomi",price:100,color:"pink"},
//     {id:7,name:"lenovo",price:300,color:"pink"},
// ]

// const result =products.find(pd=>pd.color=="black")
// console.log(result)





// function welcomeMessage(name, greetHandler) {
//     greetHandler(name)
// }

// function  greetMorning(name){
// console.log("good evening ", name)
// }

// welcomeMessage("hero alom",greetMorning)



























