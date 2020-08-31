// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// define variables and functions used
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const displayTodoItemsCount = function() {
    let count = nodes.todoListUL.children.length || 0;


    nodes.totalItemsCount.innerHTML = count;
}
const addTodo = function() {
    // get the input text:
    const todoText = nodes.addTodoInput.value;
    console.log(todoText);

    // add todo item at the end
    // createTodoItem(todoText, nodes.todoListUL);
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${todoText}</span>
        <div class="removeTodo"><i class="far fa-trash-alt"></i></div>
    `

    nodes.todoListUL.appendChild(li);

    // clear input text
    nodes.addTodoInput.value = '';

    // focus on input for new todo:
    nodes.addTodoInput.focus();

    // update todos count:
    displayTodoItemsCount();
}
const removeTodo = function (e) {
    console.log(e.target.classList);
    console.log( e.target.parentNode.parentNode);
    if(e.target.classList.contains('fa-trash-alt') ){
        e.target.parentNode.parentNode.remove();

        // update todos count:
        displayTodoItemsCount();
    }
}

let nodes = {
    'todoListUL': document.querySelector('.todoListItems>ul'),
    'addTodoInput': document.querySelector('.addTodo>input'),
    'addTodoBtn': document.querySelector('.addTodo>.btnAdd'),
    'totalItemsCount': document.querySelector('.todoApp .total>.output')
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// attach events
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
nodes.addTodoBtn.addEventListener('click', addTodo);

nodes.addTodoBtn.addEventListener('keyup', function(e) {
    if(e.keyCode === 13){
        addTodo();
    }
});
nodes.addTodoInput.addEventListener('keyup', function(e) {
    if(e.keyCode === 13){
        addTodo();
    }
})

// to remove Todo Item:
nodes.todoListUL.addEventListener('click', removeTodo, {capture: true})

displayTodoItemsCount();