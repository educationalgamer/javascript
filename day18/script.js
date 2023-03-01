//event listner

const red=document.querySelector(".red");
const cyan=document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");

const center=document.querySelector(".center");
const getbg=(selectedelem)=>{
    return window.getComputedStyle(selectedelem).backgroundColor;
};


// var color=getbg(pink);
// pink.addEventListener("mouseenter",()=>{
//     center.style.background=color;
// });


const magincolor=(element,color)=>{
return element.addEventListener("mouseenter",()=>{
    center.style.background=color;

});

};

magincolor(red,getbg(red));
magincolor(cyan,getbg(cyan));
magincolor(violet,getbg(violet));
magincolor(orange,getbg(orange));
magincolor(pink,getbg(pink));