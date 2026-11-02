
// LUXE BAGS - Dynamic Product Catalogue

document.addEventListener("DOMContentLoaded", function () {

    // Store handbag information in an array
    const products = [

        {
            name: "Ted Tote",
            description: "Brown vintage tote bag serving chic and vintage.",
            price: 6500,
            image: "Images/image 2.webp"
        },

        {
            name: "Navy Dindy",
            description: "A dark navy tote bag.",
            price: 1500,
            image: "Images/Tote bag.webp"
        },

        {
            name: "Barbie TINGZ",
            description: "Small fashionable pink handbag.",
            price: 5000,
            image: "Images/image1.webp"
        },

        {
            name: "Winter Selection",
            description: "Vintage denim tote.",
            price: 4500,
            image: "Images/image 4.webp"
        },

        {
            name: "Dirty Jo",
            description: "Dark denim handbag.",
            price: 5000,
            image: "Images/image 5.webp"
        },

        {
            name: "Winter Selection",
            description: "Small handbag for ladies.",
            price: 4500,
            image: "Images/image 6.webp"
        }

    ];

    const productList = document.getElementById("product-list");
    const searchInput = document.getElementById("product-search");
    const noProducts = document.getElementById("no-products");

    // Stop if the catalogue elements are not on the page
    if (!productList || !searchInput) {
        return;
    }

    // Display handbags on the website
    function displayProducts(items) {

        productList.replaceChildren();

        noProducts.hidden = items.length !== 0;

        items.forEach(function (product) {

            const card = document.createElement("article");
            card.className = "product";

            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.name + " handbag";
            image.loading = "lazy";
            image.className = "gallery-image";

            const name = document.createElement("h3");
            name.textContent = product.name;

            const description = document.createElement("p");
            description.className = "desc";
            description.textContent = product.description;

            const price = document.createElement("p");
            price.className = "price";
            price.textContent = "R" + product.price.toLocaleString("en-ZA", {
                minimumFractionDigits: 2
            });

            const cartLink = document.createElement("a");
            cartLink.href = "cart.html";
            cartLink.className = "btn";
            cartLink.textContent = "Add to Cart";

            card.append(
                image,
                name,
                description,
                price,
                cartLink
            );

            productList.appendChild(card);

        });
    }

    // Search handbags by name or description
    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase().trim();

        const filteredProducts = products.filter(function (product) {

            return product.name.toLowerCase().includes(searchText) ||
                product.description.toLowerCase().includes(searchText);

        });

        displayProducts(filteredProducts);

    });

    // Display all handbags when the page opens
    displayProducts(products);

});
