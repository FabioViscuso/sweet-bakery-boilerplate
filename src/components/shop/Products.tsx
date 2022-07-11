// type CartItem import
import { CartItem } from '../../store/cartSlice';

// components import
import { ProductItem } from './ProductItem';

const DUMMY_PRODUCTS: CartItem[] = [
    { id: 'prod1', title: 'Tiramisù', price: 4.50, description: 'A classic' },
    { id: 'prod2', title: 'Fruit cupcake', price: 5.00, description: 'Fruity and tasty' },
    { id: 'prod3', title: 'Cheesecake', price: 9.99, description: 'With a variety of toppings' },
]

export const Products = () => {
    return (
        <section className='flex flex-col justify-center items-center'>
            <h2 className='text-4xl mb-8 font-indieflower'>Buy your favorite products</h2>
            <ul className='flex flex-col gap-5 justify-center items-center'>
                {
                    DUMMY_PRODUCTS.map(item =>
                        <ProductItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                        />
                    )
                }
            </ul>
        </section>
    );
};