import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../store/cartSlice";
import { IMG_BASE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

export const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items);
    console.log('cartItems', cartItems);

    const dispatch = useDispatch();

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <>
            <div className="w-[950px]">
                <div className="">
                <h1 className="font-bold text-2xl flex w-[850px]">Cart</h1>
                <button className="flex text-right" onClick={handleClearCart}>Empty Cart</button>
                </div>
                    <div className="flex w-[900px]">
                    {cartItems.map(item => {
                        return (
                            <div className="flex mt-4">
                                <div className="flex w-2/12">
                                    <img className="w-full h-3/5 rounded-2xl" src={`${IMG_BASE_URL}/${item?.card?.info?.imageId}`} />
                                </div>
                                <div key={item?.card?.info?.id} className="mt-2 w-10/12">
                                    <p className="flex font-medium text-gray-700">{item?.card?.info?.name}</p>
                                </div>
                                <div>
                                <p className="flex">₹{item?.card?.info?.price/ 100 || item?.card?.info?.defaultPrice/ 100}</p>
                                <button className="absolute text-white p-3 rounded-2xl mt-[-35px] ml-[5%]" onClick={() => handleRemoveItem(item)}>❎</button>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
        </>

    )
}