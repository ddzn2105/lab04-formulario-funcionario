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
        this.init();
    }

    init(){
        document.getElementById("btnCadastrar").addEventListener("click",function (event){ controller.salvar(event); });
    }

    salvar(e){
        e.preventDefault();
        let nome = document.getElementById("nome").value;
        let idade = document.getElementById("idade").value;
        let cargo = document.getElementById("cargo").value;
        let salario = document.getElementById("salario").value;

        let funcionario = new Funcionario(nome, idade, cargo, salario);
        this.funcionarios.push(funcionario);
        this.atualizarTabela();
        this.limparFormulario();
        console.log("Cadastrado com sucesso!")
    }

    atualizarTabela(){
        const tabela = document.getElementById("tabela");
        tabela.innerHTML = "";

        this.funcionarios.forEach(function (funcionario, index) {
            const row = tabela.insertRow();
            row.insertCell(0).innerText = index + 1;
            row.insertCell(1).innerText = funcionario.getNome();
            row.insertCell(2).innerText = funcionario.getIdade();
            row.insertCell(3).innerText = funcionario.getCargo();
            row.insertCell(4).innerText = funcionario.getSalario();
        });
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