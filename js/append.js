//console.log('append.js')
//1. where to add
const appendList = document.getElementById('append');
//console.log(appendList);
// what to be add
const h1 = document.createElement('h1');
h1.innerText= "dill";
// add the child
appendList.appendChild(h1);

// where to add
const mainContainer = document.getElementById('main-content');
//console.log(mainContainer);
// what to be add
const section = document.createElement('section')
const head = document.createElement('h1');
head.innerText = 'my food';
section.appendChild(head);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'chicken fry'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'kacchi'
ul.appendChild(li3);
// add the child
section.appendChild(ul);


// add the child
mainContainer.appendChild(section);

// set directly
const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1>hello boi</h1>
<ul>
    <li>pro</li>
    <li>bot</li>
    <li>noob</li>
</ul>

`
mainContainer.appendChild(sectionDress);
