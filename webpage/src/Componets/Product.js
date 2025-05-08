import "./Product.css"

function Products() {
  const products = [
    { id: 1, image: "/images/111.jpg", title: "Gulab Jamm", price: "From ₹299" },
    { id: 2, image: "/images/12.jpg", title: "Jalebi", price: "From ₹199" },
    { id: 3, image: "/images/333.jpg", title: "Rasgulla", price: "From ₹350" },
    { id: 4, image: "/images/444.jpg", title: "Kaju Katli", price: "From ₹400" },
    { id: 5, image: "/images/15.jpg", title: "Mysore Pak", price: " From ₹400" },
    { id: 6, image: "/images/16.jpg", title: "Barfi", price: "From ₹299" },
    { id: 7, image: "/images/17.jpg", title: "Motichoor Laddu", price: "From ₹499" },
    { id: 8, image: "/images/89.jpg", title: "Pootharekulu", price: "From ₹450" },
    { id: 9, image: "/images/999.jpg", title: "Kalakanda", price: "From ₹480" },
    { id: 10, image: "/images/10.jpg", title: "Coconut Laddu", price: "From ₹290" },
    { id: 11, image: "/images/1090.jpg", title: "Bobatallu", price: "From ₹440" },
    { id: 12, image: "/images/1956.webp", title: "Kajjikayalu", price: " From ₹590" },
  ]

  const addToCart = (product) => {
    // Show alert message
    alert(`${product.title} added to cart!`)

    // Get current cart count from localStorage or default to 0
    let cartCount = Number.parseInt(localStorage.getItem("cartCount") || "0")

    // Increment cart count
    cartCount++

    // Save updated cart count to localStorage
    localStorage.setItem("cartCount", cartCount.toString())

    // Update cart count display in the header
    const cartCountElement = document.getElementById("cartCount")
    if (cartCountElement) {
      cartCountElement.textContent = cartCount.toString()
      cartCountElement.style.display = "flex"
    }
  }

  return (
    <div id="productSection" className="page-section">
      <div className="products-container">
        <h2 className="section-title">Andhra Sweets</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image || "/placeholder.svg"} alt={product.title} className="product-image" />
              <span className="product-title">{product.title}</span>
              <span className="product-price">{product.price}</span>
              <div className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
