function greet(name,callback){
    console.log(`hello ${name}`)
    callback();
}
function goodbuy(){
    console.log(`goodbuy`)
}
greet('anshu',goodbuy)