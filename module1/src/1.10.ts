{
  //
  // union types 

  // type FrontendDeveloper = 'fakibaziDeveloper' | 'juniorDeveloper '
  // type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper '
  // type Developer = FrontendDeveloper | FullstackDeveloper


  // const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

  // type User = {
  //   name: string;
  //   email?: string;
  //   gender: "male" | "female";
  //   bloodGroup : "o+" | "A+" | "AB+"
  // }

  // const User1 : User = {
  //   name: 'mominul',
  //   gender: 'male',
  //   bloodGroup: 'o+'
  // } 

  type FrontendDeveloper = {
    skills : string[];
    designation1: 'Frontend Developer'
  }

  type BackendDeveloper = {
    skills : string[];
    designation2: 'Backend Developer'
  }

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

  const fullstackDeveloper : FullstackDeveloper = {
    skills : ['HTML', 'CSS', 'EXPRESS'],
    designation1: 'Frontend Developer',
    designation2: "Backend Developer"
  }


  //
}