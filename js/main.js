function addElement(){
  var ul = document.getElementById("ulDiv");
  var li = document.createElement("li");
  var item = document.getElementById('newInput');
  li.appendChild(document.createTextNode(item.value));
  ul.appendChild(li);
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    newItem();
  }
};

function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
