// Garante que a página role para o topo assim que ela for carregada
window.onload = function () {
  window.scrollTo(0, 0);
};

// Código do formulário para evitar recarregamento desnecessário
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const descricao = document.querySelector("textarea").value;

  // Validar campos
  if (nome === "" || email === "" || descricao === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    // Mensagem de sucesso
    alert("Orçamento enviado com sucesso! Entraremos em contato em breve.");
    // Limpar formulário
    document.querySelector("form").reset();

    // Garantir rolagem para o topo após o envio
    setTimeout(function () {
      window.scrollTo(0, 0); // Rola para o topo após o envio
    }, 50); // Pequeno atraso para garantir o reset
  }
});

document.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active"); // opcional
    }
  }
});
