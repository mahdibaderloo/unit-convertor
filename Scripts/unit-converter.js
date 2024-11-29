let inputElem = document.querySelector('.input')
let buttons = document.querySelectorAll('.btn')
let resultBtn = document.querySelector('.result-btn')
let resultValue = document.querySelector('.result')


buttons.forEach( btn => {

    btn.addEventListener('click', event => {
        console.log(event.target)

        for (let item of buttons) {
            item.classList.remove('selected')
        }
        
        if (btn.className != 'selected') {
            btn.classList.add('selected')
            calcResult(btn.dataset.m , btn.textContent)
        }
    })
});

function calcResult (data, value) {
    let inputValue = Number(inputElem.value)
    let dataset = data
    
    let calc = inputValue * dataset

    resultBtn.addEventListener('click', () => {
        changeResult(calc, value)
    })
}

function changeResult (result, value) {
    resultValue.innerHTML = `${result.toLocaleString('EN')} ${value}` 
}
