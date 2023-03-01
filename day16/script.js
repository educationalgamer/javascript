//setinterval and settimeout

var counter=document.querySelector('.counter');
var follower=document.querySelector('.followers');

let count=1;
setInterval(()=>{
if (count<1000) {
    count++;
    counter.innerHTML=count;
}
},1)

setTimeout(() => {
    follower.innerHTML="followers on instagram!";
}, 5000);