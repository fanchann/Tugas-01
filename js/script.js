const todoList = [
    "Belajar JS Basic",
    "Object",
    "Belajar CSS"
];

function clearTodolist() {
    const todoListBody = document.getElementById("todoListBody");
    while (todoListBody.firstChild) {
        todoListBody.removeChild(todoListBody.firstChild);
    }
}


function removeTodoList(index) {
    todoList.splice(index, 1);
    displayTodolist()
}

function addTodoList(index, todo) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    tr.appendChild(td);

    const buttonDone = document.createElement("input");
    buttonDone.type = "button";
    buttonDone.value = "Delete";
    buttonDone.onclick = function() {
        removeTodoList(index)
    }
    td.appendChild(buttonDone)

    const tdTodo = document.createElement("td");

    tdTodo.textContent = todo



    tr.appendChild(tdTodo);

    const todoListBody = document.getElementById("todoListBody");

    todoListBody.appendChild(tr)

}


function displayTodolist() {
    clearTodolist()

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];

        const searchText = document.getElementById("search").value.toLocaleLowerCase();

        if (todo.toLocaleLowerCase().includes(searchText)) {
            addTodoList(i, todo)
        }
    }
}


document.forms['todoForm'].onsubmit = function(event) {
    event.preventDefault();

    const todo = document.forms['todoForm']['todo'].value;

    if (todo.length == 0) {
        alert("Isi tidak boleh kosong!");
        return false;
    } else {
        todoList.push(todo);
    }

    document.forms['todoForm'].reset();

    displayTodolist()
};

const search = document.getElementById("search");

search.onkeyup = function() {
    displayTodolist()
}

search.onkeydown = function() {
    displayTodolist()
}

displayTodolist()