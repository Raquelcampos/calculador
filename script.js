function somar(){
    let tn1 = document.querySelector('#textn1')
    let tn2 = document.querySelector('#textn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let soma = n1 + n2
    let result = document.querySelector('.result')
    result.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`
    }
    function multiplicar(){
    let tn3 = document.querySelector('#textn3')
    let tn4 = document.querySelector('#textn4')
    let n3 = Number(tn3.value)
    let n4 = Number(tn4.value)
    let multiplication = n3 * n4
    let result2 = document.querySelector('.result2')
    result2.innerHTML = `A multiplicação entre ${n3} e ${n4} é igual a ${multiplication}`
    }