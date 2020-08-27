let numPessoas = 1;
let numItens = 1;
let pessoas = [];
let itens = [];

function adicionaPessoa() {


    let pessoa = {
        nome: document.getElementById('nome').value,
        conta: 0,
    };

    pessoas.push(pessoa);

    listaNomesDiv();
    listaNomesGorjeta();

    numPessoas++;

    $('#sucessoPessoa').empty();

    let div = document.getElementById('sucessoPessoa');
    let aviso = document.createElement('p');
    
    aviso.innerHTML = pessoa.nome + " adicionado com sucesso!";

    div.appendChild(aviso);


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
        nome: document.getElementById('item').value,
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

    $('#sucessoItem').empty();

    let div = document.getElementById('sucessoItem');
    let aviso = document.createElement('p');
    
    aviso.innerHTML = item.nome + " adicionado com sucesso!";

    div.appendChild(aviso);
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