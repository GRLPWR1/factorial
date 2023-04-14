// Итерационный подсчет факториала
function factIterat(num){
    let factorial = 1;
    if (num < 0 || num % 1 !== 0) {
        return prompt = 'Введите целое неотрицательное число'
    } else if (num == 0 || num == 1 ) {
        return num;
    } else {
        for(let i=1; i<= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(factIterat(4));

// Рекурсивный расчет факториала
function factRec(num){
    if (num < 0 || num % 1 !== 0) {
        return prompt = 'Введите целое неотрицательное число'
    } else if (num == 0 || num == 1 ) {
        return num;
    } else {
        return num *= factRec(num-1);
        }
}
console.log(factRec(5));