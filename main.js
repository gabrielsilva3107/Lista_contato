function adicionarContato() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    var tabela = document.getElementById('tabelaContatos');
    var corpoTabela = tabela.getElementsByTagName('tbody')[0];

    var novaLinha = corpoTabela.insertRow();

    var celulaNome = novaLinha.insertCell(0);
    var celulaTelefone = novaLinha.insertCell(1);

    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}