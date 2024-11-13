// https://dummyjson.com/products

let searchProduct = document.getElementById("search");
let tbody = document.getElementById("tbody");

const callProductApi = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    console.log(result.products);
    displayproductData(result.products);
    return result.products;
  } catch (e) {
    console.log(e);
  }
};
callProductApi();


function displayproductData(productTodisplay)
{
    productTodisplay.map((res, index)=>{
        let tr = document.createElement("tr");
        let sntd = document.createElement("td");
        let titletd = document.createElement("td");
        let brandtd = document.createElement("td");
        let imgtd = document.createElement("td");
        let stocktd = document.createElement("td");
        let descriptiontd = document.createElement("td");
        let weighttd = document.createElement("td");

        sntd.textContent = index +1
        titletd.textContent =res.title
        brandtd.textContent = res.brand
        imgtd.textContent=res.productImg
        stocktd.textContent = res.stock
        descriptiontd.textContent = res.description
        weighttd.textContent = res.weight
        //append data

        tr.appendChild(sntd)
        tr.appendChild(titletd)
        tr.appendChild(brandtd)
        tr.appendChild(imgtd)
        tr.appendChild(stocktd)
        tr.appendChild(descriptiontd)
        tr.appendChild(weighttd)

        tbody.appendChild(tr);
    })
}