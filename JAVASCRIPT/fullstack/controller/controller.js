const { pessoas } = require('../database/database');


// CRUD
// listando usuarios
function listar() {
    console.log(pessoas);
}

function cadastrar(id, nome, telefone, email) {
    const novoUsuario = { id, nome, telefone, email }
    pessoas.push(novoUsuario)
}

function editar(id, novoNome, novoTelefone, novoEmail) {
    const pessoa = pessoas.find(elemento => elemento.id === id)
    if (pessoa) {
        pessoa.nome = novoNome || pessoa.nome;
        pessoa.telefone = novoTelefone;
        pessoa.email = novoEmail;
    } else {
        console.log("Usuário não encontrado!")
    }
}

/*function deletar() {
    pessoas = []
}

function deletarPorID(id) {
    const 
}*/


cadastrar(1, "William Gonçalves", "(84)9.9999-9999", "fulano@gmail.com");
cadastrar(2, "Fulano da Silva", "(84)9.9999-9999", "fulano2@gmail.com");
editar(1, null, "(84)9.9999-1111", "novoemail@gmail.com");
//deletarPorID(2)

listar()