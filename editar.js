function alterarinfo(rl,alunos, callback) {
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
                            callback()
                        })
                    })
                })
            } else {
                console.log('Número inválido, tente novamente.')
                callback()
            }
        })

    }

}
module.exports = {alterarinfo}