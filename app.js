let firstCheck = document.createElement("i");
let secondCheck = document.createElement("i");
let node = document.createTextNode("");

function darkMode(){
  document.getElementById("panelFirst").style.background="#343A40";
  document.getElementById("panelFirst").style.color="#F8F9FA";
}

function lightMode(){
  document.getElementById("panelFirst").style.background="#F8F9FA";
  document.getElementById("panelFirst").style.color="#343A40";
}

function submitEvent(){
  let index = 0;

  if(document.getElementById("name").value.length !== 0){
  firstCheck.className = "fas fa-check-circle";
  document.getElementById("inputName").appendChild(firstCheck);
  index++;
 }else{
  firstCheck.className = "fas fa-times-circle";
  document.getElementById("inputName").appendChild(firstCheck);
 }

 if(document.getElementById("contactnumber").value.length !== 12){
    secondCheck.className = "fas fa-times-circle";
    document.getElementById("inputContact").appendChild(secondCheck);
}else{
    secondCheck.className = "fas fa-check-circle";
    document.getElementById("inputContact").appendChild(secondCheck);
    index++;
  }

  if(index !== 2){
    node.nodeValue="Error: Please check all the details before submitting.";
    document.getElementById("Output").appendChild(node)
  }else{
    node.nodeValue="You have successfully submitted your contact details.";
    document.getElementById("Output").appendChild(node)
  }
}