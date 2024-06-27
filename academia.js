const { removeListener } = require("process")
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


menu()
let alunos = []


/*function remover(array) {
    array.splice(0, array.lenght)

}*/

function menu() {
    console.log(`
    --------Menu GYM --------
    1.Fazer matrícula
    2.Editar matrícula
    3.Listar alunos cadastrados
    4.Excluir aluno
    5.adicionar planos de treino
    6.Registrar frequência
    7.Sair`)

    rl.question('Escolha uma opção :' , (resposta) => {
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
                menu
                break;

            default:
                menu()

                break;
        }
    })


}

//1-Mátricula
function fazermatricula() {

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
//2- Editar cadastro
function alterarinfo() {
    if (vetor.length == 0) {
        console.log("Nenhum cadastro foi concedido")
    } else {
        rl.question('Digite o número do elemento que deseja editar: ', (elemento) => {
            if (elemento > 0 && elemento <= alunos.length) {
                rl.question('Digite a nova propriedade 1: ', (nome) => {
                    rl.question('Digite a nova propriedade 2: ', (cpf) => {
                        rl.question('Digite a nova propriedade 3: ', (idade) => {
                            alunos[numero - 1] = {
                                nome,
                                cpf,
                                idade
                            }
                            console.log('editado com sucesso!')
                            exibirMenu()
                        })
                    })
                })
            } else {
                console.log('Número inválido, tente novamente.')
                exibirMenu()
            }
        })

    }

}
//3-Listar alunos
function listaraluno() {
    if (alunos.lenght == 0) {
        console.log("Nenhum cadastro realizado")
    }
    else {
        for (let i = 0; i < alunos.length; i++) {
            console.log("A lista de alunos cadastrados é")
            console.log(alunos)
        }
    }
    menu()

}
//4-Excluir alunos
function excluiraluno() {
    if (alunos.lenght == 0) {
        console.log("Nenhum cadastrado sucedido")
        menu()
    }
    else {
        for (let i = 0; i < alunos.length; i++) {
            rl.question("Digite o número do aluno que deseja remover: ", (remover) => {
                if (remover >= 0 && remover <= alunos.length) {
                    alunos.splice(remover - 1, 1)
                    console.log("aluno removido com sucesso")
                    menu()

                }
                else {
                    console.log("Número inválido, digite novamente.")
                    menu()
                }

            })


        }
    }

}
// 5 - adicionar plano de treino
function planotreino() {
    let treino = []
    
    let abc = {
        Segunda: "Peito, ombro e tríceps",
        Terça: "Costas e bíceps",
        Quarta: "Perna completa",
        Quinta: "Peito, ombro e tríceps",
        Sexta: "Costas e bíceps",
        Sábado: "Perna completa"
    }
    let abc2 = {
        Segunda: "Peito, ombro e tríceps",
        Terça: "Costas e bíceps",
        Quarta: "Perna completa"
    }
    let abcd = {
        Segunda: "Peito e tríceps",
        Terça: "Costas e bíceps",
        Quarta: "Perna completa",
        Quinta: "Ombro e trápezio"

    }

    let abcde = {
        Segunda: "Peito ",
        Terça: "Costas ",
        Quarta: "Perna completa",
        Quinta: "Ombro",
        Sexta: "Braço"

    }
    console.log(abc)
    console.log(abc2)
    console.log(abcd)
    console.log(abcde)
    rl.question("Quantos dias da semana você consegue ir? (3 dias é o minimo): ", (dias) => {
        switch (dias) {
            case '3':
    
                treino.push(abc2)
                console.log(treino)
                menu()
                break
            case '4':
                treino.push(abcd)
                console.log(treino)
                menu()

                break;
            case '5':
                treino.push(abcde)
                console.log(treino)
                menu()
            break
            case '6':
                treino.push(abc)
                console.log(treino)
                menu()
                break

            default:
                menu()
                break;
        }


    })
}




//6-verificar frequência
function registrarfrequencia(params) {
    let calculo
    rl.question(" qual a sua frequencia na semana:", (resposta) => {
        switch (resposta) {
            case "1":
                calculo = 100 / 7 * resposta
                console.log(`${calculo.toFixed()}%`)
                break;
            case "2":
                calculo = 100 / 7 * resposta
                console.log(`${calculo.toFixed()}%`)
                break;
            case "3":
                calculo = 100 / 7 * resposta
                console.log(`${calculo.toFixed()}%`)
                break;
            case "4":
                calculo = 100 / 7 * resposta
                console.log(`${calculo.toFixed()}%`)
                break;
            case "5":
                calculo = 100 / 7 * resposta
                console.log(`${calculo.toFixed()}%`)
                break;
            case "6":
                calculo = 100 / 7 * resposta
                console.log(`${calculo.toFixed()}%`)
                break;
            case "7":
                calculo = 100 / 7 * resposta
                console.log(`${calculo.toFixed()}%`)
                break;

            default:
                menu()
                break;
        }
    })

}











