// https://dummyjson.com/products

let searchProduct = document.getElementById("search");
let tbody = document.getElementById("tbody");

let products = [];

const callProductApi = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    console.log(result.products);
    products = result.products;
    displayproductData(result.products);
    return result.products;
  } catch (e) {
    console.log(e);
  }
};
callProductApi();

function displayproductData(productTodisplay) {
  tbody.innerText = "";
  productTodisplay.map((res, index) => {
    let tr = document.createElement("tr");
    let sntd = document.createElement("td");
    let titletd = document.createElement("td");
    let brandtd = document.createElement("td");
    let imgtd = document.createElement("img");
    let stocktd = document.createElement("td");
    let descriptiontd = document.createElement("td");
    let weighttd = document.createElement("td");
    let buttontd = document.createElement("td");
    let imgtdAppend = document.createElement("td");
    let deleteButton = document.createElement("button");

    deleteButton.textContent="Delete";
    deleteButton.addEventListener("click", (e)=>
    {
      alert(res.id)
      deleteProduct(res.id)
    })

    sntd.textContent = index + 1;
    titletd.textContent = res.title;
    brandtd.textContent = res.brand;
    imgtd.src = res.thumbnail;

    imgtd.style.width = "50px";

    stocktd.textContent = res.stock;
    descriptiontd.textContent = res.description;
    weighttd.textContent = res.weight;
    //append data

    imgtdAppend.appendChild(imgtd);
    buttontd.appendChild(deleteButton);

    tr.appendChild(sntd);
    tr.appendChild(titletd);
    tr.appendChild(brandtd);
    tr.appendChild(imgtdAppend);
    tr.appendChild(stocktd);
    tr.appendChild(descriptiontd);
    tr.appendChild(weighttd);
    tr.appendChild(buttontd);

    tbody.appendChild(tr);
  });
}

///input for search engine

searchProduct.addEventListener("keyup", (e) => {
  // if(e.key ==="Enter"){
  //     // console.log(searchProduct.value.tolowercase())
  //     console.log(products)
  // }

  let product = products.filter((i) => {
    if (i) {
      return i.title.toLowerCase().includes(searchProduct.value.toLowerCase());
    }
  });
  displayproductData(product);
});


function deleteProduct(productId)
{
  console.log(deleteProduct)

}