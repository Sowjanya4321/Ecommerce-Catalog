const products = [

{
id:1,
name:"iPhone 15",
price:79999,
image:"https://picsum.photos/300/200?1"
},

{
id:2,
name:"Samsung S25",
price:69999,
image:"https://picsum.photos/300/200?2"
},

{
id:3,
name:"MacBook Air",
price:99999,
image:"https://picsum.photos/300/200?3"
},

{
id:4,
name:"Smart Watch",
price:9999,
image:"https://picsum.photos/300/200?4"
}

];

const productContainer =
document.getElementById("products");

if(productContainer){

displayProducts(products);

document
.getElementById("search")
.addEventListener(
"input",
function(){

const keyword =
this.value.toLowerCase();

const filtered =
products.filter(product=>

product.name
.toLowerCase()
.includes(keyword)
);

displayProducts(filtered);
});
}

function displayProducts(items){

productContainer.innerHTML="";

items.forEach(product=>{

productContainer.innerHTML +=

`
<div class="product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button
onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>
`;
});
}

function addToCart(id){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const product =
products.find(
p=>p.id===id
);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert("Added to Cart");
}

const cartContainer =
document.getElementById("cartItems");

if(cartContainer){

const cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

cart.forEach(item=>{

cartContainer.innerHTML +=

`
<div class="product-card">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

</div>
`;
});
}
