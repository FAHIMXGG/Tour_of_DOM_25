console.log("hello from ")
console.log(document);

//getElementsByTagName
// const liCollection = document.getElementsByTagName('li')
// for(const li of liCollection){
//     console.log(li.innerText)
// }
//querySelector all
const listLi = document.querySelectorAll('.list li')
for(const li  of listLi){
    console.log(li.innerText);
}

document.getElementById('head').style.textAlign = 'center';

const title = document.getElementById('head')
title.setAttribute('title', 'hoga')

const sections = document.querySelectorAll('section');
//console.log(sections);
for(const section of sections){
    //console.log(section);
    section.style.border= '2px solid red';
    section.style.marginBottom= '5px';
    section.style.borderRadius= '15px';
    section.style.paddingLeft= '7px';
    section.style.backgroundColor = 'lightgray';
}
const main2nd = document.getElementById('main2')
main2nd.style.backgroundColor = 'yellow';