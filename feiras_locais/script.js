document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("buscar-produto");
  const itens = document.querySelectorAll(".item-produto");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const termo = searchInput.value.toLowerCase();
      itens.forEach((item) => {
        const nome = item.querySelector("span").textContent.toLowerCase();
        item.style.display = nome.includes(termo) ? "flex" : "none";
      });
    });
  }

  const reservarBtns = document.querySelectorAll(".btn-reservar");
  reservarBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Produto reservado com sucesso!");
    });
  });
});