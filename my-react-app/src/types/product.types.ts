export interface Product {

    id: number;
    name: string;
    price: number;
    imageUrl: string;
    stock: number;
    category: string;
    description: string;
    isActive: boolean;
}

export interface CartItem {
    id: number;
    productId: number;
    quantity: number;
    product?: Product;
}
