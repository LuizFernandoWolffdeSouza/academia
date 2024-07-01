function excluiraluno() {
    if (alunos.length == 0) {
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
module.exports = {excluiraluno}