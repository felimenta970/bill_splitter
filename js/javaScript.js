let numPessoas = 1;
let numItens = 1;
let pessoas = [];
let itens = [];

function adicionaPessoa() {

    if(document.getElementById('nome').value == '') {
        $('#avisoPessoa').empty();

        let div = document.getElementById('avisoPessoa');
        div.setAttribute('class', 'aviso');
        let aviso = document.createElement('p');
    
        aviso.innerHTML = "Nome vazio";

        div.appendChild(aviso);

    } else {

        let pessoa = {
            nome: document.getElementById('nome').value,
            conta: 0,
        };
    
        pessoas.push(pessoa);
    
        listaNomesDiv();
        listaNomesGorjeta();
    
        numPessoas++;
    
        $('#avisoPessoa').empty();
    
        let div = document.getElementById('avisoPessoa');
        div.setAttribute('class', 'sucesso');
        let aviso = document.createElement('p');
        
        aviso.innerHTML = pessoa.nome + " adicionado com sucesso!";
    
        div.appendChild(aviso);
    }

}

function adicionarItem() {

    if (document.getElementById('item').value == ''){

        $('#avisoItem').empty();

        let div = document.getElementById('avisoItem');
        div.setAttribute('class', 'aviso');
        let aviso = document.createElement('p');
    
        aviso.innerHTML = "Item vazio";

        div.appendChild(aviso);

    } else {
        if (document.getElementById('preco').value == '') {

            $('#avisoItem').empty();

            let div = document.getElementById('avisoItem');
            div.setAttribute('class', 'aviso');
            let aviso = document.createElement('p');
    
            aviso.innerHTML = "Consumo sem preço";

            div.appendChild(aviso);

        } else {

            let cont = 0;

            $('.nomesItens').each(function() {
                if(this.checked) {
                    cont++;
                    console.log(cont);
                }
            });

            if (cont == 0) {
                console.log('aqui');
                $('#avisoItem').empty();

                let div = document.getElementById('avisoItem');
                div.setAttribute('class', 'aviso');
                let aviso = document.createElement('p');
    
                aviso.innerHTML = "Ninguem vai pagar?";

                div.appendChild(aviso);

            } else {

                let item = {
                    nome: document.getElementById('item').value,
                    valor: document.getElementById('preco').value
                }
        
                let nomes = [];
    
                itens.push(item);
    
    
                $('input[type=checkbox]').each(function() {
                    if (this.checked) {
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
    
                $('#avisoItem').empty();
    
                let div = document.getElementById('avisoItem');
                div.setAttribute('class', 'sucesso');
                let aviso = document.createElement('p');
        
                aviso.innerHTML = item.nome + " adicionado com sucesso!";
    
                div.appendChild(aviso);
            }

        }
    }
    
}

function listaNomesDiv() {

    let div = document.getElementById('nomesParaItens');
    let aux = numPessoas - 1;
    br = document.createElement('br');

    let checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.name = 'nome' + aux;
    checkbox.value = pessoas[numPessoas-1].nome;
    checkbox.setAttribute('class', 'nomesItens');

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

function limpaCampoNome() {
    document.getElementById('nome').value = '';
}

function limpaCampoItem() {
    document.getElementById('item').value = '';
    document.getElementById('preco').value = '';

    $('.nomesItens').each(function() {
        if(this.checked) {
            this.checked = false;
        }
    });

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
    
}

function divisorConta() {
    adicionaGorjeta();

    let pessoaC;
    let valor;

    for (let i = 0; i < pessoas.length; i++) {

        let div = document.getElementById('resultados');

        let nome = document.createElement('div');
        nome.setAttribute('class', 'nomeConta');

        let conta = document.createElement('div');
        conta.setAttribute('class', 'valorConta');
        
        let br = document.createElement('br');

        pessoaC = pessoas[i].nome;
        valor = pessoas[i].conta;

        nome.innerHTML = pessoaC;
        conta.innerHTML = ': R$ ' + valor.toFixed(2);

        div.appendChild(nome);
        div.appendChild(conta);
        div.appendChild(br);
    }
}