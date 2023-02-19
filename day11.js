//call back function

// function greet(name,callback){
//     console.log(`hello ${name}`)
//     callback();
// }
// function goodbuy(){
//     console.log(`goodbuy`)
// }
// greet('anshu',goodbuy)


//arrow function
var iseven= (elements)=>{
    // if(elements%2===0){
    //     return true;
    // }
    // return false;
    return elements %2===0;
};
// console.log(iseven(4));

// var result=[3,6,8,2].every(iseven);
var result=[4,6,8,2].every((e)=>{
    return e%2===0;
});
console.log(result);
//or

var result=[3,6,8,2].some((e)=>e%2===0);
// call back function

function greet(name,callback){
    console.log(`hello ${name}`)
    callback();
}
function goodbuy(){
    console.log(`goodbuy`)
}
greet('anshu',goodbuy)


//arrow function
var iseven= (elements)=>{
    // if(elements%2===0){
    //     return true;
    // }
    // return false;
    return elements %2===0;
};
// console.log(iseven(4));

// var result=[3,6,8,2].every(iseven);
var result=[4,6,8,2].every((e)=>{
    return e%2===0;
});
console.log(result);
//or

var result=[3,6,8,2].some((e)=>e%2===0);
console.log(result);