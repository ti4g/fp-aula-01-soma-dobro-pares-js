/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
    return numeros
    .filter(n => n%2 === 0)
        .map(n => n * 2)
        .reduce((acc, n ) => acc + n, 0)
    // acc = acumulador
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    let sum= 0;

    for (let i = 0; i < numeros.length; i++) {
        const numAtual = numeros[i];

        if (numAtual % 2 === 0) {
            sum += numAtual * 2;
        }
    }
    return sum;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
