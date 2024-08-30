function calcularMedia() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        alert('Por favor, insira todos os números.');
        return;
    }

    const media = (num1 + num2 + num3 + num4) / 4;
    document.getElementById('resultado').textContent = `A média aritmética é: ${media}`;
}