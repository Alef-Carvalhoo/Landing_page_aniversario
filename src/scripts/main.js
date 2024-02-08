AOS.init();

const dataDoAniversario = new Date("apr 07, 2024 00:00:00")
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diasRestantes = 1000 * 60 * 60 * 24
    const horasRestantes = 1000 * 60 * 60
    const minutosRestantes = 1000 * 60

    const diaDoEvento = timeStampDoAniversario - timeStampAtual

    const diasAteOAniversario = Math.floor(diaDoEvento / diasRestantes)
    const horasAteOAniversario = Math.floor((diaDoEvento % diasRestantes) / horasRestantes);
    const minutosAteOAniversario = Math.floor((diaDoEvento % horasRestantes) / minutosRestantes);
    const segundosAteOAniversario = Math.floor ((diaDoEvento % minutosRestantes) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOAniversario} days |${horasAteOAniversario} hours |${minutosAteOAniversario} minutes |${segundosAteOAniversario} seconds`;

    if (diasAteOAniversario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento expirado!`;
    }
}, 1000);