module.exports = rangeSlider

function rangeSlider(){
    const el = document.createElement('div')
    el.classList.add('container')
    const shadow = el.attachShadow({ mode: 'closed'})

    const input = document.createElement('input')
    input.type = 'range'

    const style = document.createElement('style')
    style.textContent = getTheme()

    shadow.append(style, input)
    return el
}

function getTheme(){
    return `
    :host(.container) {
        background-color: red;
        border-radius: 5px;
    }
    input{
        width: 100%;
    }
    `
}