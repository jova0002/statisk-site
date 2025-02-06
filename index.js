let knapper = document.querySelector(".knapper");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(categories) {
  console.log(categories);
  const markup = categories
    .map(
      (category) => `            
            <div class="knap">
                <a href="produktliste.html?category=${category.category}">${category.category}</a>
            </div>`
    )
    .join("");
  console.log(markup);
  knapper.innerHTML = markup;
}
