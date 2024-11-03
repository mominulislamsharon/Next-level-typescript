{
  // function with generics

  const createArray = (param : string) : string[] => {
    return [param]
  }

  const createArrayWithGeneric = <T> (param : T) : T[] => {
    return [param]
  }


  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>('Bangladesh');

  // type User = {
  //   id: number,
  //   name: string,
  // }
  const resGenericObj = createArrayWithGeneric<{id: number, name: string}>({id: 22, name: "Mr. Mominul"})



  

  // const createArray = (param : string) : string[] => {
  //   return [param]
  // }

  const createArrayWithTuple = <T, Q>(param1 : T , param2: Q) :[T,Q] => {
    return [param1 ,param2]
  }


  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const res11 = createArrayWithTuple<string, {name: string}>('Bangladesh', {name: "rasian"});

  
  const addCourseToStudent = <T> (student : T) => {
    const name = 'Next Level Web Development'
    return{
      ...student,
      course
    }
  }

  const student1 = addCourseToStudent({name: "Mr. X", email: "a@gmail.com", deveType: 'Next Level Web Developer'})

  const student2 = addCourseToStudent({name: "Mr. Y", email: "y@gmail.com", hasWatch: 'Applw Watch'})
  


  //
}