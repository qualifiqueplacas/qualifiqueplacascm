document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const descricao = document.querySelector('textarea').value;

    // Validar campos
    if (nome === "" || email === "" || descricao === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Mensagem de sucesso
        alert('Orçamento enviado com sucesso! Entraremos em contato em breve.');
        // Limpar formulário
        document.querySelector('form').reset();
    }
    
});
