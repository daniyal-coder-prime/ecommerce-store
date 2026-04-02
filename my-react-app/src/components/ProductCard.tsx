import React from "react";

// define what data this component needs 

interface ProductCardProps {

    id : number;
    name: string 
    price: number;
    imageUrl: string;
    stock: number;
    onAddToCart: (id:number) => void
}

const ProductCard: React.FC<ProductCardProps> = ({

  id,
  name,
  price,
  imageUrl,
  stock,
  onAddToCart
}) => {

    return (

        <div className='product-card'> {/* Comments in JSX use this syntax, NOT // */}
         <img src={imageUrl} alt={name} />
          <h3>{name}</h3>
            {/* toLocaleString() formats 150000 as '150,000' */}
               <p>PKR {price.toLocaleString()}</p>
               {/* Conditional rendering: if stock is 0, show Out of Stock */}
                 {stock === 0 ? (
        <p>Out of Stock</p>
      ) : (
        <button onClick={() => onAddToCart(id)}>
          Add to Cart ({stock} left)
        </button>
      )}
    </div>
  );
    
}

export default ProductCard;