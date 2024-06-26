// U09226075

productData = []
length = 0
let index = 0

// Display next button.
function onNext() {
    index++

    if (index >= length) {
        index = 0
    }

    displayPageData()

}

// Display previous button.
function onPrevious() {
    index--

    if (index < 0) {
        index = length -1
    }
    
    displayPageData()

}

async function sleep(milli) {
    return new Promise(resolve => setTimeout(resolve, milli))
}

// Display data.
function displayPageData() {
    const product = productData[index]
    
    const nameField = document.getElementById("name-label")
    nameField.textContent = "Name: "
    const nameElement = document.getElementById("name");
    nameElement.textContent = product.name;

    const imageElement = document.getElementById("image");
    imageElement.setAttribute("src", product.image)

    const priceField = document.getElementById("price-label")
    priceField.textContent = "Price: "
    const priceElement = document.getElementById("price");
    priceElement.textContent = "$" + product.price;

    const descripField = document.getElementById("description-label")
    descripField.textContent = "Description: "
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = product.description;
}

// Fetch and display data.
function main(){
    
    const request = fetch("https://www.course-api.com/react-store-products")
    .then(response => response.json())
    .then(async function (data) {
        await sleep (2000)
        let loading = document.getElementById("loading")
        loading.textContent = '';
        // Dynamic to data length.
        length = data.length

        productData = data
        displayPageData()

        // Add error catch.
    }).catch((error) =>{alert(error);})

}
