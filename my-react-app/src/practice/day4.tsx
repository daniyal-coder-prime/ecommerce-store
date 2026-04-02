import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

// ─── EXAMPLE 1: Simple counter ───────────────────────────────
const Counter: React.FC = () => {

    interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}


  const [count, setCount] = useState(0);
  const [name , setName] = useState('');
  const [isOpen , setIsOpen] = useState(false);
  const [products , setProducts] = useState <Product[]> ([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [error , setError] = useState <string | null > (null);
  const [age , setAge] = useState (0)
  const [quantity , setQuantity] = useState (1);
  const MAX_QUANTITY = 99;

  const increase = () =>{
    setQuantity (prev => Math.min(prev + 1, MAX_QUANTITY));
  }

  const decrease = () => {
 // Never go below 1
 setQuantity(prev => Math.max(prev - 1, 1));
 };

  return (
    <div>
      <p>Quanity: {quantity}</p>
      <button onClick={increase}>
        Increase
      </button>

      <button onClick={decrease}>
        Decrease
      </button>

      <button onClick={() => setQuantity(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;