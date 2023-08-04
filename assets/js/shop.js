let products = [ // Gồm thuộc tính data, thuộc tính này có kiểu "mảng"
    {// trong mảng data gồm các object, mỗi obj có 3 thuộc tính name, price, image
        name: "Colorful Pattern Shirt",
        newprice: 238.85,
        oldprice: 245.85,
        type: "Clothing",
        featured: true,
        popular: false,
        newadded:true,
        badge: "Hot",
        image: "assets/img/product-1-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:1
    },
    {
        name: "Colorful Pattern Shirt Vip",
        newprice: 238.85,
        oldprice: 245.85,
        type: "Clothing",
        featured: true,
        newadded: false,
        popular: false,
        badge: "Hot",
        image: "assets/img/product-2-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:2
    },
    {
        name: "Colorful Pattern Shoes",
        newprice: 238.85,
        oldprice: 245.85,
        type: "Clothing",
        featured: true,
        newadded: true,
        popular: false,
        badge: "Hot",
        image: "assets/img/product-3-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:3
    },
    {
        name: "Colorful Pattern Trouser",
        newprice: 238.85,
        oldprice: 245.85,
        featured: true,
        newadded: false,
        popular: false,
        type: "Clothing",
        badge: "Hot",
        image: "assets/img/product-4-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:4
    },
    {
        name: "Colorful Pattern Hat",
        newprice: 238.85,
        oldprice: 245.85,
        type: "Clothing",
        featured: true,
        newadded: true,
        popular: true,
        badge: "Hot",
        image: "assets/img/product-5-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:5
    },
    {
        name: "Colorful Pattern Shirt Ultra",
        newprice: 238.85,
        oldprice: 245.85,
        newadded: true,
        featured: true,
        popular: true,
        type: "Clothing",
        badge: "Hot",
        image: "assets/img/product-6-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:6
    },
    {
        name: "Colorful Pattern Shirt Women",
        newprice: 238.85,
        oldprice: 245.85,
        featured: true,
        newadded: true,        
        popular: true,
        type: "Clothing",
        badge: "Hot",
        image: "assets/img/product-7-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:7
    },
    {
        name: "Colorful Pattern Shirt Plus",
        newprice: 238.85,
        oldprice: 245.85,
        newadded: false,
        featured: true,
        popular: true,
        type: "Clothing",
        badge: "Hot",
        image: "assets/img/product-8-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:8
    },
    {
        name: "Colorful Pattern Shirt Ultra Vip",
        newprice: 238.85,
        oldprice: 245.85,
        featured: false,
        newadded: true,
        popular: true,
        type: "Clothing",
        badge: "Hot",
        image: "assets/img/product-9-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:9
    },
    {
        name: "Colorful Pattern Sandals",
        newprice: 238.85,
        oldprice: 245.85,
        featured: false,
        newadded: false,
        popular: true,
        type: "Clothing",
        badge: "Hot",
        image: "assets/img/product-10-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:10
    },
    {
        name: "Colorful Pattern Trouser Vip",
        newprice: 238.85,
        oldprice: 245.85,
        featured: false,
        newadded: true,
        popular: true,
        type: "Clothing",
        badge: "Hot",
        image: "assets/img/product-11-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:11
    },
    {
        name: "Colorful Pattern Shirt Women Vip",
        newprice: 238.85,
        oldprice: 245.85,
        featured: false,
        newadded: true,
        popular: true,
        type: "Clothing",
        badge: "Hot",
        image: "assets/img/product-12-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:12
    },
    {
      name: "Colorful Pattern Hand Bag",
      newprice: 238.85,
      oldprice: 245.85,
      type: "Clothing",
      badge: "Hot",
      image: "assets/img/product-13-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
      id:13
    },
    {
      name: "Colorful Pattern Hand Bag Vip",
      newprice: 238.85,
      oldprice: 245.85,
      type: "Clothing",
      badge: "Hot",
      image: "assets/img/showcase-img-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
      id:14
    },
    {
      name: "Colorful Pattern Bag",
      newprice: 238.85,
      oldprice: 245.85,
      type: "Clothing",
      badge: "Hot",
      image: "assets/img/showcase-img-3.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
      id:15
    },
    {
      name: "Colorful Pattern Shirt Ultra Vip Pro",
      newprice: 238.85,
      oldprice: 245.85,
      type: "Clothing",
      badge: "Hot",
      image: "assets/img/showcase-img-5.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
      id:16
    }
  
    
    
];
length = products.length
document.getElementById("number").innerHTML += length;

xemtrang(1)
function xemtrang(sotrang){
    document.getElementById("shop1").innerHTML = ""
    let sophantu = 8
    for (let product of products) { // cú pháp chèn biến ${biến}
        if ((sotrang-1)*(sophantu)< product.id && product.id<=(sophantu)*(sotrang)){

        
        let card = /*html*/ `
        <div class="product__item">
        <div class="product__banner">
          <button onclick="xemchitiet(${product.id})" class="product__images">
            <img src="${product.image}" alt="" class="product__img default">
          </button>
          <div class="product__badge light-pink">Hot</div>
          
        </div>
        <div class="product__content">
          <span class="product__category">${product.type}</span>
          <a href="details.html">
            <h3 class="product__title">${product.name}</h3>
          </a>
          <div class="product__rating">
            <i class="fi fi-rs-star"></i>
            <i class="fi fi-rs-star"></i>
            <i class="fi fi-rs-star"></i>
            <i class="fi fi-rs-star"></i>
            <i class="fi fi-rs-star"></i>
          </div>
          <div class="product__price flex">
            <span class="new__price">${product.newprice}</span>
            <span class="old__price">${product.oldprice}</span>
          </div>
          <button href="" class="action__btn cart__btn" aria-label="Add To Cart " onclick="checktoAddCart(${product.id})">
            <i class="fi fi-rs-shopping-bag-add"></i>
          </button>
    
        </div>
      </div>
      `; // function addToCart (ID) {}
        document.getElementById("shop1").innerHTML += card;
    }
}
let pag1 = document.getElementById("pag1")
let pag2 = document.getElementById("pag2")
if (sotrang==1){
          pag2.classList.remove("active")
          pag1.classList.add("active")
}
if (sotrang==2){
          pag1.classList.remove("active")
          pag2.classList.add("active")
}
        
}
let tk = localStorage.getItem('userAccount_key');
if (!tk) {
    alert("Xin lổi!")
    let userAccount = { //Tạo object lưu trữ tài khoản
        acc: [ //trong thuộc tính acc là một mảng
            {
                id: 1,
                name: "hee", //có các obj với các thuộc tính là name và pwd
                pwd: "hee",

         
            },
            {
                id: 2,
                name: "hii",
                pwd: "hii"
            },
        ]
    }
    localStorage.setItem('userAccount_key', JSON.stringify(userAccount));
}
const handleAddToCartClicked = (productId) => {
    if (!localStorage.getItem("currentUser")) {
        alert("Please log in");
    } else {
        addToCart(productId);
    }
};
let xemchitiet = (productId) =>{
    
        localStorage.setItem('idSanpham',JSON.stringify(productId));
        window.location = "details.html"


}



