const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);

const info = data.list;
console.log('info', info);

const list = [{
  name: info[0].name,
  age: Number(info[0].age),
  prof: info[0].prof,
},
 {
  name: info[1].name,
  age: Number(info[1].age),
  prof: info[1].prof,
}];
console.log('list', list);
