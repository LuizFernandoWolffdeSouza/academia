function registrarfrequencia(rl, calculo, callback) {
    let calculo
    rl.question(" qual a sua frequencia na semana:", (resposta) => {
        switch (resposta) {
            case "1":
            case '2':
            case '3':
            case "4":
            case "5":
            case "6":
            case "7":
                calculo = 100 / 7 * resposta
                console.log(`${calculo.toFixed()}%`)
                break;
            default:
                callback()
                break;
        }
    })

}
module.exports = {registrarfrequencia}
