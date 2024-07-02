const {fazermatricula } = require('./matricula')
const {listaraluno } = require('./listar')
const {excluiraluno} = require('./excluir')
const {planotreino} = require('./treino')
const {registrarfrequencia} = require('./frequencia')


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
                fazermatricula(rl,alunos,menu)
                break
            case '2':
                alterarinfo(rl,alunos,menu)
                break
            case '3':
                listaraluno(rl, alunos, menu)
                break
            case '4':
                excluiraluno(rl,alunos,menu)
                break
            case '5':
                planotreino(rl, menu)
                break;
            case '6':
                registrarfrequencia(rl,calculo, menu)
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

//2- Editar cadastro


//3-Listar alunos

//4-Excluir alunos
// 5 - adicionar plano de treino

//5-editar treino



//6-verificar frequência

function calculomacros () {
    rl.question("qual seu peso", (peso) =>{
        rl.question("Qunato de proteína você deseja ingerir 1.6x kg, 2kg", (proteina) =>{
                
        })
        
    })
    
}











