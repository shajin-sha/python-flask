
function greet(){


   var text1 = parseFloat(document.getElementById('input_box1').value);

   var text = parseFloat(document.getElementById('input_box').value);

   var mm = document.getElementById("ans").innerHTML=+text+text1;

}

function mit(){

   var text1 = parseFloat(document.getElementById('input_box1').value);

   var text = parseFloat(document.getElementById('input_box').value);

   document.getElementById("ans").innerHTML=+text*text1;


}

function div(){

   var text1 = parseFloat(document.getElementById('input_box1').value);

   var text = parseFloat(document.getElementById('input_box').value);

   document.getElementById("ans").innerHTML=+text/text1;
}
function dit(){


parseFloat(document.getElementById('input_box1').value="");

parseFloat(document.getElementById('input_box').value="");

parseFloat(document.getElementById('ans').innerHTML="ans:");

}
