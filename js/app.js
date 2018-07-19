function onReady() {
  const ADD_TO_DO_FORM = document.getElementById('addToDoForm');
  const NEW_TO_DO_TEXT = document.getElementById('newToDoText');
  const TO_DO_LIST = document.getElementById('toDoList');


  ADD_TO_DO_FORM.addEventListener('submit', event => {
    event.preventDefault();


    // get the text
    let title = NEW_TO_DO_TEXT.value;
    //create a new <li>
    let newLi = document.createElement('li');
    //create a new input
    let checkbox = document.createElement('input');
    //create a delete button
    let deleteButton = document.createElement('button');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the <li>
    newLi.appendChild(checkbox);

    //attach the <li> to the <ul>
    TO_DO_LIST.appendChild(newLi);

    //empty the input
    NEW_TO_DO_TEXT.value = '';

    //set the button's type to button
    deleteButton.type = "button";

    //change text of button
    deleteButton.textContent = 'Delete';

    //attach the button to the <li>
    newLi.appendChild(deleteButton);

    //style deleteButton
    deleteButton.className = 'mdl-button mdl-js-button';

    //style textContent
    newLi.className = 'mdl-list__item';

    //listen for deleteButton click and delete <li>
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
