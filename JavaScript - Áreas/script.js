function calculateRectangleArea() {
    alert("Você deseja calcular a área do retângulo?");

    let x = Number(prompt("Informe o valor da altura"));
    let y = Number(prompt("Informe o valor da largura"));
    let resultado = x * y;

    alert("O resultado é " + resultado);
}

function calculateTriangleArea() {
    alert("Você deseja calcular a área do triângulo?");

    let x = Number(prompt("Informe o valor da base"));
    let y = Number(prompt("Informe o valor da altura"));

    let resultado = (x * y) / 2;

    alert("O resultado é " + resultado)
}


function calculateCircleArea() {
    alert("Você deseja calcular a área do círculo?");

    let x = Number(prompt("Informe o valor do raio"));

    let resultado = Math.PI * Math.pow(x, 2);

    alert("O resultado é " + resultado);
}

function calculateTrapezoidArea() {
    alert("Você deseja calcular a área do trapézio?");

    let x = Number(prompt("Informe o valor da base 1"));
    let y = Number(prompt("Informe o valor da base 2"));
    let z = Number(prompt("Informe o valor da altura"));

    let resultado = (x + y) * z / 2;

    alert("O resultado é " + resultado);
}

function calculateDiamondArea() {
    alert("Você deseja calcular a área do losango?")

    let x = Number(prompt("Informe o valor da base 1"));
    let y = Number(prompt("Informe o valor da base 2"));

    let resultado = (x + y) * 2;

    alert("O resultado é " + resultado);
}
