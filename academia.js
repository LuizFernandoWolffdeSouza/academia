const readline = require("readline")
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})


menu()
let alunos = []


function menu() {
    console.log(`
    --------Menu GYM --------
    1.Fazer matrícula
    2.alterar inform
    3.listar alunos cadastrados
    4.Excluir aluno
    5.editar,adicionar planos de treino
    6.registrar frequência
    7.sair`)

    rl.question('Escolha uma opção', (resposta) => {
        switch (resposta) {
            case '1':
                fazermatricula()
                break
            case '2':
                alterarinfo()
                break
            case '3':
                listaraluno()
                break
            case '4':
                excluiraluno()
                break
            case '5':
                planotreino()
                break;
            case '6':
                registrarfrequencia()
                break;
            case '7':
                rl.close()

                break;
            default:
                menu()

                break;
        }
    })


}

//1-Mátricula
function fazermatricula() {
    let abc = {
        segunda: "Peito e tríceps",
        terça: "Costas e bíceps",
        quarta: "Perna completo",
        quinta: "Peito e tríceps",
        sexta: "Costas e bíceps",
        sábado: "Perna completa"
    }

    rl.question('Digite seu nome: ', (nome) => {
        rl.question('Digite seu cpf: ', (matricula) => {
            rl.question('Digite sua idade: ', (idade) => {
                alunos.push({ nome: nome.toString(), matricula: matricula, idade: idade })
                console.log(`Sua mátricula foi realizada com sucesso`)
                console.log(alunos)
                menu()

            })
        })
    })
}
//3-Listar alunos
function listaraluno() {
    if (alunos.lenght == 0) {
        console.log("Nenhum cadastro realizado")
    }
    else {
        for (let i = 0; i < alunos.length; i++) {
            console.log(`A lista de alunos cadastrados é
            ${alunos[i].nome}
            ${alunos[i].matricula} 
            ${alunos[i].idade}`)
          console.log(alunos)
        }
    }
    menu()

}
//4-Excluir alunos
function excluiraluno() {
    if (alunos.length == ) {
        
    }
    
}










