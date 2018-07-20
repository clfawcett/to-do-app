function onReady() {
  const ADD_TO_DO_FORM = document.getElementById('addToDoForm');
  const NEW_TO_DO_TEXT = document.getElementById('newToDoText');
  const TO_DO_LIST = document.getElementById('toDoList');


  ADD_TO_DO_FORM.addEventListener('submit', event => {
    event.preventDefault();



    let title = NEW_TO_DO_TEXT.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    let deleteButton = document.createElement('button');



    newLi.textContent = title;
    checkbox.type = "checkbox";
    deleteButton.textContent = 'x';

    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);
    TO_DO_LIST.appendChild(newLi);


    NEW_TO_DO_TEXT.value = '';


    //style deleteButton
    deleteButton.className = 'mdl-button mdl-js-button';
    //style textContent
    newLi.className = 'mdl-list__item';


    deleteButton.addEventListener('click', function(event){
      TO_DO_LIST.removeChild(this.parentElement);

    //upgrade all MDL elements
    componentHandler.upgradeDom();
    });

  });

}

window.onload = function() {
  onReady();
};
