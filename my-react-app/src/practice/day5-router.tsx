

import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

// use navigate used to navigate to another page 

export const loginDemo: React.FC = () => {
 const navigate = useNavigate();
 console.log('login successfull');
 navigate('/products')

  return <button onClick={handleLogin}>Login</button>;
}


const handleLogin = () => {
 alert("user logged in")
}


// ── Hook 2: useParams — read :id from URL ────────────────────
// When URL is /products/42, this reads the 42




export const ProductDetailDemo: React.FC = () => {
  const {id} = useParams <{id: string}>();
  // URL is /products/42 → id is '42' (always a string from URL)
  const producId = Number(id);

    return <div>Showing product #{producId}</div>;
}

//── Hook 3: useSearchParams — read ?search=laptop from URL ───
// This is how filters and search work — they live in the URL
// So users can share links like /products?category=Electronics



export const SearchDemo: React.FC = () => {
  
const [searchParams , setSearchParams] = useSearchParams();
const search = searchParams.get('search') ?? '';
const category = searchParams.get('category') ?? 'ALL';

const handleSearch = (term: string) =>{

     // This updates the URL to /products?search=laptop&category=All
   // without any page reload
 setSearchParams({ search: term, category });
}

return (
    <div>
      <p>Current search: {search}</p>
      <p>Current category: {category}</p>
      <input
        value={search}
        onChange={e => handleSearch(e.target.value)}
        placeholder='Search...'
      />
    </div>
  );

}



export default ProductDetailDemo;
