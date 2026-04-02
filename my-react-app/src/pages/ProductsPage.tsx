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
        <div style={{ padding: '24px' }}>
            <h1 style={{ fontFamily: 'Arial', marginBottom: '24px' }}>
                🛍️ Our Products
            </h1>

            {/* .map() loops through products and creates one ProductCard per product */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {products.map((product) => (
                    // key is REQUIRED when using .map() — always use the id
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
        </div>
    );
};

export default ProductsPage;