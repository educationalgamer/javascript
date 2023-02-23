//Object methods

var user={
    firstname:"anshu",
    lastname:"nishad",
    role:"admin",
    logincount:32,
    facebooksignedIn:true,
    courselist:[],
    buycouse:function(cousename){
        this.courselist.push(cousename);
    },
    getcousecount:function(){
        return `${this.firstname} is enrolled in  total of ${this.courselist.length} courses`
    }
};
console.log(user.firstname);
// console.log(user["facebooksignedIn"]);
console.log(user.getcousecount());
user.buycouse("react js course");
console.log(user.getcousecount());




