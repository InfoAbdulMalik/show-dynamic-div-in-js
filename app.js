var numberOfDiv= 10;
for(i=0; i<numberOfDiv; i++){
 
    // create a div 
var div2= document.createElement('div');
    div2.className='name-div';
var imgLogo= document.createElement('img');
    imgLogo.style.width='10%'
    imgLogo.src= 'img/profile.png';
var h3= document.createElement('h3');
    h3.innerHTML='Abdul malik';

var maindiv= document.createElement('div')
    maindiv.className='main'
var img2= document.createElement('img');
     img2.src= 'img/a.jpeg';
var icondiv= document.createElement('div')
    icondiv.className='icondiv';
var icon1= document.createElement('i');
    icon1.className = "fa-regular fa-thumbs-up icon";
var para1= document.createElement('para');
    para1.className='para'
    para1.innerHTML='Like'
var icon2= document.createElement('i');
    icon2.className="fa-regular fa-comment icon";
    var para2= document.createElement('para');
    para2.className='para'
    para2.innerHTML='comment'
var icon3= document.createElement('i');
    icon3.className= "fa-solid fa-share icon";
    var para3= document.createElement('para');
    para3.className='para'
    para3.innerHTML='share';

    //  append each one on them 
var container= document.getElementById('container');
   container.appendChild(div2);
   div2.appendChild(imgLogo)
   div2.appendChild(h3);
   container.appendChild(maindiv);
   maindiv.appendChild(img2);
//    icon div append 
icondiv.appendChild(icon1)
icondiv.appendChild(icon2)
icondiv.appendChild(icon3)
icon1.appendChild(para1);
icon2.appendChild(para2);
icon3.appendChild(para3)
container.appendChild(icondiv)
}
















// console.log(window)
// console.log(window.document)
//  console.log(window.document.body)
//  console.log(window.document.body.childNodes)

// let head=document.body.childNodes[3].innerHTML='heading'
// console.log(document.body.childNodes)
// document.body.childNodes[1].innerHTML=`<p>this is para</p>`;

//  var numberOfDiv= 5;
//  for(i=0; i<numberOfDiv; i++){
//      var div= document.createElement('div');
//      var h1= document.createElement('h1');
//      h1.innerHTML='this is heading 1';
//      div.appendChild(h1);
//      document.body.appendChild(div)

    
//     }

// var numberOfDiv = 5;

// for (var i = 0; i < numberOfDiv; i++) {
//     var div = document.createElement('div');
//     var h1 = document.createElement('h1');
    
//     h1.innerHTML = 'This is heading ';
    
//     // Append h1 to div
//     div.appendChild(h1);

//     // Append div to body
//     document.body.appendChild(div);
// }