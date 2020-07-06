// Resgatando os elementos que serão usados do HTML
const inputElement = document.querySelector('#idade input[id=idade]')
const enviar = document.querySelector('#idade button[id=enviar]')

// Criando a função/promessa que vai checar a idade
function checarIdade(idade) {
    // Declarando o retorno como uma promisse e definindo a função
    return new Promise(function(resolve, reject) {
        // o setTimeout foi usado para exibir o resultado depois do tempo definido no segundo parametro
        setTimeout(() => {
            if (idade > 18) {
                return resolve(idade)
            } else {
                return reject(idade)
            }
        }, 2000)
    })
}

enviar.onclick = () => {
    idade = inputElement.value
    checarIdade(idade)
        .then(function() {
            console.log('Maior que 18')
        })
        .catch(function() {
            console.log('Menor que 18')
        })
}


// === === === === === == EXERCICIO 2 === === === === === === === === ==
//Pegando a div
const divGit = document.querySelector('#github')

//pegando o input da div
const inputUserElement = document.querySelector('#github input[name=user]')

//pegando o botão
const adicionar = document.querySelector('#github button')

//setando o evento do botão
adicionar.setAttribute('onclick', 'adicionarUsers()')

// criar lista
const lista = document.createElement('ul')

function aguardar() {
    lista.innerHTML = "";
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(textElement);
    lista.appendChild(loadingElement);
}

//criando o envendo do botão
async function adicionarUsers() {
    // pegando o valor digitado no input
    const usuario = inputUserElement.value

    await aguardar()
        //consumindo a api do gitHub
    axios.get(`https://api.github.com/users/${usuario}/repos`)
        .then((response) => {
            // chamando a função para criar a lista, passando o objeto com os repositorios
            criarlistas(response.data)
        })
        .catch((error) => {
            if (error.response.status == 404) {
                lista.innerHTML = 'usuario não existe'
            }
        })

    inputUserElement.value = ''
}

// Função que cria a lista de projetos
function criarlistas(projetos) {
    //limpa Lista
    lista.innerHTML = ''

    if (projetos.length == 0) {
        lista.innerHTML = 'Sem Usuario Encontrados'
    }

    // loop para criar os projetos da lista, importante lembrar que é uma array de objeto
    for (const projeto of projetos) {

        // criando o item da lista
        const itemLista = document.createElement('li')

        // Adicionando o nome no item, acessar o campo name dentro do objeto
        const repositorio = document.createTextNode(projeto.name)

        itemLista.appendChild(repositorio)
        lista.appendChild(itemLista)
    }


    divGit.appendChild(lista)
}