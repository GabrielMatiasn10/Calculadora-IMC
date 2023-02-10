const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
let resultado = document.getElementById('resultado')
let mensagem = document.getElementById('mensagem')
const btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', function (e) {
  e.preventDefault()
  let imc = peso.value / (altura.value * altura.value)

  resultado.value = imc
  mensagem.innerHTML = classificacaoIMC(imc)
})
function classificacaoIMC(imc) {
  let mensagem = ''
  if (imc < 18.5) {
    return (mensagem = 'Abaixo Do Peso')
  }
  if (imc >= 18.5 && imc <= 24.9) {
    return (mensagem = 'Normal')
  }
  if (imc >= 25.0 && imc <= 29.9) {
    return (mensagem = 'SobrePeso')
  }
  if (imc >= 30.0 && imc <= 39.9) {
    return (mensagem = 'Obesidade')
  }
  if (imc >= 40) {
    return (mensagem = 'obesidade ao extremo')
  }
}
