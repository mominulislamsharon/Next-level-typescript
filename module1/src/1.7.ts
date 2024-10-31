{

// learn spread operator 

const bros1: string[] = [
  'mr. mominul',
  "islam", 
  "sharon"
]
const bros2: string[] = ['tamim', 'Nahid', 'ekbal']
bros1.push(...bros2)

const mentros1 = {
  typescript : 'Mezba',
  redux: 'Mir',
  dbms: 'Mizan'
}

const mentros2 = {
  prisma: 'Firoz',
  nextjs: 'Tanmoy',
  cloud: 'nahid'
}

const mentrosList = {
  ...mentros1,
  ...mentros2
}

// learn rest operator

const greatFriends = (...friends: string[]) => {
  // console.log(`hi ${friend1} ${friend2} ${friend3}`);

  friends.forEach((friend: String)=> console.log(`hi${friend}`))
};

greatFriends('Babul', 'kabul', 'abul', 'abdal', 'babol')
}