function listaraluno(alunos) {
    if (alunos.length == 0) {
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
module.exports = {listaraluno}