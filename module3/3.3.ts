{
  // type guards

  // typeof ---> type guard 

  type alphaneumeric = string | number;

  const add = (
    param1: alphaneumeric, 
    param2: alphaneumeric
  ): alphaneumeric => {
    if(typeof param1 === "number" && typeof param2 === "number"){
    return param1 + param2
  } else {
    return param1.toString() + param2.toString();
  }
};

  const result1 = add("1", "5");
  console.log(result1);

  // in guard 

  type NormalUser = {
    name : string;
  }

  type AdminUser = {
    name : string;
    role : "admin"
  }

  const getUser = (user: NormalUser | AdminUser) => {
    if('role' in user){
      console.log(`My name is ${user.name} and my role is ${user.role}`)
    } else {
      console.log(`My name is ${user.name}`)
    }
  }

  const normalUser : NormalUser = {
    name: "mister Bhai"
  }
  const adminUser : AdminUser = {
    name: "admin Bhai",
    role: "admin"
  }

  getUser(adminUser)


  //
}