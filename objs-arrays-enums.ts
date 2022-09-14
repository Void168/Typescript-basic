// const person: {
//     name: string;
//     age: number;
// } = {

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}

const person = {
  name: 'Hung',
  age: 22,
  hobbies: ['Sport', 'Coding'],
  role: Role.ADMIN,
}

// person.role.push('admin')
// person.role[1] = '10'

let favorriteActivities: string[]
favorriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
  console.log('is admin')
}
