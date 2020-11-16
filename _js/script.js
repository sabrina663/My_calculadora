function calculadora(tipo, calculo){
    if (tipo === 'acao'){
        if (calculo === 'c'){
            document.getElementById('resultado').value = ''
        }
        if (calculo === '/' || calculo === '*' || calculo === '-' || calculo === '+' || calculo === '.'){
            document.getElementById('resultado').value += calculo;
        }
        if (calculo === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }
    }else if(tipo === 'valor'){
        var valor_campo = document.getElementById('resultado').value
        document.getElementById('resultado').value = valor_campo += calculo

    }
}