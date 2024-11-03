{
 //constrains 

 const addCourseToStudent = <T extends {id: number; name: string; email: string}> (student : T) => {
  const course = 'Next Level Web Development'
  return{
    ...student,
    course,
  };
};

const student3 = addCourseToStudent({
  id: 44, 
  name: "mominul", 
  email: "w@gmail.com", 
  emni:"emni",
})

const student1 = addCourseToStudent <{
  id: number;
  name: string;
  email: string;
  devType: string;
}> ({
  id: 222,
  name: "Mr. X",
  email: "ws@gmail.com",
  devType: "nlwd",
});




const student2 = addCourseToStudent({
  id: 111,
  name: "Mr. Y", 
  email: "y@gmail.com", 
  hasWatch: 'Applw Watch'
})

 //
}