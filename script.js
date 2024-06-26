// U09226075
function main(){

    console.log("I am alive!");
    const request = fetch("products.json")
    .then(response => response.json())
    .then((data)=>{
        console.log(data)
        for (index in data) {
            const product = data[index]
            
        const dataDisplay = document.getElementById("dataDisplay");

            const nameElement = document.createElement("p");
            nameElement.textContent = "Name: " + product.name;

            const imageElement = document.createElement("p");
            imageElement.textContent = "Image: " + product.image;

            const priceElement = document.createElement("p");
            priceElement.textContent = "Price: " + product.price;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = "Description: " + product.description;

            dataDisplay.appendChild(nameElement);
            dataDisplay.appendChild(imageElement);
            dataDisplay.appendChild(priceElement);
            dataDisplay.appendChild(descriptionElement);

    })









}
