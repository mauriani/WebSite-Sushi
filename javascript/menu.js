var itens = [
  {
    titulo: "Temaki salmão",
    image: "./images/temaki-salmao.png",
    descricaoImage: "Temaki salmão",
    preco: "20,00 uni",
    descricao: "Salmão fresco em cubos",
  },
  {
    titulo: "Temaki de Camarão",
    image: "./images/temaki-camarao.png",
    descricaoImage: "Temaki de Camarão",
    preco: "25,00 uni",
    descricao: "Camarão ao alho e óleo, cream cheese e alho torrado.",
  },
  {
    titulo: "Combo 60 Peças",
    image: "./images/combo-60-pecas.png",
    descricaoImage: "Combo 60 Peças Especiais",
    preco: "60,00",
    descricao: `Sashimi Salmão (5und)</br>Sashimi de Camarão (5und)</br>Niguiri Salmão (5und)</br>Joy de Salmão (5und)</br>Joy de Camarão (5und)</br>Sashimi Empanado (5und)`,
  },

  {
    titulo: "Combo 50 Peças",
    image: "./images/combo-60-pecas.png",
    descricaoImage: "Combo 50 Peças Especiais",
    preco: "50,00",
    descricao: `Sashimi Salmão (5und)</br>Sashimi de Camarão (5und)</br>Niguiri Salmão (5und)</br>Joy de Salmão (5und)</br>Joy de Camarão (5und)</br>Sashimi Empanado (5und)`,
  },

  {
    titulo: "Combo 80 Peças",
    image: "./images/combo-80-pecas.png",
    descricaoImage: "Combo 80 Peças Especiais",
    preco: "100,00",
    descricao: `Sashimi Salmão (5und)</br>Sashimi de Camarão (5und)</br>Niguiri Salmão (5und)</br>Joy de Salmão (5und)</br>Joy de Camarão (5und)</br>Sashimi Empanado (5und)`,
  },
];

var menu = itens.map(function (item) {
  return `<div class="card">
    <h1>${item.titulo}</h1>
    <img src="${item.image}" alt="${item.descricaoImage}" />
    <h2>R$ ${item.preco}</h2>
    <p>${item.descricao}</p>
  </div>`;
});

document.getElementById("moreInfo").innerHTML = menu.join("");
