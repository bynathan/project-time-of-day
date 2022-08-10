const radioMasc = document.getElementById('radiomasc')
const radioFem = document.getElementById('radiofem')
const verificar = document.getElementById('btnverificar')

radioMasc.addEventListener('click', () => {
    radioFem.checked = false
})

radioFem.addEventListener('click', () => {
    radioMasc.checked = false
})

