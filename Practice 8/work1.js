function f1(text){
  T1 = "<p style='font-weight: bold; text-decoration: underline; font-style: italic;' >"+text+"</p>"
  document.write(T1);
}
// f1("sandro");

function f2(p1,p2){
  T1 = p1 + p2;
  document.write(T1);
}
// f2(1,4);

function f3(text,size){
  T1 = "<span style='font-size: "+size+"px'>"+text+"</span>"
  document.write(T1);
}
// f3("sandro", 60);

function f4(width){
  T1 = "<table style= 'width: "+width+"px' ><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>"
  
  document.write(T1)
}
// f4(400);

function f5(height){
    T1 = "<table style= 'height: "+height+"px' ><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>"
    
    document.write(T1)
}
// f5(300);

function f6(width,height){
  T1 = "<table style= 'width: "+width+"px; height: "+height+"px' ><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>"
    
  document.write(T1)
}
// f6(400,300);

function f7(backcolor){
  T1 = "<table style= 'background-color: "+color+"' ><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>"
    
  document.write(T1)
}
// f7("red");

function f8(bordeR){
  T1 = "<table style= 'border: "+bordeR+"px solid #000' ><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>"
    
  document.write(T1)
}
// f8(23);

function f9(width,height,backcolor,bordeR){
  T1 = "<table style= 'width: "+width+"px; height: "+height+"px;background-color: "+backcolor+";border: "+bordeR+"px solid #000' ><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>"
    
  document.write(T1)
}
// f9(400,300,"green",30);

function f10(width,height,backcolor,bordeR,color){
  T1 = "<table style= 'width: "+width+"px; height: "+height+"px;background-color: "+backcolor+";border: "+bordeR+"px solid #000; color: "+color+"' ><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>"
    
  document.write(T1)
}
// f10(200,200,"grey",5,"white");


function f11(){
  for(var i = 1; i < 11; i++){
    document.write(i+"</br>")
  }
}
// f11();

function f12(n){
  for(var i = 1; i < n; i++){
    document.write(i+"</br>")
  }
}
// f12(21);

function f13(m,n){
  for(var i = m; i < n; i++){
    document.write(i+"</br>")
  }
}

// f13(2,11);

function f14(m,n){
  if (m < n){
    for(var i = m; i < n; i++){
      document.write(i+"</br>")
    }
  }
  else{
    for(var i = m; i > n; i--){
      document.write(i+"</br>")
    }
  }
}

// f14(22,13);

function f15(r,c){

  y = "<td></td>";  
  multiStr2 = y.repeat(c);

  x = "<tr>"+multiStr2+"</tr>";
  multiStr1 = x.repeat(r);  

  T1 = document.getElementById("table1").innerHTML = multiStr1;
  document.write(T1);
}
// f15(4,4);
