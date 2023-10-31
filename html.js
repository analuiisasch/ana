<!DOCTYPE html>
<html lang="en">
<head>
    <title>Livraria Online</title>
</head>
<body>
    <h1>Livraria Online</h1>
    <p>Clique no botão para calcular o desconto.</p>
    <button onclick="calcularDesconto()">Calcular Desconto</button>

    <script>
        function calcularDesconto() {
            constvalorCompra = parseFloat(prompt("Digite o valor total da sua compra"));
            let desconto = 0;

            if (valorCompra > 200) {
                desconto = 0.2; // 20% de desconto
            } else if (valorCompra > 100) {
                desconto = 0.1; // 10% de desconto
            }

            constvalorDesconto = valorCompra * desconto;

            alert('Você economizou R$ ${valorDesconto.toFixed(2)} no seu pedido!');
        }
       
    </script>
</body>
</html>
