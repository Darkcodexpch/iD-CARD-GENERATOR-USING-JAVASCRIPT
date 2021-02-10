var card = document.getElementById('card');


function addtxt(){
var txt1 = document.getElementById('txt1').value;
var text = document.createTextNode("Student Id "+ " " + ":" +txt1);
var li = document.createElement('li');
li.appendChild(text);



var txt2 = document.getElementById('txt2').value;
var text2 = document.createTextNode("Student Name "+ " " + ":" +txt2);
var li2 = document.createElement('li');
li2.appendChild(text2);

var txt3 = document.getElementById('txt3').value;
var text3 = document.createTextNode("Father Name "+ " " + ":" +txt3);
var li3 = document.createElement('li');
li3.appendChild(text3);


var txt4 = document.getElementById('txt4').value;
var text4 = document.createTextNode("Class "+ " " + ":" +txt4);
var li4 = document.createElement('li');
li4.appendChild(text4);


var txt5 = document.getElementById('txt5').value;
var text5 = document.createTextNode("Emergency Call "+ " " + ":" +txt5);
var li5 = document.createElement('li');
li5.appendChild(text5);


card.appendChild(li);
card.appendChild(li2);
card.appendChild(li3);
card.appendChild(li4);
card.appendChild(li5);

}