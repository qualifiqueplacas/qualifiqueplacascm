const WHATSAPP_NUMBER = "553899566332";

document.querySelector(".quote-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    "Olá, Qualifique Placas! Vim pelo site e quero solicitar um orçamento.",
    "",
    `Nome: ${form.get("nome")}`,
    `Empresa: ${form.get("empresa") || "Não informado"}`,
    `Serviço: ${form.get("servico")}`,
    `Cidade: ${form.get("cidade")}`,
    `Detalhes do projeto: ${form.get("detalhes")}`,
  ].join("\n");

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
});

document.querySelectorAll(".mobile-menu nav a").forEach((link) => {
  link.addEventListener("click", () => {
    link.closest("details")?.removeAttribute("open");
  });
});

