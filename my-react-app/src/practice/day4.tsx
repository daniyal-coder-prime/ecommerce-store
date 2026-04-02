import { useEffect, useState, useMemo } from "react";

// ─── EXAMPLE 1: Simple counter ───────────────────────────────
const Counter: React.FC = () => {
  const [products] = useState<Product[]>([
    { id: 1, name: "Dell Laptop", price: 150000, stock: 5 },
    { id: 2, name: "iPhone 15", price: 280000, stock: 0 },
    { id: 3, name: "Samsung TV", price: 95000, stock: 12 },
  ]);
   const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("All");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [age, setAge] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // run once , when I enter room , bring me products

 /*  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // We'll use fake data for now since we have no backend yet
        const fakeProducts: Product[] = [
          { id: 1, name: "Dell Laptop", price: 150000, stock: 5 },
          { id: 2, name: "iPhone 15", price: 280000, stock: 0 },
          { id: 3, name: "Samsung TV", price: 95000, stock: 12 },
        ];

        // Simulate a network delay of 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setProducts(fakeProducts);
      } catch (err) {
        setError("Failed to load products. Please try again.");
      } finally {
        // finally ALWAYS runs — even if there was an error
        // Perfect place to turn off the loading spinner
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
 */
  // run when category changes

  useEffect(() => {
    console.log("category changes to", category);
  }, [category]);

  // clean up

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Still on this page...");
    }, 3000);

    // This return function runs when component unmounts
    // Without it, the interval keeps running forever in the background
    return () => {
      clearInterval(interval);
      console.log("Component removed — interval cleaned up");
    };
  }, []);
  interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
  }

  if (loading) return <div>Loading products...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  const MAX_QUANTITY = 99;

  const increase = () => {
    setQuantity((prev) => Math.min(prev + 1, MAX_QUANTITY));
  };

  const decrease = () => {
    // Never go below 1
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>All</option>
        <option>Electronics</option>
        <option>Clothing</option>
      </select>

      {products.map((p) => (
        <div key={p.id}>
          <strong>{p.name}</strong> — PKR {p.price.toLocaleString()}
        </div>
      ))}
    </div>
  );
};

export default Counter;
