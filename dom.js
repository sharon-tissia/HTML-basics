//Examine the document object//
//console.dir(document);
//console.log(document.domain);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head)
//console.log(document.body);
//console.log(document.forms);
//GETELEMENTBYID//
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//headerTitle.textContent = "hello world"
//console.log(headerTitle)
//headerTitle.innerText= 'goodbye'
//headerTitle.innerHTML = '<h3>Hello<h3>';
//headerTitle.style.borderBottom='solid 3px #000';
//GETELEMENTSBYCLASSNAME//
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello 2'
//items[1].style.fontWeight = 'bold'
//items[2].style.backgroundColor = 'red'
//for(var i = 0; i < items.length; i++){
    //items[i].style.backgroundColor = '#f4f4f4';
//}
//GETELEMENTBYTAGNAME//
//var items=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent = 'Hello 2'
//li[1].style.fontWeight = 'bold'
//li[2].style.backgroundColor = 'red'
//for(var i = 0; i < li.length; i++){
   // li[i].style.backgroundColor = '#f4f4f4'
//QUERYSELECTOR//
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';
var input = document.querySelector('input');
input.value = 'Hello World'
var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND"

