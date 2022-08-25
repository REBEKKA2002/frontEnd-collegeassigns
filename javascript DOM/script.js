 console.log('connected🎨');


// // objects:

// const obj={
//     name:"rebekka",
//     role:"software developer",
//     arr1:[12,87,76,98],
//     obj2:{
//         arr2:[7,98,87,65],
//         arr3:[65,87,65]
//     }
//     }


//  console.log(obj.obj2.arr2[2]);
// document.getElementById('head').innerText='javascript DOM🎭'

// const head=document.getElementsByClassName('heads')[1].innerText
// console.log(head);

const heads=document.getElementById('head')
heads.innerText='Awesme Javascript DOM'
heads.style.color='cyan'
heads.style.textAlign='center'

// create Element
const li=document.createElement('li');
li.innerHTML='<h4>CRUD operation </h4>'

const ul=document.getElementsByTagName('ul')[0];
ul.append(li)

const footer=document.createElement('h1')
footer.innerHTML='FOOTER';
footer.style.textAlign='center';
footer.style.color='red'

const body=document.body;
body.append(footer)






















