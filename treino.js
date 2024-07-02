function planotreino(rl, callback) {
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
                callback()
                break
            case '4':
                treino.push(abcd)
                console.log(treino)
                callback()

                break;
            case '5':
                treino.push(abcde)
                console.log(treino)
                callback()
            break
            case '6':
                treino.push(abc)
                console.log(treino)
                callback()
                break

            default:
                callback()
        
                break;
        }


    })
}
module.exports = {planotreino}
