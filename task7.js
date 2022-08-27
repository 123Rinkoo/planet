let first=document.querySelector(".list-group");
//console.log(first.parentElement.parentElement)
// parentElement se is first ka parent jiske ander ye hai vo aa jata hai, eg: div, agar ek aur baar likha to is div ka bhi parent element aa jayega, agar top pe pahuch gye to then null aa jayega.

let first1= first.parentElement;
first1.style.background="grey";
// ...................................................

let first2= first.childNodes;
//console.log(first2);
// childNodes se child aate hain jab last tak pahuchenge to undefined aa jayega, aisa karne se node list banegi aur vo agar next line se shuru ho rha hai to ek ek index to faltu new line kaa ata hai, 
// first2[1].style.background="green"
// first2[1].style.color="white";

// ...................................................

let first3= first.firstChild;
console.log(first3)
// isse child uth ke aata hai pehla vala
let first4= first.firstElementChild;
console.log(first4);
// isse pehle child ka element uth ke aa jata hai...
first4.style.color="green";

// ...................................................
 console.log(first.lastElementChild)
 first.lastElementChild.style.background="yellow"

 // ..................................................

 console.log(first.nextElementSibling);
//  inka parent div hai lekin isme next sibling to hai nahi isliye null aayega.

// previousSibling, previousElementSibling bhi hoti hai
// ...................................................

var newelement=document.createElement('div')
console.log(newelement);

newelement.className="hihi1";
newelement.id="hihi2";

newelement.setAttribute("title", "hello bois")//isse attribute set ho jata hai, hello bois is value
// ...................................................

var newdivtext=document.createTextNode("hello");
newelement.appendChild(newdivtext);
var container= document.querySelector("header .container");
var h1=document.querySelector("header h1");

container.insertBefore(newelement, h1);

console.log(newelement);

// ...................................................
var new1=document.createElement('div');
// console.log(new1)
var item1=document.createTextNode("Hello");
// console.log(item1)
new1.appendChild(item1);
// console.log(new1);

var searchclass=document.querySelector(".list-group")
// console.log(searchclass)
var li=document.querySelector("li");
searchclass.insertBefore(new1, li)










