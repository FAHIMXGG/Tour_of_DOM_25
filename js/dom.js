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