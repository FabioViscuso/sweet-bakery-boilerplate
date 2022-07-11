// import useCart custom hook
import { useCart } from '../../utils/useCart';

// import types
import { CartItemWithStats } from '../../store/cartSlice';

export const CartItemComponent = (props: CartItemWithStats) => {
    const { title, quantity, totalAmount, price } = props;

    const { addItemHandler, removeItemHandler } = useCart(props)

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