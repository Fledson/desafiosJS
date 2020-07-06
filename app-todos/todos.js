var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {
    //Tudo que tiver no html sera removido
    listElement.innerHTML = ''

    for (const todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#') //criando atributo de link

        // Guarda a posicao do item do array
        var pos = todos.indexOf(todo)
            //cria o evento que sera chamado ao clicar no botao para excluir o item passando a posicao do item da lista
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        var linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }
}
renderTodos()


function addTodo() {
    var todoText = inputElement.value

    if (todoText != '') {
        todos.push(todoText)

        inputElement.value = ''
        renderTodos()
        saveToStorange()
    } else {
        alert('Digite um valor')
    }

}

buttonElement.onclick = addTodo


function deleteTodo(pos) {
    // a função splice será usada para remover o item do array na posição passada
    //o primeiro parametro é a posicão e o segundo a quantidade de itens que vão ser removidos
    todos.splice(pos, 1)
    renderTodos()
    saveToStorange()
}

function saveToStorange() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}