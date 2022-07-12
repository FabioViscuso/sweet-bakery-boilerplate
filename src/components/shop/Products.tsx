// type CartItem import
import { CartItem } from '../../store/cartSlice';

// components import
import { ProductItem } from './ProductItem';

const DUMMY_PRODUCTS: CartItem[] = [
    { id: 'prod1', imgUrl: 'https://laboratorioespresso.it/wp-content/uploads/2018/12/tiramisu-grande.jpg', title: 'Tiramisù', price: 4.50, description: 'A classic' },
    { id: 'prod2', imgUrl: 'https://i.pinimg.com/originals/ca/ea/08/caea086803a381300f5d5f90b8b74ba7.jpg', title: 'Fruit cupcake', price: 5.00, description: 'Fruity and tasty' },
    { id: 'prod3', imgUrl: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/ultimatevanillacheesecake.jpg', title: 'Cheesecake', price: 9.99, description: 'With a variety of toppings' },
]

export const Products = () => {
    return (
        <section className='flex flex-col justify-center items-center w-full'>
            <h2 className='text-4xl mb-8 font-indieflower'>Buy your favorite products</h2>
            <ul className='flex flex-row flex-wrap gap-5 justify-between items-center w-full px-5'>
                {
                    DUMMY_PRODUCTS.map(item =>
                        <ProductItem
                            key={item.id}
                            id={item.id}
                            imgUrl={item.imgUrl}
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