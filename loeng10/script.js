let inputHtml = document.querySelector('#input');
let todoListHtml = document.querySelector('#todo-list');

let newId = 1;
let todos = [
  {
    id: 0,
    text: 'Pese hambad',
    isChecked: false,
  },
];

inputHtml.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      if (inputHtml.value === '') {
        return;
      }
      console.log('vajutati enter: ' + inputHtml.value);
      todos.push({
        id: newId++,
        text: inputHtml.value,
        isChecked: false
      });
      renderTodos();
      inputHtml.value = '';
    }
});

function toggleCheck(todoId) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === todoId) {
      todos[i].isChecked = !todos[i].isChecked;
    }
  }
  renderTodos();
}

function renderTodos() {
  console.log('render todos', todos);
  todoListHtml.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    let checkedText = '';
    if (todos[i].isChecked) {
      checkedText = 'checked';
    }

    todoListHtml.innerHTML += `
      <div class="todo">
        <input type="checkbox" onclick="toggleCheck(${todos[i].id})" ${checkedText}>
        <span class="text ${checkedText}">${todos[i].text}</span>
        <span>x</span>
      </div>
    `
  }
}

renderTodos();
