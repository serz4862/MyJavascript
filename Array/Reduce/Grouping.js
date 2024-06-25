const people = [
    { name1: 'Bob', age: 22 },
    { name1: 'Bob', age: 23 },
    { name1: 'Bob', age: 24 },
    { name1: 'Alice', age: 21 },
    { name1: 'Charlie', age: 21 },
    { name1: 'David', age: 22 }
];

const groupedByAge = people.reduce((accumulator, currentValue) => {
    const name = currentValue.name1;
    if (!accumulator[name]) {
        accumulator[name] = [];
    }
    accumulator[name].push(currentValue);
    return accumulator;
}, {});

console.log(groupedByAge);
// {
//     '21': [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }],
//     '22': [{ name: 'Bob', age: 22 }, { name: 'David', age: 22 }]
// }


const Person2 =[
    {name : 'Saurav', City : 'Delhi'},
    {name : 'Gaurav', City : 'NewDelhi'},
    {name : 'Ishika', City : 'Delhi'},
    {name : 'Priya', City : 'NewDelhi'},
    {name : 'KG', City : 'Chennai'},
    {name : 'Monika', City : 'Chennai'}
]


const GroupingCIty = Person2.reduce((accumulator, currentValue)=>{
    const city = currentValue.City;
    if(!accumulator[city]){
        accumulator[city] = [];
    }
    accumulator[city].push(currentValue.name)
    return accumulator
},{});

console.log(GroupingCIty)


const obj =[
    {id:1, name:'Saurav', age:22},
    {id:2, name:'Gaurav', age:23},
    {id:3, name:'Ishika', age:22},
    {id:4, name:'Rahul', age:23},
    {id:5, name:'Mohan', age:22},
    {id:6, name:'Sonal', age:23},
]

const Group = obj.reduce((accumulator, currentValue)=>{
    const age = currentValue.age;
    if(!accumulator[age]){
        accumulator[age] = []
    }
    accumulator[age].push(currentValue)
    return accumulator
},{})

console.log(Group)