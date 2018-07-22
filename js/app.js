function onReady() {
  let toDoId = 0;
  let toDos = [];
  const ADD_TO_DO_FORM = document.getElementById('addToDoForm');

  function createNewToDo() {
    const NEW_TO_DO_TEXT = document.getElementById('newToDoText');
    if (!NEW_TO_DO_TEXT.value) { return; }

    toDos.push({
      title: NEW_TO_DO_TEXT.value,
      complete:false,
      id: toDoId
    });

    toDoId++;

    NEW_TO_DO_TEXT.value = '';
    renderTheUi();
  }

  function renderTheUi() {
    const TO_DO_LIST = document.getElementById('toDoList');

    TO_DO_LIST.textContent = '';

    toDos.forEach(function(toDo) {
      const NEW_LI = document.createElement('li');
      const CHECKBOX = document.createElement('input');
      CHECKBOX.type = "checkbox";

      const DELETE_BTN = document.createElement('button');
      DELETE_BTN.textContent = 'x';

      //MDL Styles
      DELETE_BTN.className = 'mdl-button mdl-js-button';
      NEW_LI.className = 'mdl-list__item';

      DELETE_BTN.addEventListener('click', event => {
        toDos = toDos.filter(function(item) {
          return item.id !== toDo.id;
        })

        renderTheUi();

      })


      NEW_LI.textContent = toDo.title;

      TO_DO_LIST.appendChild(NEW_LI);
      NEW_LI.appendChild(CHECKBOX);
      NEW_LI.appendChild(DELETE_BTN);

    });
  }

  ADD_TO_DO_FORM.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  //Upgrade all the MDL elements
  componentHandler.upgradeDom();
  
  renderTheUi();
}

window.onload = function() {
  onReady();
};
