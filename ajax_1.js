const parser = new DOMParser();

const xmlString = `
  <list>
  <student1>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student1>
  <student2>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student2>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode1 = listNode.querySelector("student1");
const nameNode1 = studentNode1.querySelector("name");
const firstnameNode1 = nameNode1.querySelector("first");
const secondnameNode1 = nameNode1.querySelector("second");
const ageNode1 = studentNode1.querySelector("age");
const profNode1 = studentNode1.querySelector("prof");
const langNode1 = studentNode1.querySelector("lang");
const studentNode2 = listNode.querySelector("student2");
const nameNode2 = studentNode2.querySelector("name");
const firstnameNode2 = nameNode2.querySelector("first");
const secondnameNode2 = nameNode2.querySelector("second");
const ageNode2 = studentNode2.querySelector("age");
const profNode2 = studentNode2.querySelector("prof");
const langNode2 = studentNode2.querySelector("lang");

const langAttr1 = nameNode1.getAttribute('lang');
const langAttr2 = nameNode2.getAttribute('lang');

const list = [{
  name: firstnameNode1.textContent + ' ' + secondnameNode1.textContent,
  age: Number(ageNode1.textContent),
  prof: profNode1.textContent,
  lang: langAttr1,
},
  {
  name: firstnameNode2.textContent + ' ' + secondnameNode2.textContent,
  age: Number(ageNode2.textContent),
  prof: profNode2.textContent,
  lang: langAttr2,
}];
console.log('list', list);
