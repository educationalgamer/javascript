//loops

const mystate=[
    "uttar pradesh",
    "delhi",
    "assam",
    2003,
    "mp",

];


//for loop
// for (let index = 0; index < mystate.length; index++) {
//    console.log(mystate[index]);    
// }

//while loop
// let i=0;
// while (i<mystate.length) {
    
//     console.log(mystate[i]);
//     i++;
// }


//do while loop
// let i=0;
// do {
//     console.log(mystate[i]);
// i++;
// } while (i<mystate.length);

// for each loop
// mystate.forEach((n)=>console.log(n));

// for of loop
// const names=["manvi","anshu","aditi"];
// for(const n of names){
//     console.log((n));
// }

// for in loop
const symbols={
    yt:"youtube",
    ig:"instagram",
    fb:"facebook",
}
for(const n in symbols){
    // console.log(n);
    console.log(symbols[n]);
    }