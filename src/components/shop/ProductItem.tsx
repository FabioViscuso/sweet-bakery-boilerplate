// import useDispatch hook
import { CartItem, CartItemWithStats } from '../../store/slices/cartSlice';
import { useCart } from '../../utils/useCart';

export const ProductItem = (props: CartItem) => {
    const { title, price, description, imgUrl } = props;

    const { addItemHandler } = useCart(props as CartItemWithStats);


    return (
        <li className='flex flex-row flex-wrap rounded-md bg-slate-100 w-full max-w-sm font-indieflower'>
            <img className='w-full h-40 object-cover rounded-tl-md rounded-tr-md' src={imgUrl} alt="" />
            <div className='py-4 px-4'>
                <header>
                    <h3 className='text-3xl'>{title}</h3>
                    <div className='text-2xl'>$ {price.toFixed(2)}</div>
                </header>
                <p className='text-xl'>{description}</p>
            </div>
            <button className='bg-pink-200 rounded-md w-full p-2 self-stretch' onClick={addItemHandler}>Add to Cart</button>
        </li>
    );
};