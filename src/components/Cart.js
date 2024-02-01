import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
 
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem())
  }

  return (
    <div className="text-center m-4 p-4 ">
      <div>
        <h1 className="text-center text-2xl font-bold">Cart</h1>
      </div>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-slate-200 rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        { cartItems.length === 0 && <h1>Cart is Empty. Please Add items to the Carts !</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
