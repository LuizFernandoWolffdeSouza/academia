function listaraluno(rl,alunos, callback) {
    if (alunos.length == 0) {
        console.log("Nenhum cadastro realizado")
    }
    else {
        for (let i = 0; i < alunos.length; i++) {
            console.log("A lista de alunos cadastrados é")
            console.log(alunos)
        }
    }
    callback()

}
module.exports = {listaraluno}