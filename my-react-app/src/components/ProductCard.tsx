import React from 'react';


interface ProductCardProps{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    stock: number;
    onAddToCart: (id: number) => void;

}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    imageUrl,
    stock,
    onAddToCart
}) => {
    return(
         <div style={styles.card}>
            <img src={imageUrl} alt={name} style={styles.image} />
            <h3 style={styles.name}>{name}</h3>
            <p style={styles.price}>PKR {price.toLocaleString()}</p>

            {/* If stock is 0 → show Out of Stock. Otherwise → show button */}
            {stock === 0 ? (
                <p style={styles.outOfStock}>Out of Stock</p>
            ) : (
                <button
                    style={styles.button}
                    onClick={() => onAddToCart(id)}
                >
                    Add to Cart ({stock} left)
                </button>
            )}
        </div>
    );
};
// Simple inline styles so you can see it clearly
const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        width: '220px',
        textAlign: 'center' as const,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        fontFamily: 'Arial'
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover' as const,
        borderRadius: '4px'
    },
    name: {
        fontSize: '16px',
        margin: '8px 0'
    },
    price: {
        color: '#e44d26',
        fontWeight: 'bold' as const,
        fontSize: '18px'
    },
    button: {
        backgroundColor: '#0077cc',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px'
    },
    outOfStock: {
        color: 'red',
        fontWeight: 'bold' as const
    }
};

export default ProductCard;