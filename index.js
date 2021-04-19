// Write your code here!
main.remove()

const newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = 'victory';

// const firstName = "Emmanuel";
newHeader.innerHTML = `Emmanuel is the champion`;


////EXAMPLES FROM "CREATING AND INSTERING DOM NODES"

// const element = document.createElement('div')
// document.body.append(element);

// const ul = document.createElement('ul');

// for (let i = 0; i < 3; i++){
//     const li = document.createElement('li');
//     li.innerHTML = (i + 1).toString();
//     ul.append(li);
// }

// element.append(ul);

// element.style.backgroundColor = '#27647B';
// element.style.fontSize = '24px';
// element.style.marginLeft = '30px';
// element.style.lineHeight = 2;

// // element.className = "dog";
// // element.className = "pet-listing dog";

// // element.classList.remove("unneeded-class");
// element.classList.add("pet-listing", "dog");

// document.querySelector('ul')[0];
// ul.removeChild(ul.querySelector('li:nth-child(2)')); 

// ul.remove()