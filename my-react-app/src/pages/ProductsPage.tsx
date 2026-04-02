import React from "react";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/product.types";

const products: Product[] = [
    {
        id: 1,
        name: 'Dell Laptop',
        price: 150000,
        imageUrl: 'https://via.placeholder.com/220x150?text=Dell+Laptop',
        stock: 5,
        category: 'Electronics',
        description: 'Fast laptop for developers',
        isActive: true
    },
    {
        id: 2,
        name: 'iPhone 15',
        price: 280000,
        imageUrl: 'https://via.placeholder.com/220x150?text=iPhone+15',
        stock: 0,       // <-- this one is out of stock, watch what happens!
        category: 'Electronics',
        description: 'Latest iPhone',
        isActive: true
    },
    {
        id: 3,
        name: 'Samsung TV',
        price: 95000,
        imageUrl: 'https://via.placeholder.com/220x150?text=Samsung+TV',
        stock: 12,
        category: 'Electronics',
        description: '4K Smart TV',
        isActive: true
    },
];

const ProductsPage: React.FC = () => {
    const handleAddToCart = (productId: number): void =>{
        console.log(`Product ${productId} added to cart!`);
         alert(`Product ${productId} added to cart! ✅`);
    };

 return (
         <div>
      <h1>Our Products</h1>

      {/* .map() loops through the array and creates a ProductCard for each */}
      {products.map((product) => (
        // 'key' is required by React when rendering lists
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          stock={product.stock}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductsPage;