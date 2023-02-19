//create an application with following roles:
//admin= get full access
//subadmin=gets access to create/delete courses
//testprep=gets access to create/delete test
//user=get access to consume content

var people="admin";
switch (people) {
    case "admin":
        console.log("get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
       console.log("gets access to create/delete test");
       break;
    case "user":
        console.log("get access to consume content");
        break;
    default:
        console.log("invalid user");
        break;
}












