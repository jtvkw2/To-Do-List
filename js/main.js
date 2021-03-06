var idNum = 0; // Variable for increasing To-Do Elements on Page

function addElement(){ // Function that Adds Element, triggered onclick
  var ul = document.getElementById("ulDiv");
  var item = document.getElementById('newInput');
  var li = document.createElement("li");
  var button = document.createElement("button");
  var checkmark = document.createElement("button");
  checkmark.setAttribute("id",idNum.toString());
  checkmark.setAttribute("class", "fa fa-check buttonClick");
  checkmark.setAttribute("onclick", "checkElement(this.id)");
  button.setAttribute("id",idNum.toString());
  button.setAttribute("class","fa fa-trash buttonClick");
  button.setAttribute("onclick", "removeElement(this.id)");
  li.setAttribute("id",idNum.toString());
  li.setAttribute("class","entyList");
  li.appendChild(document.createTextNode(item.value));
  li.appendChild(button);
  li.appendChild(checkmark);
  ul.appendChild(li);
  item.value = "";
  idNum++;
}

function removeElement(id){ //Removes Task from list, takes one variable that is the id of element
  element = document.getElementById(id);
  element.parentNode.removeChild(element);
}

function checkElement(id){ //Marks the task completed if not already so, triggered onclick
  const element = document.getElementById(id);

  if(element.classList.contains("checked") == false){
    element.classList.add("checked");
  }else{
    element.classList.remove("checked");
  }
}
