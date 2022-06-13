// function sandro() {
//   // document.body.style.backgroundImage=imageUrl  //changing bg image
//   document.body.style.backgroundColor = "red"; //changing bg color

//   document.getElementById("ElementId").style.backgroundImage = imageUrl;
//   document.getElementById("ElementId").style.backgroundColor = BackgroundColor;
// }

const colorSwitch = document.getElementById('input-color-switch');
colorSwitch.addEventListener("click",checkMode);


function checkMode(){
  if (colorSwitch.checked){
    console.log('dark on')
    darkModeon();
  }
  else{
    console.log('dark off')
    darkModeoff();
  }
}

function  darkModeon(){
  var bodyColorChange = document.body.style.backgroundColor = "#003c77";
  var b11 = document.getElementById("b11").style.backgroundColor = '#332e56';
  var b22 = document.getElementById("b22").style.backgroundColor = '#332e56';
  var b33 = document.getElementById("b33").style.backgroundColor = '#332e56';
  var b44 = document.getElementById("b44").style.backgroundColor = '#332e56';
  var b55 = document.getElementById("b55").style.backgroundColor = '#332e56';
  var headerColorChange = document.getElementById("he4d"). style. backgroundColor = '#332e56';
  var futColorChange = document.getElementById("fut"). style. backgroundColor = '#332e56';
  var ColorChange1 = document.getElementById("1231231").style.color = 'black';
  var ColorChange2 = document.getElementById("1231232").style.color = 'black';
  var ColorChange3 = document.getElementById("1231233").style.color = 'black';
  var ColorChange4 = document.getElementById("1231234").style.color = 'black';
  var ColorChange5 = document.getElementById("1231235").style.color = 'black';
  var ColorChange6 = document.getElementById("1231236").style.color = 'black';
  var ColorChange7 = document.getElementById("1231237").style.color = 'black';

  var post1 = document.getElementById("post1").style.backgroundColor = '#332e56';
  var post2 = document.getElementById("post2").style.backgroundColor = '#332e56';
  var post3 = document.getElementById("post3").style.backgroundColor = '#332e56';
  var post4 = document.getElementById("post4").style.backgroundColor = '#332e56';
  var post5 = document.getElementById("post5").style.backgroundColor = '#332e56';
  var D11 = document.getElementById("D11").style.backgroundColor = '#332e56';
  var D22 = document.getElementById("D22").style.backgroundColor = '#332e56';
  var D33 = document.getElementById("D33").style.backgroundColor = '#332e56';
  var D44 = document.getElementById("D44").style.backgroundColor = '#332e56';
  var D55 = document.getElementById("D55").style.backgroundColor = '#332e56';
  var D66 = document.getElementById("D66").style.backgroundColor = '#332e56';
  var D77 = document.getElementById("D77").style.backgroundColor = '#332e56';
  var D88 = document.getElementById("D88").style.backgroundColor = '#332e56';
}

function  darkModeoff(){
  var bodyColorChange = document.body.style.backgroundColor = "#edeef0";
  var b11 = document.getElementById("b11").style.backgroundColor = '#ffffff';
  var b22 = document.getElementById("b22").style.backgroundColor = '#ffffff';
  var b33 = document.getElementById("b33").style.backgroundColor = '#ffffff';
  var b44 = document.getElementById("b44").style.backgroundColor = '#ffffff';
  var b55 = document.getElementById("b55").style.backgroundColor = '#ffffff';
  var headerColorChange = document.getElementById("he4d"). style. backgroundColor = '#2b2c2d'
  var futColorChange = document.getElementById("fut"). style. backgroundColor = '#2b2c2d';
  var ColorChange = document.getElementById("1231231").style.color = 'white';
  var ColorChange2 = document.getElementById("1231232").style.color = 'white';
  var ColorChange3 = document.getElementById("1231233").style.color = 'white';
  var ColorChange4 = document.getElementById("1231234").style.color = 'white';
  var ColorChange5 = document.getElementById("1231235").style.color = 'white';
  var ColorChange6 = document.getElementById("1231236").style.color = 'white';
  var ColorChange7 = document.getElementById("1231237").style.color = 'white';
  var post1 = document.getElementById("post1").style.backgroundColor = '#ffffff';
  var post2 = document.getElementById("post2").style.backgroundColor = '#ffffff';
  var post3 = document.getElementById("post3").style.backgroundColor = '#ffffff';
  var post4 = document.getElementById("post4").style.backgroundColor = '#ffffff';
  var post5 = document.getElementById("post5").style.backgroundColor = '#ffffff';
  var D11 = document.getElementById("D11").style.backgroundColor = '#ffffff';
  var D22 = document.getElementById("D22").style.backgroundColor = '#ffffff';
  var D33 = document.getElementById("D33").style.backgroundColor = '#ffffff';
  var D44 = document.getElementById("D44").style.backgroundColor = '#ffffff';
  var D55 = document.getElementById("D55").style.backgroundColor = '#ffffff';
  var D66 = document.getElementById("D66").style.backgroundColor = '#ffffff';
  var D77 = document.getElementById("D77").style.backgroundColor = '#ffffff';
  var D88 = document.getElementById("D88").style.backgroundColor = '#ffffff';
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 6000); // Change image every 2 seconds
}


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}








