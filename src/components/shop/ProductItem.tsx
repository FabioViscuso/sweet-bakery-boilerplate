// import type CartItem and reducers
import { CartItem, cartSliceActions } from '../../store/cartSlice';

// import useDispatch hook
import { useDispatch } from 'react-redux';

export const ProductItem = (props: CartItem) => {
    const { id, title, price, description } = props;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartSliceActions.addToCart({ id, title, price, description }))
    }

    return (
        <li className='flex flex-row rounded-md bg-slate-100 w-max px-10 py-5'>
            <div>
                <header>
                    <h3 className='text-3xl'>{title}</h3>
                    <div>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
            </div>
            <button className='bg-green-400 rounded-xl w-max p-2 self-start' onClick={addToCartHandler}>Add to Cart</button>
        </li>
    );
};