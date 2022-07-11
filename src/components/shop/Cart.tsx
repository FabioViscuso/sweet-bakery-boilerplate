import { CartItemComponent } from "./CartItemComponent"
import { CartItemWithStats } from "../../store/cartSlice";
import { useSelector } from 'react-redux';

export const Cart = () => {
    const items = useSelector((state: any/* USE AN APPROPRIATE TYPE */) => state.cartSlice.items)
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