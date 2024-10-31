{

// destructuring

const user = {
  id: 244,
  name: {
    firstName: 'Mominul',
    middleName: 'Islam',
    lastName: 'Sharon',
  },
  contactNo: '017254681',
  address: 'Bangladesh'
};

const {
  contactNo, 
  name: {middleName},
} = user;

// array destructuring
const myFriend = ['rakib', 'ashik', 'joy', 'abraham'];
const [,, bestFriend, ...rest] = myFriend;
}