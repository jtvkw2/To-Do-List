var idNum = 0;
function addElement(){
  var ul = document.getElementById("ulDiv");
  var item = document.getElementById('newInput');
  var li = document.createElement("li");
  var button = document.createElement("button");
  var checkmark = document.createElement("button");
  checkmark.setAttribute("id",idNum.toString());
  checkmark.setAttribute("class", "fa fa-check");
  checkmark.setAttribute("onclick", "checkElement(this.id)");
  button.setAttribute("id",idNum.toString());
  button.setAttribute("class","fa fa-trash");
  button.setAttribute("onclick", "removeElement(this.id)");
  li.setAttribute("id",idNum.toString());
  li.appendChild(document.createTextNode(item.value));
  li.appendChild(button);
  li.appendChild(checkmark);
  ul.appendChild(li);
  idNum++;
}

function removeElement(id){
  element = document.getElementById(id);
  element.parentNode.removeChild(element);
}

function checkElement(id){
  const element = document.getElementById(id);

  if(element.classList.contains("checked") == false){
    element.classList.add("checked");
  }else{
    element.classList.remove("checked");
  }
}
