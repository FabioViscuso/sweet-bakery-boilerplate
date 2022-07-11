import { useDispatch } from 'react-redux';
import { CartItemWithStats, cartSliceActions } from '../../store/cartSlice';

type Props = {
    item: CartItemWithStats
}

export const CartItemComponent = (props: Props) => {
    const { id, title, quantity, description, totalAmount, price } = props.item;
    const dispatch = useDispatch()

    const addItemHandler = () => {
        dispatch(cartSliceActions.addToCart({ id, title, price, description }))
    }

    const removeItemHandler = () => {
        dispatch(cartSliceActions.removeFromCart(id))
    }

    return (
        <li className='flex flex-row bg-slate-200'>
            <header className='py-4 px-3'>
                <h3>{title}</h3>
                <div>
                    ${totalAmount.toFixed(2)}{' '}
                    <span>(${price.toFixed(2)}/item)</span>
                </div>
                <div>
                    x <span>{quantity}</span>
                </div>
            </header>
            <div className='flex flex-col justify-center'>
                <button className='bg-red-400 rounded-sm px-3 py-2 h-1/2' onClick={removeItemHandler}>-</button>
                <button className='bg-green-400 rounded-sm px-3 py-2 h-1/2' onClick={addItemHandler}>+</button>
            </div>
        </li>
    );
};
