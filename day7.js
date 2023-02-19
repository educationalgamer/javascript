//all about functions

// function sayhello(anshu) {
//   console.log("namestya");
//   console.log("hello" + anshu);
//   console.log(`hello ${anshu} how are you ?`);
// }
// // sayhello();
// sayhello("manvi");

//question
//define a function that can answer the role of a user
//a user can be on following roles
// admin- with all access
//subadmin- with access to create/delete courses
//user- consume all content

var getuser= function(user, role) {
  switch (role) {
    case "admin":
      console.log(`${user} with all access`);
      break;
    case "subadmin":
      console.log(` ${user} with access to create/delete courses`);
      break;
    case "user":
      console.log(` ${user} consume all content`);
      break;
    default:
        console.log(` ${user} invalid`);
      break;
  }
}
// getuser("anshu","admin");
console.log(getuser("anshu","user"));