// Retrieve parts from the JSON file
const response = await fetch('pieces-autos.json');
const pieces = await response.json();

for (let i = 0; i < pieces.length; i++) {
  const article = pieces[i];

  // Retrieve the DOM element that will host the cards
  const sectionSheets = document.querySelector('.sheets');

  // Create a tag dedicated to an automotive piece
  const pieceElement = document.createElement('article');

  // Create the img element
  const imageElement = document.createElement('img');
  // Access index i of the pieces list to configure the image source
  imageElement.src = article.image;

  const nameElement = document.createElement('h2');
  nameElement.innerText = article.name;

  const priceElement = document.createElement('p');
  priceElement.innerText = `Prix: ${article.price} € (${
    article.price < 35 ? '€' : '€€€'
  })`;

  const categoryElement = document.createElement('p');
  categoryElement.innerText = article.category ?? '(aucune catégorie)';

  const descriptionElement = document.createElement('p');
  descriptionElement.innerText =
    article.description ?? 'Pas de description pour le moment.';

  const stockElement = document.createElement('p');
  stockElement.innerText = article.availability
    ? 'En stock'
    : 'Rupture de stock';

  // Attach the article tag to the Sheets section
  sectionSheets.appendChild(pieceElement);
  // Attach the image to pieceElement (the article tag)
  pieceElement.appendChild(imageElement);
  pieceElement.appendChild(nameElement);
  pieceElement.appendChild(priceElement);
  pieceElement.appendChild(categoryElement);
  pieceElement.appendChild(descriptionElement);
  pieceElement.appendChild(stockElement);
}

// const sortButton = document.querySelector('.btn-sort');
// sortButton.addEventListener('click', function () {
//   pieces.sort(function (a, b) {
//     return a.price - b.price;
//   });
//   console.log(pieces);
// });

// sort button management
const sortButton = document.querySelector('.btn-sort');

sortButton.addEventListener('click', function () {
  const orderedPieces = Array.from(pieces);
  orderedPieces.sort(function (a, b) {
    return a.price - b.price;
  });
  console.log(orderedPieces);
});

// filter button management
const filterButton = document.querySelector('.btn-filter');

filterButton.addEventListener('click', function () {
  const filteredPieces = pieces.filter(function (piece) {
    return piece.price <= 35;
  });
  console.log(filteredPieces);
});

// descending button management
const descendingButton = document.querySelector('.btn-descending');

descendingButton.addEventListener('click', function () {
  const orderedPieces = Array.from(pieces);
  orderedPieces.sort(function (a, b) {
    return b.price - a.price;
  });
  console.log(orderedPieces);
});

// no description button management
const noDescriptionButton = document.querySelector('.btn-no-desc');

noDescriptionButton.addEventListener('click', function () {
  const filteredPieces = pieces.filter(function (piece) {
    return piece.description;
  });
  console.log(filteredPieces);
});
