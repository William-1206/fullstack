const { pessoas } = require('../database/database');


// CRUD
// listando usuarios
function listar() {
    try {
        if (pessoas.length <= 0) {
            console.log("Nenhum usuário cadastrado!")
        } else {
            console.log("Usuários:");
            console.table(pessoas);
        }
    } catch (error) {
        console.error("Erro ao listar os usuários", error.message)
    }
}

function cadastrar(id, nome, telefone, email) {
    const novoUsuario = { id, nome, telefone, email }
    pessoas.push(novoUsuario)
    console.log("Usuário cadastrado com sucesso!")
}

function editar(id, novoNome, novoTelefone, novoEmail) {
    const pessoa = pessoas.find(elemento => elemento.id === id)
    if (pessoa) {
        pessoa.nome = novoNome || pessoa.nome;
        pessoa.telefone = novoTelefone;
        pessoa.email = novoEmail;
        console.log("Usuário atualizado com sucesso!")
    } else {
        console.log("Usuário não encontrado!")
    }
}


function deletarPorID(id) {
    const usuario = pessoas.findIndex(elemento => elemento.id === id)
    if (usuario === -1) {
        console.log("Usuário não encontrado!");
    } else {
        pessoas.splice(usuario, 1)
        console.log("Usuário deletado com sucesso!")
    }

}

function deletarTodos() {
    pessoas.length = 0;
}



cadastrar(1, "William Gonçalves", "(84)9.9999-9999", "fulano@gmail.com");
cadastrar(2, "Fulano da Silva", "(84)9.9999-9999", "fulano2@gmail.com");
editar(1, "William Gonçalves", "(84)9.9999-1111", "novoemail@gmail.com");
listar();
deletarPorID(2);
listar();
deletarTodos();
listar();



let teste = 1 // lowercase
let TESTE1 = 2 // UPPERCASE
let teste_unitario = 1 // snake case
let TesteUnitario2 = 1 // CamelCase
let Pascal = 1 // Pascal case