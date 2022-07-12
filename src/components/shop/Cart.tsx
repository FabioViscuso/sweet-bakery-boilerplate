// Import components
import { CartItemComponent } from "./CartItem"

// Import useSelectorHook
import { useSelector } from 'react-redux';

// Import RootState and CartItemWithStats types
import { RootState } from "../../store/Store";
import { CartItemWithStats } from "../../store/cartSlice";

export const Cart = () => {
    const items = useSelector((state: RootState) => state.cartSlice.items)
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-4xl font-caveat">Your Shopping Cart</h2>
            <ul className="flex flex-row gap-5">
                {
                    items.map((item: CartItemWithStats, index: number) =>
                        <CartItemComponent
                            key={index}
                            id={item.id}
                            title={item.title}
                            imgUrl={item.imgUrl}
                            description={item.description}
                            quantity={item.quantity}
                            totalAmount={item.totalAmount}
                            price={item.price}
                        />
                    )
                }
            </ul>
        </div>
    )
}