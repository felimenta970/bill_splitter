let numPessoas = 1;
let numItens = 1;
let pessoas = [];
let itens = [];

function adicionaPessoa() {


    let pessoa = {
        nome: document.getElementById('nome' + numPessoas).value,
        conta: 0,
    };

    pessoas.push(pessoa);

    listaNomesDiv();
    listaNomesGorjeta();

    numPessoas++;


}

function novaPessoa () {
    let divGeral = document.querySelector('#novasPessoas');
    let input = document.createElement('input');

    input.setAttribute('type', 'text');
    input.setAttribute('id', 'nome' + numPessoas);

    let button = document.createElement('button');

    button.setAttribute('id', 'novaPessoa');
    button.setAttribute('onclick', 'adicionaPessoa()');
    let br = document.createElement('br');
    button.innerHTML = "Adicionar";

    divGeral.appendChild(input);
    divGeral.appendChild(button);
    divGeral.appendChild(br);
}

function novoItem () {
    let divGeral = document.querySelector('#novosItens');
    let inputItem = document.createElement('input');
    let inputPreco = document.createElement('input');

    inputItem.setAttribute('type', 'text');
    inputItem.setAttribute('id', 'item' + numItens);

    inputPreco.setAttribute('type', 'number');
    inputPreco.setAttribute('preco', 'preco' + numItens)

    let button = document.createElement('button');

    button.setAttribute('id', 'novoItem');
    button.setAttribute('onclick', 'adicionarItem()');
    let br = document.createElement('br');
    button.innerHTML = "Adicionar";

    divGeral.appendChild(inputItem);
    divGeral.appendChild(inputPreco);
    divGeral.appendChild(button);
    divGeral.appendChild(br);
}

function listaNomesDiv() {

    let div = document.getElementById('nomesParaItens');
    let aux = numPessoas - 1;
    br = document.createElement('br');

    let checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.name = 'nome' + aux;
    checkbox.value = pessoas[numPessoas-1].nome;
    checkbox.id = 'nome' + aux;

    let label = document.createElement('label');
    label.htmlFor = 'nome' + aux;
    label.appendChild(document.createTextNode(pessoas[numPessoas-1].nome));

    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(br);
}

function listaNomesGorjeta() {
    let div = document.getElementById('nomesParaGorjeta');
    let aux = numPessoas - 1;
    br = document.createElement('br');

    let checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.name = 'nome' + aux;
    checkbox.value = pessoas[numPessoas-1].nome;
    checkbox.classList.add('gorjeta');

    let label = document.createElement('label');
    label.htmlFor = 'nome' + aux;
    label.appendChild(document.createTextNode(pessoas[numPessoas-1].nome));

    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(br);
}

function adicionarItem() {
    
    let cont = 0;

    let item = {
        nome: document.getElementById('item' + numItens).value,
        valor: document.getElementById('preco' + numItens).value
    }

    let nomes = [];

    itens.push(item);


    $('input[type=checkbox').each(function() {
        if (this.checked) {
            cont++;
            nomes.push(this.value);
        }
    });

    let valorInd = item.valor/cont;

    for (let i = 0; i < nomes.length; i++) {
        for (let j = 0; j < pessoas.length; j++) {
            if (nomes[i] === pessoas[j].nome) {
                pessoas[j].conta += valorInd;
            }
        }
    }
}

function adicionaGorjeta() {

    let cont = 0;

    let nomes = [];

    $('.gorjeta').each(function() {
        if (this.checked) {
            cont++;
            nomes.push(this.value);
        }
    });

    for (let i = 0; i < nomes.length; i++) {
        for (let j = 0; j < pessoas.length; j++) {
            if (nomes[i] === pessoas[j].nome) {
                pessoas[j].conta = pessoas[j].conta*1.1;
            }
        }
    }

    console.log(nomes);

    console.log(pessoas);
}

function divisorConta() {
    adicionaGorjeta();
}