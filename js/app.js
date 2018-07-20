function onReady() {
  const TO_DOS = [];
  const ADD_TO_DO_FORM = document.getElementById('addToDoForm');

  function createNewToDo() {
    const NEW_TO_DO_TEXT = document.getElementById('newToDoText');
    if (!NEW_TO_DO_TEXT.value) { return; }

    TO_DOS.push({
      title: NEW_TO_DO_TEXT.value,
      complete: false
    });

    NEW_TO_DO_TEXT.value = '';

    renderTheUi();

  }

  function renderTheUi() {
    const TO_DO_LIST = document.getElementById('toDoList');

    TO_DO_LIST.textContent ='';

    TO_DOS.forEach(function(toDo) {

      const NEW_LI = document.createElement('li');
      const CHECKBOX = document.createElement('input');
      CHECKBOX.type = "checkbox";

      NEW_LI.textContent = toDo.title;

      TO_DO_LIST.appendChild(NEW_LI);
      NEW_LI.appendChild(CHECKBOX);
    });

  }

  ADD_TO_DO_FORM.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUi();
}

window.onload = function() {
  onReady();
};
