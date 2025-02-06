const myCategory = new URLSearchParams(window.location.search).get("category");

let listContainer = document.querySelector(".produkt");

const overskrift = document.querySelector("h1");

overskrift.innerHTML = myCategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) => `            
        <div class="item">
                <img class="${product.soldout && "sold_out_img"}" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="T-shirt">
                <h2>${product.productdisplayname}</h2>
                <h3>${product.brandname}</h3>
                <div class="price">
                    <p class="${product.discount && "foer_pris"}">DKK ${product.price},-</p>
                    <p class= "pris_produkt_før ${!product.discount && "hide"}"> Now DKK ${Math.round(product.price * (1 - product.discount / 100))},-</p>
                </div>
                <a href="produkt.html?id=${product.id}">Read more</a>
                <div class="discount ${!product.discount && "hide"}">${product.discount}%</div>
                <div class="sold_out ${!product.soldout && "hide"}">Sold out</div>
            </div>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
