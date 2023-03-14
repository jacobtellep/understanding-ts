// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//   name: 'Jake',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Jake',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person.name);
