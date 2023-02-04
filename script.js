function insert(num) {
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num
}

function clean() {
    document.getElementById('result').innerHTML = ''
}

function calculator() {
    let calculator = document.getElementById('result').innerHTML
    if(calculator) {
        document.getElementById('result').innerHTML = eval(calculator)
    }
    else {
        document.getElementById('result').innerHTML = 'Digite algo..'
    }
}