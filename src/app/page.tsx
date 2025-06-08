// src/app/page.tsx

import React from "react";

const featuredProducts = [
  { id: 1, name: "Elegant Vase", image: "/images/vase.jpg", price: "$45" },
  { id: 2, name: "Modern Lamp", image: "/images/lamp.jpg", price: "$80" },
  { id: 3, name: "Decorative Pillow", image: "/images/pillow.jpg", price: "$30" },
];

export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <h1>Magnificent Creations Inc.</h1>
        <p>Transform your home with unique, handcrafted decor.</p>
        <a href="/shop" className="cta">Shop Now</a>
      </header>

      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="about">
        <h2>About Magnificent Creations Inc.</h2>
        <p>
          We bring elegance and warmth to your living spaces with handcrafted home decor pieces
          that blend artistry with functionality.
        </p>
        <a href="/about">Learn More</a>
      </section>
    </main>
  );
}
