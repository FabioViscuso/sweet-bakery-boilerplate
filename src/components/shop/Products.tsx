// type CartItem import
import { CartItem } from '../../store/cartSlice';

// components import
import { ProductItem } from './ProductItem';

const DUMMY_PRODUCTS: CartItem[] = [
    { id: 'prod1', title: 'sneakers', price: 50.80, description: 'comfy shoes for everyday' },
    { id: 'prod2', title: 'formal shoes', price: 108.00, description: 'elegant shoes for occasions' },
    { id: 'prod3', title: 'crocs', price: 9.99, description: 'ugly stuff, don\'t buy' },
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