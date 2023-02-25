//this keyword

var user={
    firstname:"anshu",
    coursecount:4,
    getcouse:function () {
        console.log(this);
    }
};
user.getcouse();
console.log(user.firstname);
