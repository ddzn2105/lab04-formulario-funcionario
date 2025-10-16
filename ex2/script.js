// CLASSE FUNCIONARIO

class Funcionario{
    constructor(nome, idade, cargo, salario){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    getCargo(){
        return this.cargo;
    }

    getSalario(){
        return this.salario;
    }

    setNome(nome){
        this.nome = nome;
    }

    setIdade(idade){
        this.idade = idade;
    }

    setCargo(cargo){
        this.cargo = cargo;
    }

    setSalario(salario){
        this.salario = salario;
    }

    toString(){
        return `Nome: ${this.nome}, Idade: ${this.idade}, Cargo: ${this.cargo}, Salário: ${this.salario}`;
    }
}

// CLASSE CONTROLADORA
class FuncionarioController {
    constructor() {
        this.funcionarios = [];
        this.editIndex = null;
        this.init();
    }

    init(){
        document.getElementById("btnCadastrar").addEventListener("click", function(event) {
            controller.salvar(event);
        });
    }

    salvar(e){
        e.preventDefault();
        let nome = document.getElementById("nome").value;
        let idade = document.getElementById("idade").value;
        let cargo = document.getElementById("cargo").value;
        let salario = document.getElementById("salario").value;

        if (this.editIndex !== null) {
            // Atualiza usando os métodos set da classe Funcionario
            let funcionario = this.funcionarios[this.editIndex];
            funcionario.setNome(nome);
            funcionario.setIdade(idade);
            funcionario.setCargo(cargo);
            funcionario.setSalario(salario);
            this.editIndex = null;
        } else {
            let funcionario = new Funcionario(nome, idade, cargo, salario);
            this.funcionarios.push(funcionario);
        }
        this.atualizarTabela();
        this.limparFormulario();
    }

    atualizarTabela(){
        const tabela = document.getElementById("tabela");
        tabela.innerHTML = "";

        this.funcionarios.forEach(function(funcionario, index) {
            const row = tabela.insertRow();
            row.insertCell(0).innerText = index + 1;
            row.insertCell(1).innerText = funcionario.getNome();
            row.insertCell(2).innerText = funcionario.getIdade();
            row.insertCell(3).innerText = funcionario.getCargo();
            row.insertCell(4).innerText = "R$" + funcionario.getSalario();

            const btnEditar = document.createElement("button");
            btnEditar.innerText = "Editar";
            btnEditar.type = "button";
            btnEditar.onclick = function() { controller.editar(index); };
            row.insertCell(5).appendChild(btnEditar);

            const btnExcluir = document.createElement("button");
            btnExcluir.innerText = "Excluir";
            btnExcluir.type = "button";
            btnExcluir.onclick = function() { controller.excluir(index); };
            row.insertCell(5).appendChild(btnExcluir);
        });
    }

    editar(index){
        const funcionario = this.funcionarios[index];
        document.getElementById("nome").value = funcionario.getNome();
        document.getElementById("idade").value = funcionario.getIdade();
        document.getElementById("cargo").value = funcionario.getCargo();
        document.getElementById("salario").value = funcionario.getSalario();
        this.editIndex = index;
        
    }

    excluir(index){
        this.funcionarios.splice(index, 1);
        this.atualizarTabela();
        // Se estava editando o funcionário, limpa o formulário e o índice
        if (this.editIndex !== null) {
            this.limparFormulario();
            this.editIndex = null;
        }
    }

    limparFormulario(){
        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("cargo").value = "";
        document.getElementById("salario").value = "";
    }
}

// Instancia global para uso no HTML
const controller = new FuncionarioController();