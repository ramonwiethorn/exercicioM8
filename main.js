const form = document.getElementById('form-contato');
const contatos = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    AddLinha();
    atualizaTabela();
    
});

function AddLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    console.log(inputNomeContato.value);
    console.log(inputNumeroContato.value);
    
    if(contatos.includes(inputNomeContato.value)){
        alert(`O contato de  ${inputNomeContato.value} já foi incluido.`)
    } else{
    contatos.push(inputNomeContato.value);
    numeros.push(parseFloat(inputNumeroContato.value));

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }
    inputNomeContato.value = '';
    inputNumeroContato.value = '';

}
function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

