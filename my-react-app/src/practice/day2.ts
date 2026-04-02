
let age: number = 25;
let price: number = 1499.99;


let name: string = "daniyal";
let email: string = "daniyal@gmail.com"

let isActive: boolean = true;
let isLoggedIn: boolean = false;

let scores: number[] = [10,20,30,40];
let names: string[] = ["dani" , "ali" , "huzaifi"];

let userID: number | null  = null;
let token: string | undefined = undefined;

interface Product{

    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
    category: string;
    isActive: boolean;
}
// it should have all the fields mentioned in Product.
const laptop : Product = {
  id: 1,
  name: 'Dell Laptop',
  price: 150000,
  description: 'Fast laptop for developers',
  imageUrl: '/images/laptop.jpg',
  stock: 25,
  category: 'Electronics',
  isActive: true,
}

interface CartItems {
id: number;
category: string;
price?: number; // might be used or not.
product?: Product;
quantity: number;
}


// functions with types :)

function addPrices (Price1: number , Price2: number): number {
 return Price1 + Price2;
}


// arrow function :

const CalculateTotal = (items: CartItems[] , taxRate: number): number =>{
    const subTotal = items.reduce((sum , item)=>{
        return sum + (item.product!.price * item.quantity);
    }, 0)
    return subTotal * (1 + taxRate)
} 


// return nothing use void :

const logMessage = ( message: string): void =>{
    console.log ( message);

} 

const findProduct = (id: number , products: Product[]): Product | null => {
    return products.find(p => p.id === id ) ?? null ; // find returns the first product matches requirement
// ?? means if the value on my left is null or undefined , use value on the right
}

// Generics — Write Once, Use Anywhere
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNumber = getFirst([10, 20, 30]);
const firstName = getFirst(["dani" , "ali" , "nisar"]);

// Generic interface — extremely useful for API responses

interface ApiResponse<T> {
      data: T;
  success: boolean;
  message: string;
  total?: number;
}

type ProductResponse = ApiResponse <Product[]> 

type SingleProductResponse = ApiResponse <Product>;


// create src/type and put all the interfaces there Example
//src/types/product.types.ts
//src/types/user.types.ts


