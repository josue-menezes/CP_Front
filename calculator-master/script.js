let expression= '';

function digit(value){
    const result = document.getElementById('result');

    const operators = ['x','-','X','/'];
    const lastChar = expression.slice(-1);

    if(operators.includes(value) && operators.includes(lastChar)){
    expression = expression.slice(0,-1);
    
    }
    expression += value;
    result.value = expression;
}
    function addFloat() {
        const lastNumber = expression.split(/[\+\-X\/]/).pop();
        
        if(lastNumber.includes('.')) return;
        if(expression === '') expression = '0';
        expression +='.';
    
    document.getElementById('result').value = expression;
    }

    function clearAll() {
        expression = '';

    document.getElementById('result').value='';

    }
    function equals(){
        try{
            const sanitized = expression.replace(/X/g,'*').replace(/÷/g,'/');
            const resultValue = eval(sanitized);

            document.getElementById('result').value = resultValue;
            expression = String(resultValue);
        } catch (e) {

            document.getElementById('result').value = 'Erro';
            expression= '';

        }
    }