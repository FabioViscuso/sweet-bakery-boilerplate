import { useDispatch, useSelector } from 'react-redux';
import { toggleCartSliceActions } from '../../store/toggleCartSlice';

export const CartButton = () => {
    const totalItems = useSelector((state: any) => state.cartSlice.totalQuantity)
    const dispatch = useDispatch()
    const toggleCartHandler = () => {
        dispatch(toggleCartSliceActions.toggle())
    }

    return (
        <button className='flex flex-row gap-4 items-center' onClick={toggleCartHandler}>
            <span className=''>My Cart</span>
            <span className='bg-slate-700 text-gray-100 w-8 h-8 rounded-full leading-8'>{totalItems}</span>
        </button>
    );
};
