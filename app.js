function onReady() {
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');
  const addToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault(); //prevents the page reloading by defalt

    //get the text input from user
    let title = newToDoText.value;

    toDos.push(title);

    //create a new <li>
    let newLi = document.createElement('li');
    newLi.classList.add("mdl-list__item");
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event) {
      let removeLiItem = this.parentElement.childNodes[0].textContent;
      toDoList.removeChild(this.parentElement);//this is the Li element

      toDos.forEach(function(item,index) {
        if (item === removeLiItem) {
          // remove from array
          toDos.splice(index,1);
        }
      });
    });



    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);

    toDoList.appendChild(newLi);

    newToDoText.value = '';
  });
}


window.onload = function() {
  alert('The window has loaded!');
  onReady();
};
