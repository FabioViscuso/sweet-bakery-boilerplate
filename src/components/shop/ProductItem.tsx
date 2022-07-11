// import useDispatch hook
import { useCart } from '../../utils/useCart';

export const ProductItem = (props: any) => {
    const { title, price, description } = props;

    const { addItemHandler } = useCart(props);


    return (
        <li className='flex flex-row rounded-md bg-slate-100 w-max px-10 py-5'>
            <div>
                <header>
                    <h3 className='text-3xl'>{title}</h3>
                    <div>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
            </div>
            <button className='bg-green-400 rounded-xl w-max p-2 self-start' onClick={addItemHandler}>Add to Cart</button>
        </li>
    );
};