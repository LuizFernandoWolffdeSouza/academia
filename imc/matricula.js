

function fazermatricula(rl,alunos,callback) {
    rl.question('Digite seu nome: ', (nome) => {
        rl.question('Digite seu cpf: ', (matricula) => {
            rl.question('Digite sua idade: ', (idade) => {
                alunos.push({ nome: nome.toString(), matricula: matricula, idade: idade })
                console.log(`Sua mátricula foi realizada com sucesso`)
                console.log(alunos)
                callback()

            })
        })
    })
}
module.exports = {fazermatricula}
